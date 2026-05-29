const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const apiVersion = '2025-01';

async function shopifyFetch<T>({ query, variables }: { query: string; variables?: object }): Promise<T> {
  const res = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error(`Shopify API error: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data as T;
}

// ─── Products ───────────────────────────────────────────────────────────────

export async function getAllProducts() {
  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>({
    query: `{
      products(first: 50) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice { amount currencyCode }
            }
            images(first: 1) {
              edges { node { url altText } }
            }
            tags
          }
        }
      }
    }`,
  });
  return data.products.edges.map((e) => e.node);
}

export async function getProductByHandle(handle: string) {
  const data = await shopifyFetch<{ productByHandle: ShopifyProductDetail }>({
    query: `query ProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id title handle description
        priceRange { minVariantPrice { amount currencyCode } }
        images(first: 6) { edges { node { url altText } } }
        variants(first: 20) {
          edges {
            node {
              id title availableForSale
              price { amount currencyCode }
              selectedOptions { name value }
            }
          }
        }
        options { name values }
        tags
      }
    }`,
    variables: { handle },
  });
  return data.productByHandle;
}

// ─── Cart ────────────────────────────────────────────────────────────────────

export async function createCart() {
  const data = await shopifyFetch<{ cartCreate: { cart: ShopifyCart } }>({
    query: `mutation {
      cartCreate {
        cart { id checkoutUrl }
      }
    }`,
  });
  return data.cartCreate.cart;
}

export async function addToCart(cartId: string, variantId: string, quantity: number) {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: ShopifyCart } }>({
    query: `mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id checkoutUrl
          lines(first: 50) {
            edges {
              node {
                id quantity
                merchandise { ... on ProductVariant { id title price { amount currencyCode } product { title images(first:1){ edges{ node{ url altText } } } } } }
              }
            }
          }
          cost { totalAmount { amount currencyCode } }
        }
      }
    }`,
    variables: { cartId, lines: [{ merchandiseId: variantId, quantity }] },
  });
  return data.cartLinesAdd.cart;
}

export async function removeFromCart(cartId: string, lineIds: string[]) {
  const data = await shopifyFetch<{ cartLinesRemove: { cart: ShopifyCart } }>({
    query: `mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id checkoutUrl
          lines(first: 50) {
            edges {
              node {
                id quantity
                merchandise { ... on ProductVariant { id title price { amount currencyCode } product { title images(first:1){ edges{ node{ url altText } } } } } }
              }
            }
          }
          cost { totalAmount { amount currencyCode } }
        }
      }
    }`,
    variables: { cartId, lineIds },
  });
  return data.cartLinesRemove.cart;
}

export async function getCart(cartId: string) {
  const data = await shopifyFetch<{ cart: ShopifyCart }>({
    query: `query GetCart($cartId: ID!) {
      cart(id: $cartId) {
        id checkoutUrl
        lines(first: 50) {
          edges {
            node {
              id quantity
              merchandise { ... on ProductVariant { id title price { amount currencyCode } product { title images(first:1){ edges{ node{ url altText } } } } } }
            }
          }
        }
        cost { totalAmount { amount currencyCode } }
      }
    }`,
    variables: { cartId },
  });
  return data.cart;
}

// ─── Customer Auth ───────────────────────────────────────────────────────────

export async function customerCreate(input: { firstName: string; lastName: string; email: string; password: string }) {
  const data = await shopifyFetch<{ customerCreate: { customer: ShopifyCustomer | null; customerUserErrors: { code: string; field: string[]; message: string }[] } }>({
    query: `mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer { id email firstName lastName }
        customerUserErrors { code field message }
      }
    }`,
    variables: { input },
  });
  return data.customerCreate;
}

export async function customerAccessTokenCreate(email: string, password: string) {
  const data = await shopifyFetch<{ customerAccessTokenCreate: { customerAccessToken: { accessToken: string; expiresAt: string } | null; customerUserErrors: { code: string; message: string }[] } }>({
    query: `mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
      customerAccessTokenCreate(input: $input) {
        customerAccessToken { accessToken expiresAt }
        customerUserErrors { code message }
      }
    }`,
    variables: { input: { email, password } },
  });
  return data.customerAccessTokenCreate;
}

export async function customerAccessTokenDelete(accessToken: string) {
  await shopifyFetch({
    query: `mutation customerAccessTokenDelete($customerAccessToken: String!) {
      customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
        deletedAccessToken
      }
    }`,
    variables: { customerAccessToken: accessToken },
  });
}

export async function getCustomer(accessToken: string) {
  const data = await shopifyFetch<{ customer: ShopifyCustomer | null }>({
    query: `query customer($customerAccessToken: String!) {
      customer(customerAccessToken: $customerAccessToken) {
        id firstName lastName email phone
        orders(first: 10, sortKey: PROCESSED_AT, reverse: true) {
          edges {
            node {
              id orderNumber processedAt financialStatus fulfillmentStatus statusUrl
              currentTotalPrice { amount currencyCode }
              lineItems(first: 5) {
                edges { node { title quantity } }
              }
            }
          }
        }
        defaultAddress {
          firstName lastName address1 city province country zip phone
        }
      }
    }`,
    variables: { customerAccessToken: accessToken },
  });
  return data.customer;
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  images: { edges: { node: { url: string; altText: string | null } }[] };
  tags: string[];
}

export interface ShopifyProductDetail extends ShopifyProduct {
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        price: { amount: string; currencyCode: string };
        selectedOptions: { name: string; value: string }[];
      };
    }[];
  };
  options: { name: string; values: string[] }[];
}

export interface ShopifyCartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    price: { amount: string; currencyCode: string };
    product: {
      title: string;
      images: { edges: { node: { url: string; altText: string | null } }[] };
    };
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  lines: { edges: { node: ShopifyCartLine }[] };
  cost: { totalAmount: { amount: string; currencyCode: string } };
}

export interface ShopifyOrder {
  id: string;
  orderNumber: number;
  processedAt: string;
  financialStatus: string;
  fulfillmentStatus: string;
  statusUrl: string;
  currentTotalPrice: { amount: string; currencyCode: string };
  lineItems: { edges: { node: { title: string; quantity: number } }[] };
}

export interface ShopifyCustomer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  orders: { edges: { node: ShopifyOrder }[] };
  defaultAddress: {
    firstName: string; lastName: string; address1: string;
    city: string; province: string; country: string; zip: string; phone: string | null;
  } | null;
}

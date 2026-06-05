'use client';

import { useState } from 'react';
import AddToCartButton from './AddToCartButton';

interface Variant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: { amount: string; currencyCode: string };
  selectedOptions: { name: string; value: string }[];
}

interface Option {
  name: string;
  values: string[];
}

interface Props {
  variants: Variant[];
  options: Option[];
}

export default function ProductActions({ variants, options }: Props) {
  const filteredOptions = options.filter((o) => o.name !== 'Title');

  const initialSelection: Record<string, string> = {};
  filteredOptions.forEach((o) => { initialSelection[o.name] = o.values[0]; });

  const [selected, setSelected] = useState<Record<string, string>>(initialSelection);

  const matchedVariant = variants.find((v) =>
    v.selectedOptions.every((so) => selected[so.name] === so.value)
  ) ?? variants[0];

  const salePrice = parseFloat(matchedVariant?.price?.amount ?? '0');
  const mrpPrice = salePrice / 0.9;
  const currency = matchedVariant?.price?.currencyCode ?? 'INR';

  return (
    <div className="space-y-5">

      {/* Dynamic price — updates with variant selection */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="inline-block bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">10% OFF</span>
        <span className="text-xl sm:text-2xl font-bold text-[#2c2c2c]">{currency} {salePrice.toFixed(2)}</span>
        <span className="text-base text-[#aaa] line-through">{currency} {mrpPrice.toFixed(0)}</span>
      </div>

      {filteredOptions.map((option) => (
        <div key={option.name}>
          <p className="text-sm font-semibold text-[#2c2c2c] mb-2">{option.name}</p>
          <div className="flex flex-wrap gap-2">
            {option.values.map((value) => {
              const isActive = selected[option.name] === value;
              return (
                <button
                  key={value}
                  onClick={() => setSelected((s) => ({ ...s, [option.name]: value }))}
                  className={`px-4 py-2 border rounded-full text-sm transition-colors ${
                    isActive
                      ? 'bg-[#4a7c59] border-[#4a7c59] text-white font-medium'
                      : 'border-[#e0d8cc] text-[#555] hover:border-[#4a7c59] hover:text-[#4a7c59]'
                  }`}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <AddToCartButton
        variantId={matchedVariant?.id}
        available={matchedVariant?.availableForSale ?? false}
      />
    </div>
  );
}

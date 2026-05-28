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

  return (
    <div className="space-y-5">
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

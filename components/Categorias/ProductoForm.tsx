"use client";

import CategoryDetailsPanel from "./CategoryDetailsPanel";
import ProductDetailsPanel from "./ProductDetailsPanel";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedCategory: any | null; // tu tipo real
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedProduct: any | null; // tu tipo real
}

export default function RightPanel({
  selectedCategory,
  selectedProduct,
}: Props) {
  // Si tenemos producto => prioridad
  if (selectedProduct)
    return <ProductDetailsPanel producto={selectedProduct} />;

  // Si solo hay categoría
  if (selectedCategory)
    return <CategoryDetailsPanel categoria={selectedCategory} />;

  // Placeholder
  return (
    <div className="flex-1 bg-white rounded-xl shadow p-8 text-gray-400 flex items-center justify-center">
      Selecciona una categoría o producto
    </div>
  );
}

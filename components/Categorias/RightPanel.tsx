"use client";

import CategoryDetailsPanel from "./CategoryDetailsPanel";
import ProductDetailsPanel from "./ProductDetailsPanel";

interface RightPanelProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedCategory: any | null; // pon aquí tu tipo Categoria
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedProduct: any | null; // pon aquí tu tipo Producto
}

export default function RightPanel({
  selectedCategory,
  selectedProduct,
}: RightPanelProps) {
  /* --- 1. Si hay producto, prioridad --- */
  if (selectedProduct) {
    return <ProductDetailsPanel producto={selectedProduct} />;
  }

  /* --- 2. Si sólo hay categoría --- */
  if (selectedCategory) {
    return <CategoryDetailsPanel categoria={selectedCategory} />;
  }

  /* --- 3. Nada seleccionado --- */
  return (
    <div className="flex-1 bg-white rounded-xl shadow p-8 text-gray-400 flex items-center justify-center">
      Selecciona una categoría o producto
    </div>
  );
}

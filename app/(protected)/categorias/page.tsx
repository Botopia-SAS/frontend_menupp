"use client";

import { useState } from "react";
import CategoriasList from "@/components/Categorias/CategoriasList";
import ProductosList from "@/components/Categorias/ProductoList";
import RightPanel from "@/components/Categorias/RightPanel";

/* --- Tipos ---------------------------------------------------------------- */
interface Categoria {
  id: string;
  nombre: string;
  estilo: string;
  visible: boolean;
  imgUrl?: string;
  /* …otros campos */
}

interface Producto {
  id: string;
  categoriaId: string;
  nombre: string;
  visible: boolean;
  img1?: string;
  /* …otros campos */
}

/* --- Mock inicial opcional ------------------------------------------------ */
const mockCategorias: Categoria[] = [
  { id: "cat1", nombre: "Entradas", estilo: "Con imágenes", visible: true },
];

const mockProductos: Producto[] = [
  { id: "prod1", categoriaId: "cat1", nombre: "Papas IRRVRNT", visible: true },
];

/* ------------------------------------------------------------------------- */
export default function CategoriasPage() {
  /* Datos */
  const [categorias, setCategorias] = useState<Categoria[]>(mockCategorias);
  const [productos, setProductos] = useState<Producto[]>(mockProductos);

  /* Selección */
  const [selectedCategory, setSelectedCategory] = useState<Categoria | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);

  /* ------------ Callbacks ------------ */
  const handleSelectCategory = (name: string) => {
    const obj = categorias.find((c) => c.nombre === name) || null;
    setSelectedCategory(obj);
    setSelectedProduct(null); // limpio producto si cambio categoría
  };

  const handleSelectProduct = (name: string) => {
    const obj = productos.find((p) => p.nombre === name) || null;
    setSelectedProduct(obj);
  };

  const handleAddCategory = (cat: Categoria) =>
    setCategorias((prev) => [...prev, cat]);

  const handleAddProduct = (prod: Producto) =>
    setProductos((prev) => [
      ...prev,
      { ...prod, categoriaId: selectedCategory!.id },
    ]);

  /* ----------------------------------- */
  return (
    <div className="flex gap-4 pt-20 px-4">
      {/* ----------- Columna 1 ------------ */}
      <CategoriasList
        data={categorias}
        selected={selectedCategory?.nombre || null}
        onSelect={handleSelectCategory}
        onAdd={handleAddCategory}
      />

      {/* ----------- Columna 2 ------------ */}
      <ProductosList
        data={productos.filter((p) => p.categoriaId === selectedCategory?.id)}
        category={selectedCategory}
        selected={selectedProduct?.nombre || null}
        onSelect={handleSelectProduct}
        onAdd={handleAddProduct}
      />

      {/* ----------- Columna 3 ------------ */}
      <RightPanel
        selectedCategory={selectedCategory}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}

"use client";
import { useState } from "react";
import { Eye, Pencil, Trash } from "lucide-react";

// Re-usa la lógica de tu CategoryFormModal, pero sin modal
export default function CategoryDetailsPanel({
  categoria,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categoria: any;
}) {
  const [nombre, setNombre] = useState(categoria.nombre);
  const [descripcion, setDescripcion] = useState(categoria.descripcion || "");
  const [] = useState(categoria.estilo);
  const [] = useState(categoria.columna);
  const [] = useState(categoria.navegacion);
  const [visible, setVisible] = useState(categoria.visible);

  return (
    <div className="flex-1 bg-white rounded-xl shadow p-6 space-y-4 overflow-y-auto">
      {/* Cabecera + visibilidad */}
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{nombre}</h2>
        <button
          onClick={() => setVisible(!visible)}
          className="border px-3 py-1 rounded-full flex items-center gap-2 text-sm"
        >
          <span
            className={`w-3 h-3 rounded-full ${
              visible ? "bg-green-500" : "bg-red-600"
            }`}
          />
          {visible ? "Visible" : "Oculta"}
        </button>
      </div>

      {/* Imagen */}
      <div className="w-full">
        <div className="relative">
          <img
            src={categoria.imgUrl}
            alt={nombre}
            className="w-full h-[180px] object-cover rounded"
          />
          <div className="absolute inset-0 bg-black/40 rounded flex gap-2 items-center justify-center opacity-0 hover:opacity-100 transition">
            <Eye className="text-white" />
            <Pencil className="text-white" />
            <Trash className="text-red-500" />
          </div>
        </div>
        <p className="text-xs mt-1 text-gray-500">720 × 240 px</p>
      </div>

      {/* Nombre */}
      <label className="block text-sm font-medium">Nombre</label>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full border rounded p-2"
        maxLength={40}
      />

      {/* Descripción */}
      <label className="block text-sm font-medium">Descripción</label>
      <textarea
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        className="w-full border rounded p-2"
        rows={4}
        maxLength={10000}
      />

      {/* --- Re-usa la misma UI de estilos/columnas/navegación que tienes en modal --- */}
      {/* ...omito por brevedad: copia-pega botones de tu CategoriaFormModal ... */}

      <button className="w-full bg-indigo-700 text-white py-2 rounded">
        Guardar
      </button>
    </div>
  );
}

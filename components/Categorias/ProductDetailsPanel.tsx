"use client";

import { useState } from "react";
// Make sure ModifierSelectorModal.tsx exists in the same folder, or update the path if it's elsewhere.
import ModifierSelectorModal from "./ModifierSelectorModal";
import { GripVertical } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductDetailsPanel({ producto }: { producto: any }) {
  const [tab, setTab] = useState<"basics" | "mods">("basics");
  const [imagenes] = useState<(string | null)[]>([producto.img1, null, null]);
  const [showModsModal, setShowModsModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [mods, setMods] = useState<any[]>([]); // [{id,name}…]

  return (
    <div className="flex-1 bg-white rounded-xl shadow p-6 space-y-4 overflow-y-auto">
      {/* Cabecera */}
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{producto.nombre}</h2>

        {/* mismo dropdown visible/oculto que ya tienes */}
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setTab("basics")}
          className={`px-3 py-1 rounded ${
            tab === "basics" ? "bg-indigo-900 text-white" : "bg-gray-200"
          }`}
        >
          Datos básicos
        </button>
        <button
          onClick={() => setTab("mods")}
          className={`px-3 py-1 rounded ${
            tab === "mods" ? "bg-indigo-900 text-white" : "bg-gray-200"
          }`}
        >
          Adiciones/Acompañantes
        </button>
      </div>

      {tab === "basics" && (
        <>
          {/* --- Galería 3 imágenes --- */}
          <div className="grid grid-cols-3 gap-2">
            {imagenes.map((img, i) => (
              <div
                key={i}
                className="aspect-square border rounded flex items-center justify-center overflow-hidden"
              >
                {img ? (
                  <img src={img} className="object-cover w-full h-full" />
                ) : (
                  <span className="text-3xl text-gray-400">+</span>
                )}
              </div>
            ))}
          </div>

          {/* --- Re-usa tu formulario ProductoFormModal aquí (nombre, desc, precios, acciones) --- */}
          {/* … copia bloques de inputs del modal … */}
        </>
      )}

      {tab === "mods" && (
        <>
          <h3 className="font-medium">Adiciones y opciones</h3>

          <button
            onClick={() => setShowModsModal(true)}
            className="w-full bg-gray-200 text-xl py-2 rounded mb-3"
          >
            +
          </button>

          {/* lista de modificadores añadidos (drag-and-drop rápido) */}
          <ul className="space-y-1">
            {mods.map((m) => (
              <li
                key={m.id}
                className="p-2 bg-gray-50 rounded flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <GripVertical className="w-4 h-4 text-gray-400" />
                  {m.name}
                </div>
                <button
                  onClick={() =>
                    setMods((prev) => prev.filter((x) => x.id !== m.id))
                  }
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      <button className="w-full bg-indigo-700 text-white py-2 rounded">
        Guardar
      </button>

      {showModsModal && (
        <ModifierSelectorModal
          modsSelected={mods}
          onClose={() => setShowModsModal(false)}
          onAdd={(list) => {
            setMods(list);
            setShowModsModal(false);
          }}
        />
      )}
    </div>
  );
}

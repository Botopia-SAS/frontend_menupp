"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";

// Mock grupos de modificadores
const grupos = [
  {
    id: "acid",
    nombre: "Salsas Ácidas y Dulces",
    opciones: ["Lemon Pepper", "Mostaza Dulce", "Miel Ahumada", "BBQ"],
  },
  {
    id: "mayo",
    nombre: "Salsas Mayo",
    opciones: ["Ajo", "De la Casa", "Tártara"],
  },
  {
    id: "picante",
    nombre: "Salsas Picantes",
    opciones: [
      "BBQ Picante",
      "Sweet Chili",
      "Búfalo Ardiente",
      "Picante IRRVRNT",
    ],
  },
];

export default function ModifierSelectorModal({
  modsSelected,
  onClose,
  onAdd,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modsSelected: any[];
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onAdd: (list: any[]) => void;
}) {
  const [seleccionados, setSeleccionados] = useState<string[]>(
    modsSelected.map((m) => m.id)
  );

  const toggle = (id: string) =>
    setSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">Agregar modificadores</h2>

      <div className="space-y-4">
        {grupos.map((g) => (
          <div key={g.id} className="border rounded p-4 space-y-1">
            <div className="font-medium">{g.nombre}</div>
            {g.opciones.map((op) => (
              <label key={op} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={seleccionados.includes(op)}
                  onChange={() => toggle(op)}
                />
                {op}
              </label>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={() => onAdd(seleccionados.map((id) => ({ id, name: id })))}
        className="w-full mt-6 bg-indigo-500 text-white py-2 rounded"
      >
        Agregar
      </button>
    </Modal>
  );
}

"use client";

import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}

export default function CreateSedeModal({ open, onClose, onCreate }: Props) {
  const [name, setName] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm space-y-4">
        <h2 className="text-lg font-semibold">Nueva sede</h2>

        <input
          type="text"
          placeholder="Nombre de la sede"
          className="w-full border px-4 py-2 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="text-sm px-4 py-1 rounded-md hover:underline"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              if (name.trim()) {
                onCreate(name.trim());
                setName("");
              }
            }}
            className="bg-[#98a8f8] text-white px-4 py-1 rounded-md text-sm hover:bg-[#7f8dee] transition"
          >
            Crear
          </button>
        </div>
      </div>
    </div>
  );
}

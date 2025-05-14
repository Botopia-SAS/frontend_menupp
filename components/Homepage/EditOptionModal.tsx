"use client";
import React, { useState } from "react";
import Modal from "../ui/Modal";

import { icons } from "lucide-react"; // listado de íconos

export default function EditOptionModal({
  option,
  onSave,
  onClose,
}: {
  option: { label: string; icon: string };
  onSave: (data: { label: string; icon: string }) => void;
  onClose: () => void;
}) {
  const [label, setLabel] = useState(option.label);
  const [icon, setIcon] = useState(option.icon);

  return (
    <Modal onClose={onClose}>
      <h3 className="text-xl font-semibold mb-4">{option.label}</h3>

      <label className="block text-sm font-medium mb-1">Nombre del botón</label>
      <input
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        className="w-full border rounded-md px-3 py-2 mb-4"
      />

      <label className="block text-sm font-medium mb-1">Ícono</label>
      <select
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        className="w-full border rounded-md px-3 py-2 mb-6"
      >
        {Object.keys(icons).map((ic) => (
          <option key={ic} value={ic}>
            {ic}
          </option>
        ))}
      </select>

      <button
        onClick={() => onSave({ label, icon })}
        className="w-full  hover:bg-blue-700 text-white rounded-md py-2 font-medium"
      >
        Actualizar
      </button>
    </Modal>
  );
}

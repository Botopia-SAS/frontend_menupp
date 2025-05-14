"use client";
import React, { useEffect, useRef } from "react";

type Props = {
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function OptionDropdown({ onClose, onEdit, onDelete }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) onClose();
    };
    window.addEventListener("mousedown", handle);
    return () => window.removeEventListener("mousedown", handle);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-lg z-10 text-sm"
    >
      <button
        onClick={onEdit}
        className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-50"
      >
        Editar botón
        <span className="text-gray-400">✏️</span>
      </button>

      <button
        onClick={onDelete}
        className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-50 text-red-600"
      >
        Eliminar
        <span>🗑️</span>
      </button>
    </div>
  );
}

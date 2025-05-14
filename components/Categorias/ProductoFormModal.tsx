"use client";

import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import { Trash2, MoreVertical, Tag } from "lucide-react";

interface Props {
  onClose: () => void;
  onSave: (producto: { nombre: string; visible: boolean }) => void;
}

export default function ProductoFormModal({ onClose, onSave }: Props) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [visible, setVisible] = useState(true);
  const [precios, setPrecios] = useState([{ nombre: "", valor: 0 }]);
  const [acciones, setAcciones] = useState({
    esconder: false,
    recomendado: false,
    nuevo: false,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const agregarPrecio = () =>
    setPrecios([...precios, { nombre: "", valor: 0 }]);

  const actualizarPrecio = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const nuevos = [...precios];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (nuevos[index] as any)[field] = value;
    setPrecios(nuevos);
  };

  const eliminarPrecio = (index: number) => {
    const nuevos = precios.filter((_, i) => i !== index);
    setPrecios(nuevos);
  };

  const handleGuardar = () => {
    if (!nombre.trim()) return;
    onSave({ nombre, visible });
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">Crear nuevo producto</h2>

      <div className="space-y-4 text-sm">
        {/* Visible dropdown */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="border px-3 py-1 rounded-full flex items-center gap-2 text-sm"
          >
            <span
              className={`w-3 h-3 rounded-full ${
                visible ? "bg-green-500" : "bg-red-600"
              }`}
            />
            {visible ? "Visible" : "Oculto"}
            <span className="ml-1">▾</span>
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 mt-1 w-28 bg-white border rounded shadow text-sm">
              <div
                className="px-3 py-1 hover:bg-gray-100 flex gap-2 items-center cursor-pointer"
                onClick={() => {
                  setVisible(true);
                  setDropdownOpen(false);
                }}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Visible
              </div>
              <div
                className="px-3 py-1 hover:bg-gray-100 flex gap-2 items-center cursor-pointer"
                onClick={() => {
                  setVisible(false);
                  setDropdownOpen(false);
                }}
              >
                <span className="w-2 h-2 bg-red-600 rounded-full" />
                Oculto
              </div>
            </div>
          )}
        </div>

        {/* Nombre */}
        <div>
          <label className="block font-medium mb-1">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border rounded p-2"
            maxLength={40}
          />
        </div>

        {/* Descripción */}
        <div>
          <label className="block font-medium mb-1">Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full border rounded p-2"
            rows={4}
            maxLength={10000}
          />
          <div className="text-right text-xs text-gray-500">
            {descripcion.length}/10000
          </div>
        </div>

        {/* Precios */}
        <div>
          <label className="block font-medium mb-1">Precios</label>
          <div className="border rounded p-2 space-y-2">
            {precios.map((p, i) => (
              <div key={i} className="flex gap-2 items-center">
                <input
                  placeholder="Nombre"
                  className="border rounded p-2 flex-1"
                  value={p.nombre}
                  onChange={(e) =>
                    actualizarPrecio(i, "nombre", e.target.value)
                  }
                />
                <input
                  type="number"
                  className="border rounded p-2 w-24"
                  value={p.valor}
                  onChange={(e) =>
                    actualizarPrecio(i, "valor", +e.target.value)
                  }
                />
                <Tag className="text-purple-500 w-4 h-4" />
                <MoreVertical className="w-4 h-4 cursor-pointer" />
                {i > 0 && (
                  <Trash2
                    className="w-4 h-4 text-red-500 cursor-pointer"
                    onClick={() => eliminarPrecio(i)}
                  />
                )}
              </div>
            ))}

            <button
              onClick={agregarPrecio}
              className="text-sm text-indigo-600 mt-2 flex items-center gap-1"
            >
              Agregar más precios <span className="text-lg">+</span>
            </button>
          </div>
        </div>

        {/* Acciones */}
        <div className="space-y-2">
          <label className="block font-medium">Acciones</label>
          {["esconder", "recomendado", "nuevo"].map((key) => (
            <div key={key} className="flex justify-between items-center">
              <span className="capitalize">
                {key === "esconder"
                  ? "Esconder precios"
                  : key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={acciones[key as keyof typeof acciones]}
                  onChange={() =>
                    setAcciones((prev) => ({
                      ...prev,
                      [key]: !prev[key as keyof typeof acciones],
                    }))
                  }
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500" />
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full shadow" />
              </label>
            </div>
          ))}
        </div>

        <button
          onClick={handleGuardar}
          className="w-full mt-4 bg-indigo-700 text-white py-2 rounded hover:bg-indigo-800"
        >
          Guardar
        </button>
      </div>
    </Modal>
  );
}

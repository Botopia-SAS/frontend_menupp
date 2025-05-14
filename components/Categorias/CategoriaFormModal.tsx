"use client";

import React, { useState } from "react";
import Modal from "@/components/ui/Modal";

const estilos = ["Con imágenes", "En lista", "Banner"];
const columnas = ["1", "2", "3"];
const navegaciones = ["Vertical", "Horizontal"];
const acciones = ["Ninguna", "Ver productos", "Ir a link"];

interface Props {
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSave: (categoria: any) => void;
}

export default function CategoriaFormModal({ onClose, onSave }: Props) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estilo, setEstilo] = useState(estilos[1]);
  const [columna, setColumna] = useState(columnas[0]);
  const [navegacion, setNavegacion] = useState(navegaciones[0]);
  const [] = useState<File | null>(null);
  const [accionClick, setAccionClick] = useState(acciones[0]);
  const [link, setLink] = useState("");
  const [errorNombre, setErrorNombre] = useState(false);
  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const caracteres = descripcion.length;
  const limite = 10000;

  const handleSubmit = () => {
    if (!nombre.trim()) {
      setErrorNombre(true);
      return;
    }

    onSave({
      nombre,
      descripcion,
      estilo,
      columna,
      navegacion,
      accionClick,
      link,
      visible: true,
    });

    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">Crear nueva categoría</h2>

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
            {visible ? "Visible" : "Oculta"}
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
                Oculta
              </div>
            </div>
          )}
        </div>

        {/* Nombre */}
        <div>
          <label className="block font-medium mb-1">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              setErrorNombre(false);
            }}
            className={`w-full border rounded p-2 ${
              errorNombre ? "border-red-500" : ""
            }`}
            maxLength={40}
          />
          {errorNombre && (
            <p className="text-red-500 text-xs mt-1">Este campo es requerido</p>
          )}
          <div className="text-right text-xs text-gray-500">
            {nombre.length}/40
          </div>
        </div>

        {/* Descripción */}
        <div>
          <label className="block font-medium mb-1">Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => {
              if (e.target.value.length <= limite)
                setDescripcion(e.target.value);
            }}
            className="w-full border rounded p-2"
            rows={4}
          />
          <div className="text-right text-xs text-gray-500">
            {caracteres}/{limite}
          </div>
        </div>

        {/* Estilos */}
        <div>
          <label className="block font-medium mb-2">Estilos</label>
          <div className="flex gap-4">
            {estilos.map((opt) => (
              <button
                key={opt}
                onClick={() => setEstilo(opt)}
                className={`border rounded p-3 text-center flex-1 ${
                  estilo === opt
                    ? "border-purple-600 text-purple-600 font-semibold"
                    : "hover:border-gray-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Columnas */}
        {estilo !== "Banner" && (
          <div>
            <label className="block font-medium mb-2">Columnas</label>
            <div className="flex gap-4">
              {columnas.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setColumna(opt)}
                  className={`border rounded p-3 text-center flex-1 ${
                    columna === opt
                      ? "border-purple-600 text-purple-600 font-semibold"
                      : "hover:border-gray-300"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navegación */}
        {estilo !== "Banner" && (
          <div>
            <label className="block font-medium mb-2">Navegación</label>
            <div className="flex gap-4">
              {navegaciones.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setNavegacion(opt)}
                  className={`border rounded p-3 text-center flex-1 ${
                    navegacion === opt
                      ? "border-purple-600 text-purple-600 font-semibold"
                      : "hover:border-gray-300"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Acción con click (solo si es banner) */}
        {estilo === "Banner" && (
          <div>
            <label className="block font-medium mb-2">Acción con click</label>
            <div className="flex gap-4">
              {acciones.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setAccionClick(opt)}
                  className={`border rounded p-3 text-center flex-1 ${
                    accionClick === opt
                      ? "border-purple-600 text-purple-600 font-semibold"
                      : "hover:border-gray-300"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {accionClick === "Ir a link" && (
              <div className="mt-2">
                <label className="block font-medium mb-1">Link</label>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full border rounded p-2"
                />
              </div>
            )}
          </div>
        )}

        <button
          className="w-full mt-4 bg-indigo-700 text-white py-2 rounded hover:bg-indigo-800"
          onClick={handleSubmit}
        >
          Guardar
        </button>
      </div>
    </Modal>
  );
}

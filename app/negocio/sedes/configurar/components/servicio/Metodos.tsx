// app/negocio/sedes/configurar/components/servicio/Metodos.tsx
'use client';

import React, { useState } from "react";
import { FaCog } from "react-icons/fa";
import Modal from "../../../../../../components/ui/Modal";
import SeleccionPasarela from "./SeleccionPasarela";

export type SedeProps = { sedeId: string };

type Metodo = { id: string; nombre: string; icon: React.ReactNode };
type ModalTipo = "transferencia" | "online" | "seleccion-pasarela" | null;

const metodos: Metodo[] = [
  {
    id: "efectivo",
    nombre: "Efectivo",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21 7H3a1 1 0 00-1 1v8a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1zm-1 8H4V9h16v6z" />
        <circle cx={12} cy={12} r={2} />
      </svg>
    ),
  },
  {
    id: "datafono",
    nombre: "Datáfono",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6 2h9a3 3 0 013 3v14a3 3 0 01-3 3H6a3 3 0 01-3-3V5a3 3 0 013-3zm0 2a1 1 0 00-1 1v2h11V5a1 1 0 00-1-1H6zm0 6v10h9a1 1 0 001-1v-9H6zm2 2h2v2H8v-2zm0 4h2v2H8v-2z" />
      </svg>
    ),
  },
  {
    id: "transferencia",
    nombre: "Transferencia",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 5a1 1 0 011-1h10l4 4v9a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm11 1v3h3l-3-3z" />
      </svg>
    ),
  },
  {
    id: "online",
    nombre: "Pago en línea",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16v2H4V4zm0 4h16v12H4V8zm2 4h12v2H6v-2z" />
      </svg>
    ),
  },
];

const Toggle = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={checked}
      onChange={onChange}
    />
    <div className="w-9 h-5 bg-gray-300 rounded-full peer transition-colors peer-checked:bg-blue-600" />
    <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4" />
  </label>
);

const Metodos: React.FC<SedeProps> = ({ sedeId: _sedeId }) => {
  const [activos, setActivos] = useState<Record<string, boolean>>({
    efectivo: false,
    datafono: false,
    transferencia: false,
    online: false,
  });

  const [modalTipo, setModalTipo] = useState<ModalTipo>(null);
  const [modoFormulario, setModoFormulario] = useState(false);

  const toggle = (id: string) =>
    setActivos((prev) => ({ ...prev, [id]: !prev[id] }));

  const abrirModal = (tipo: ModalTipo) => {
    setModalTipo(tipo);
    setModoFormulario(false);
  };

  const cerrarModal = () => setModalTipo(null);

  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 mb-6 text-black">
        <h2 className="text-xl font-semibold">Métodos de pago</h2>
        <p className="text-sm text-gray-500 mb-4">
          ¿Cómo quieres que tus clientes te paguen?
        </p>

        <ul className="space-y-4">
          {metodos.map(({ id, nombre, icon }) => (
            <li key={id} className="flex items-center gap-4">
              <span className="text-blue-900">{icon}</span>
              <span className="flex-1 font-medium">{nombre}</span>
              <Toggle checked={activos[id]} onChange={() => toggle(id)} />
              <button
                type="button"
                aria-label={`Configurar ${nombre}`}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => {
                  if (id === "transferencia") abrirModal("transferencia");
                  else if (id === "online") abrirModal("online");
                }}
              >
                <FaCog className="w-5 h-5 text-gray-600" />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal dinámico */}
      {modalTipo === "transferencia" && (
        <Modal onClose={cerrarModal}>
          {!modoFormulario ? (
            <div className="text-center p-6">
              <h2 className="text-lg font-semibold mb-4">
                Tus cuentas bancarias para <strong>transferencia</strong>
              </h2>
              <button
                onClick={() => setModoFormulario(true)}
                className="text-sm text-blue-600 hover:underline"
              >
                + Agregar otra cuenta bancaria
              </button>
            </div>
          ) : (
            <div className="p-6 space-y-4">
              <h2 className="text-lg font-semibold text-center">
                Transferencia personalizada
              </h2>
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Nombre de la cuenta (Privado)"
              />
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Banco y tipo de cuenta"
              />
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="# de la cuenta"
              />
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Datos del titular, etc..."
              />
              <button className="w-full py-2 rounded-md bg-indigo-400 text-white mt-4 hover:bg-indigo-500 transition">
                Guardar
              </button>
            </div>
          )}
        </Modal>
      )}

      {modalTipo === "online" && (
        <Modal onClose={cerrarModal}>
          <div className="p-6 text-center space-y-4">
            <h2 className="text-lg font-semibold mb-2">
              Configuración de pago en línea
            </h2>
            <p className="text-sm text-gray-600">
              Conecta tu pasarela de pagos para aceptar transacciones online.
            </p>
            <button className="mt-4 px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600">
              Configurar pasarela
            </button>
          </div>
        </Modal>
      )}
      {modalTipo === "seleccion-pasarela" && (
        <Modal onClose={cerrarModal}>
          <SeleccionPasarela onClose={cerrarModal} />
        </Modal>
      )}
    </>
  );
};

export default Metodos;

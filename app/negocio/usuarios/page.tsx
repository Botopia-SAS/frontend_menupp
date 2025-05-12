"use client";

import { useState } from "react";
import { FaUserPlus, FaSyncAlt } from "react-icons/fa";
import Modal from "@/components/ui/Modal"; // Ajusta si la ruta es diferente

export default function UsuariosPage() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [email, setEmail] = useState("");

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => {
    setEmail("");
    setMostrarModal(false);
  };

  const crearUsuario = () => {
    if (!email) return alert("El correo es obligatorio");

    // Aquí va tu lógica real para guardar el usuario
    console.log("Creando usuario:", email);
    cerrarModal();
  };

  return (
    <div className="mt-20 px-4">
      <div className="bg-white rounded-lg shadow p-10 w-full max-w-4xl">
        <div className="flex gap-4">
          <h2 className="text-lg font-semibold flex items-center gap-2 mr-140">
            👥 Usuarios
          </h2>
          <button
            onClick={abrirModal}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Agregar usuario"
          >
            <FaUserPlus />
          </button>
          <button
            onClick={() => location.reload()}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Recargar"
          >
            <FaSyncAlt />
          </button>
        </div>
      </div>

      {mostrarModal && (
        <Modal onClose={cerrarModal}>
          <div>
            <h3 className="text-lg font-semibold">Agregar Usuario</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              className="mt-2 p-2 border rounded w-full"
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={cerrarModal}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={crearUsuario}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Guardar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

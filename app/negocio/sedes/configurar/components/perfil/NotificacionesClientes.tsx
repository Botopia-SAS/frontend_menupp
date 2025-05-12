// File: app/configurar/components/perfil/NotificacionesClientes.tsx
"use client";

import React from "react";
import type { SedeProps } from "./DatosBasicos"; // alias común

const NotificacionesClientes: React.FC<SedeProps> = ({ sedeId }) => {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2 text-black">
        Notificaciones clientes
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Elige el medio por donde quieres que tus clientes reciban las
        notificaciones de sus pedidos, reservas y más
      </p>

      {/* Opciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* WhatsApp Genérico */}
        <div className="bg-gray-100 rounded-lg p-4 flex items-start gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.84 8.84 0 01-4.08-.98L2 17l1.34-3.12A7.96 7.96 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">WhatsApp genérico</h3>
            <p className="text-xs text-gray-500">
              Cuenta de Menupp genérica donde el cliente no podrá escribir
            </p>
          </div>
        </div>

        {/* WhatsApp Propio */}
        <div className="bg-gray-100 rounded-lg p-4 flex items-start gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.84 8.84 0 01-4.08-.98L2 17l1.34-3.12A7.96 7.96 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">WhatsApp propio</h3>
            <p className="text-xs text-gray-500">
              Usa tu propio número para tener toda la conversación en un solo
              lugar
            </p>
          </div>
        </div>
      </div>

      {/* Selector de número */}
      <div className="mt-4">
        <label
          htmlFor={`whatsapp-notificaciones-${sedeId}`}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Desde qué número de WhatsApp quieres enviar los mensajes
        </label>

        <div className="relative">
          <select
            id={`whatsapp-notificaciones-${sedeId}`}
            name={`whatsapp-notificaciones-${sedeId}`}
            className="w-full p-2 border border-gray-300 rounded-md appearance-none pr-10"
            defaultValue="573003333338"
          >
            <option value="573003333338">573003333338</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificacionesClientes;

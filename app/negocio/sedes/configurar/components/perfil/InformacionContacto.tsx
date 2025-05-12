// File: app/configurar/components/perfil/InformacionContacto.tsx
"use client";

import React from "react";
import type { SedeProps } from "./DatosBasicos"; // alias común

const InformacionContacto: React.FC<SedeProps> = ({ sedeId }) => {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-black">
        Información de contacto y notificaciones
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Agrega el teléfono y correo preferido para recibir notificaciones y
        poder ser contactado por tus clientes
      </p>

      <div className="space-y-4">
        {/* Teléfono */}
        <div>
          <label
            htmlFor={`telefono-${sedeId}`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Teléfono
          </label>
          <div className="flex text-black">
            {/* País (placeholder, puede ser select más adelante) */}
            <button
              type="button"
              aria-label="Seleccionar país"
              className="w-16 h-10 border border-gray-300 rounded-l-md flex items-center justify-center gap-1"
            >
              <img
                src="/colombia-flag.png"
                alt="Colombia"
                className="h-4 w-auto"
              />
              <span className="text-xs">▼</span>
            </button>

            <input
              type="tel"
              id={`telefono-${sedeId}`}
              name={`telefono-${sedeId}`}
              className="flex-1 p-2 border border-gray-300 rounded-r-md"
              placeholder="+57 300000000"
              defaultValue="+57 300000000"
            />
          </div>
        </div>

        {/* WhatsApp */}
        <div>
          <label
            htmlFor={`whatsapp-${sedeId}`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            WhatsApp
          </label>
          <div className="flex">
            <button
              type="button"
              aria-label="Seleccionar país"
              className="w-16 h-10 border border-gray-300 rounded-l-md flex items-center justify-center gap-1"
            >
              <img
                src="/colombia-flag.png"
                alt="Colombia"
                className="h-4 w-auto"
              />
              <span className="text-xs">▼</span>
            </button>

            <input
              type="tel"
              id={`whatsapp-${sedeId}`}
              name={`whatsapp-${sedeId}`}
              className="flex-1 p-2 border border-gray-300 rounded-r-md"
              placeholder="+57 300000000"
              defaultValue="+57 3003333338"
            />
          </div>
        </div>

        {/* Correo */}
        <div>
          <label
            htmlFor={`correo-${sedeId}`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Correo
          </label>
          <input
            type="email"
            id={`correo-${sedeId}`}
            name={`correo-${sedeId}`}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="correo@ejemplo.com"
          />
        </div>
      </div>
    </section>
  );
};

export default InformacionContacto;

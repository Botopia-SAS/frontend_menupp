// File: app/configurar/components/perfil/Ubicacion.tsx
"use client";

import React from "react";
import type { SedeProps } from "./DatosBasicos"; // alias común

const Ubicacion: React.FC<SedeProps> = ({ sedeId }) => {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Ubicación</h2>

      <div className="space-y-4">
        {/* Dirección */}
        <div>
          <label
            htmlFor={`direccion-${sedeId}`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Dirección
          </label>
          <input
            type="text"
            id={`direccion-${sedeId}`}
            name={`direccion-${sedeId}`}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Dirección completa"
            defaultValue="Cl. 69a #5-59, Bogotá"
          />
        </div>

        {/* Coordenadas Google Maps */}
        <div>
          <label
            htmlFor={`coordenadas-${sedeId}`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ubicación Google Maps&nbsp;(requeridas para pedidos)
          </label>
          <input
            type="text"
            id={`coordenadas-${sedeId}`}
            name={`coordenadas-${sedeId}`}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Latitud, Longitud"
            defaultValue="4.6515539, -74.0558533"
          />
        </div>

        {/* País */}
        <div>
          <label
            htmlFor={`pais-${sedeId}`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            País
          </label>
          <div className="relative">
            <select
              id={`pais-${sedeId}`}
              name={`pais-${sedeId}`}
              className="w-full p-2 border border-gray-300 rounded-md appearance-none pr-10"
              defaultValue="colombia"
            >
              <option value="colombia">Colombia</option>
              <option value="mexico">México</option>
              <option value="espana">España</option>
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
      </div>
    </section>
  );
};

export default Ubicacion;

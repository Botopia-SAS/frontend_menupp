// File: app/configurar/components/perfil/ImagenPunto.tsx
"use client";

import React from "react";
import type { SedeProps } from "./DatosBasicos"; // re-usar alias común

const ImagenPunto: React.FC<SedeProps> = ({ sedeId }) => {
  /* Más adelante: subir / mostrar imagen que corresponda a la sede */

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6 text-black">
      <h2 className="text-xl font-semibold mb-4">Imagen del punto</h2>

      <div>
        {/* Placeholder de la imagen */}
        <div className="w-full h-52 bg-gray-100 rounded-md relative flex items-center justify-center">
          <div className="absolute flex gap-2">
            {/* Ver */}
            <button
              type="button"
              aria-label="Ver imagen"
              className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M2.46 12c1.27-4.06 5.06-7 9.54-7s8.27 2.94 9.54 7c-1.27 4.06-5.06 7-9.54 7s-8.27-2.94-9.54-7z" />
              </svg>
            </button>

            {/* Cambiar */}
            <button
              type="button"
              aria-label="Cambiar imagen"
              className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>
            </button>

            {/* Eliminar */}
            <button
              type="button"
              aria-label="Eliminar imagen"
              className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-.867 12.142a2 2 0 01-1.993 1.858H7.86a2 2 0 01-1.993-1.859L5 6m5 0V4a1 1 0 011-1h3a1 1 0 011 1v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-1">
          Dimensiones recomendadas: 1920 × 1080&nbsp;px
        </p>
      </div>
    </section>
  );
};

export default ImagenPunto;

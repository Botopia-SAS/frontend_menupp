// File: app/configurar/components/servicio/Horarios.tsx
"use client";

import React from "react";

export type SedeProps = { sedeId: string };

/** Días de la semana (ordenados para el map) */
const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
] as const;

type Dia = (typeof diasSemana)[number];

const horariosPredeterminados: Record<
  Dia,
  { inicio: string; fin: string; siguienteDia: boolean }
> = {
  Domingo: { inicio: "12:00", fin: "20:00", siguienteDia: false },
  Lunes: { inicio: "12:00", fin: "22:00", siguienteDia: false },
  Martes: { inicio: "12:00", fin: "22:00", siguienteDia: false },
  Miércoles: { inicio: "12:00", fin: "23:00", siguienteDia: false },
  Jueves: { inicio: "12:00", fin: "00:30", siguienteDia: true },
  Viernes: { inicio: "12:00", fin: "00:30", siguienteDia: true },
  Sábado: { inicio: "12:00", fin: "00:30", siguienteDia: true },
};

const Horarios: React.FC<SedeProps> = ({ sedeId }) => {
  /* Podrías usar sedeId para obtener horarios reales de la API */

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">Horarios</h2>
      <p className="text-sm text-gray-500 mb-4">
        Configura el horario de atención de tu punto de venta para informar a
        los clientes cuándo está abierto. Este horario es exclusivo para la
        atención en el lugar y no aplica para reservas ni pedidos.
      </p>

      <div className="space-y-4">
        {diasSemana.map((dia) => (
          <div key={dia} className="flex items-center gap-2">
            <span className="w-24 text-sm font-medium">{dia}</span>

            {/* Hora inicio */}
            <input
              type="time"
              id={`inicio-${dia}-${sedeId}`}
              name={`inicio-${dia}-${sedeId}`}
              className="w-28 p-2 border border-gray-300 rounded-md"
              defaultValue={horariosPredeterminados[dia].inicio}
            />

            <span className="text-sm">–</span>

            {/* Hora fin */}
            <div className="relative">
              <input
                type="time"
                id={`fin-${dia}-${sedeId}`}
                name={`fin-${dia}-${sedeId}`}
                className="w-28 p-2 border border-gray-300 rounded-md"
                defaultValue={horariosPredeterminados[dia].fin}
              />
              {horariosPredeterminados[dia].siguienteDia && (
                <span className="absolute -bottom-5 right-0 text-xs text-blue-500">
                  Siguiente día
                </span>
              )}
            </div>

            {/* Botón para añadir turno extra, placeholder */}
            <button
              type="button"
              aria-label="Agregar turno"
              className="ml-auto w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Horarios;

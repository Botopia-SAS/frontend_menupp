"use client";

import { DatosBasicos, RedesSociales, Encuestas } from "./components";

export default function MarcaPage() {
  return (
    <div className="pt-6">
      <h1 className="text-2xl font-bold mb-6">Tu marca</h1>

      {/* Contenedor alineado a la izquierda */}
      <div className="w-full max-w-2xl pl-0  space-y-6">
        <DatosBasicos />
        <RedesSociales />
        <Encuestas />

        <button className="w-full bg-[#98a8f8] hover:bg-[#7f8dee] text-white font-semibold py-3 rounded-full shadow-md transition">
          GUARDAR
        </button>
      </div>
    </div>
  );
}

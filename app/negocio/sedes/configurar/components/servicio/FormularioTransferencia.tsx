"use client";

import React from "react";

type Props = {
  onCancelar: () => void;
  onGuardar: () => void;
};

const FormularioTransferencia: React.FC<Props> = ({
  onCancelar,
  onGuardar,
}) => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-semibold text-center">
        Transferencia personalizada
      </h2>

      <div>
        <label className="block text-sm font-medium mb-1">
          Nombre de la cuenta (Privado)
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Ej: Cuenta principal de Bogotá"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Detalles cuenta
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Banco Davivienda - Ahorros"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Número de la cuenta
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="# de la cuenta"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Información adicional (Opcional)
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Datos del titular, instrucciones, etc..."
        />
      </div>

      <div className="flex justify-between gap-4 mt-6">
        <button
          onClick={onCancelar}
          className="w-1/2 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
        >
          Cancelar
        </button>
        <button
          onClick={onGuardar}
          className="w-1/2 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600"
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default FormularioTransferencia;

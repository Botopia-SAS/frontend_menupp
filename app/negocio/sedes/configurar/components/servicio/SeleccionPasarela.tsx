// app/negocio/sedes/configurar/components/servicio/SeleccionPasarela.tsx
'use client';

import React from "react";

type Props = {
  onClose: () => void;
  sedeId: string; // seguimos recibiendo este prop para futuro uso
};

const SeleccionPasarela: React.FC<Props> = ({ onClose, sedeId: _sedeId }) => {
  // Más adelante podrás usar _sedeId para cargar datos específicos de la sede

  return (
    <div className="p-6 text-black max-w-md">
      {/* Título */}
      <div className="flex items-center space-x-3 mb-4">
        <button
          onClick={onClose}
          className="text-xl font-bold text-gray-700 hover:text-gray-900"
          aria-label="Atrás"
        >
          ←
        </button>
        <h2 className="text-lg font-bold">Nuevo método de pago</h2>
      </div>

      {/* Descripción */}
      <p className="text-sm text-gray-600 mb-4">
        Configura cómo quieres recibir pagos, integrándote con pasarelas de pago
        y configurando métodos de pago manuales.
      </p>

      {/* Opción Wompi */}
      <div className="bg-white border rounded-xl p-4 mb-3 shadow-sm flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Wompi</h3>
          <p className="text-sm text-gray-500">
            Automatiza tus pagos y conciliación por PSE, Tarjetas, Botón
            Bancolombia, Nequi, Daviplata y más
          </p>
        </div>
        <button className="text-blue-600 font-semibold">Agregar</button>
      </div>

      {/* Opción MercadoPago */}
      <div className="bg-white border rounded-xl p-4 shadow-sm flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Mercadopago</h3>
          <p className="text-sm text-gray-500">
            Automatiza tus pagos y conciliación por PSE, Tarjetas y más
          </p>
        </div>
        <button className="text-blue-600 font-semibold">Agregar</button>
      </div>
    </div>
  );
};

export default SeleccionPasarela;

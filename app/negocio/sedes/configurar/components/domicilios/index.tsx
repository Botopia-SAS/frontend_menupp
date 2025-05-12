"use client";

import React from "react";
import Metodos from "./Metodos";

export type SedeProps = { sedeId: string };

const DomiciliosIndex: React.FC<SedeProps> = ({ sedeId }) => {
  return (
    <div className="space-y-8 px-4 py-6">
      {/* Métodos de pago */}

      {/* Zonas de cobertura */}

      {/* Página de domicilios (pendiente si decides hacerlo) */}
      {/* <PaginaDomicilios sedeId={sedeId} /> */}
    </div>
  );
};

export default DomiciliosIndex;

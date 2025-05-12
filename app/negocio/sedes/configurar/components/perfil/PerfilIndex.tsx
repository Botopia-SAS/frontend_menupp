// File: app/negocio/sedes/configurar/components/perfil/PerfilIndex.tsx
"use client";

import React from "react";
import DatosBasicos from "./DatosBasicos";
import ImagenPunto from "./ImagenPunto";
import InformacionContacto from "./InformacionContacto";
import NotificacionesClientes from "./NotificacionesClientes";
import Ubicacion from "./Ubicacion";

export type SedeProps = { sedeId: string };

const PerfilIndex: React.FC<SedeProps> = ({ sedeId }) => (
  <div className="space-y-8 px-4 py-6">
    <DatosBasicos sedeId={sedeId} />
    <ImagenPunto sedeId={sedeId} />
    <Ubicacion sedeId={sedeId} />
    <InformacionContacto sedeId={sedeId} />
    <NotificacionesClientes sedeId={sedeId} />
  </div>
);

export default PerfilIndex;

"use client";

import { useState } from "react";
import SideMenu from "./components/SideMenu";

/** ──────────────────────────────────────────────────────────
 *  Importaciones de la sección PERFIL (ya implementadas)
 *  ────────────────────────────────────────────────────────── */
import {
  DatosBasicos,
  ImagenPunto,
  InformacionContacto,
  NotificacionesClientes,
  Ubicacion,
} from "./components/perfil";

/** ──────────────────────────────────────────────────────────
 *  Las demás secciones aún no están listas.
 *  Déjalas comentadas para evitar errores de compilación.
 *  Quita el comentario cuando crees los componentes.
 *  ────────────────────────────────────────────────────────── */
import { Metodos } from "./components/servicio";
// import { ConfiguracionEntrega, ZonasCobertura } from "./components/domicilios";
// import { ConfiguracionRecoger } from "./components/recoger";

export default function ConfigurarSedePage() {
  const [activeSection, setActiveSection] = useState<string>("perfil");
  const [sede, setSede] = useState<string>("bogota");

  /* ── Handlers ─────────────────────────────────────────────── */
  const handleSectionChange = (sectionId: string) =>
    setActiveSection(sectionId);
  const handleSedeChange = (sedeId: string) => setSede(sedeId);

  /* ── Render dinámico por sección ──────────────────────────── */
  const renderContent = () => {
    switch (activeSection) {
      case "perfil":
        return (
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Perfil del punto
            </h2>
            <DatosBasicos sedeId={sede} />
            <ImagenPunto  />
            <InformacionContacto sedeId={sede} />
            <NotificacionesClientes sedeId={sede} />
            <Ubicacion sedeId={sede} />
          </div>
        );

      case "servicio":
        return (
          <div className="space-y-8">
            <Metodos  />
          </div>
        );

      default:
        return <div className="text-black">Selecciona una sección</div>;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 mt-20">
      {/* Panel lateral de navegación */}
      <div className="w-full lg:w-1/3">
        <SideMenu
          sedeId={sede}
          onSedeChange={handleSedeChange}
          onSectionChange={handleSectionChange}
        />
      </div>

      {/* Contenido principal */}
      <div className="w-full lg:w-2/3">{renderContent()}</div>
    </div>
  );
}

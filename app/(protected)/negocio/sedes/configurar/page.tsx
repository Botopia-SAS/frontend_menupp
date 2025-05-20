"use client";

import { useState } from "react";
import SideMenu from "./components/SideMenu";

/** ──────────────────────────────────────────────────────────
 *  Sección PERFIL (ya implementadas)
 *  ────────────────────────────────────────────────────────── */
import {
  DatosBasicos,
  ImagenPunto,
  InformacionContacto,
  NotificacionesClientes,
  Ubicacion,
} from "./components/perfil";

/** ──────────────────────────────────────────────────────────
 *  Secciones activas
 *  ────────────────────────────────────────────────────────── */
import { Metodos as MetodosServicio } from "./components/servicio";
import PaginaDomicilios from "./components/domicilios/Pagina"; // o la ruta correcta

export default function ConfigurarSedePage() {
  const [activeSection, setActiveSection] = useState<string>("perfil");
  const [sede, setSede] = useState<string>("bogota");

  const handleSectionChange = (sectionId: string) =>
    setActiveSection(sectionId);
  const handleSedeChange = (sedeId: string) => setSede(sedeId);

  const renderContent = () => {
    switch (activeSection) {
      case "perfil":
        return (
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Perfil del punto
            </h2>
            <DatosBasicos sedeId={sede} />
            <ImagenPunto />
            <InformacionContacto sedeId={sede} />
            <NotificacionesClientes sedeId={sede} />
            <Ubicacion sedeId={sede} />
          </div>
        );

      case "servicio":
        return (
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Servicio a la mesa
            </h2>
            <MetodosServicio />
          </div>
        );

      case "domicilios":
        return (
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Domicilios
            </h2>
            <MetodosServicio />
            <PaginaDomicilios sedeId={sede} />
          </div>
        );
      case "recoger":
        return (
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Pedidos para recoger
            </h2>
            <MetodosServicio />
            <PaginaDomicilios sedeId={sede} />
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

"use client";

import { useState, useEffect } from "react";
import { Store, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define los tipos para las secciones del menú
type MenuSection = {
  id: string;
  title: string;
  description: string;
  route: string;
};

// Props para el componente SideMenu
interface SideMenuProps {
  sedeId?: string;
  onSedeChange?: (sede: string) => void;
  onSectionChange?: (section: string) => void;
}

const SideMenu = ({
  sedeId = "bogota",
  onSedeChange,
  onSectionChange,
}: SideMenuProps) => {
  const pathname = usePathname();
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [sede, setSede] = useState<string>(sedeId);

  // Define las secciones del menú
  const menuSections: MenuSection[] = [
    {
      id: "perfil",
      title: "Perfil del punto",
      description: "Configura nombre, teléfonos, dirección y más",
      route: "/negocio/sedes/configurar/",
    },
    {
      id: "servicio",
      title: "Servicio a la mesa",
      description: "Configura horarios, teléfonos y más",
      route: "/negocio/sedes/configurar/",
    },
    {
      id: "domicilios",
      title: "Domicilios",
      description: "Configura nombre, horarios, teléfonos, dirección y más",
      route: "/negocio/sedes/configurar/",
    },
    {
      id: "recoger",
      title: "Pedidos para recoger",
      description: "Configura nombre, horarios, teléfonos, dirección y más",
      route: "/negocio/sedes/configurar/",
    },
  ];

  // Determina la sección activa basado en la ruta actual
  useEffect(() => {
    const currentSection = menuSections.find((section) =>
      pathname.includes(section.id)
    );

    if (currentSection) {
      setActiveSectionId(currentSection.id);
    } else {
      // Si no hay coincidencia, establecer la primera sección como activa
      setActiveSectionId(menuSections[0].id);
    }
  }, [pathname, menuSections]);

  // Maneja el cambio de sede
  const handleSedeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSede = e.target.value;
    setSede(newSede);
    if (onSedeChange) {
      onSedeChange(newSede);
    }
  };

  // Maneja el clic en una sección
  const handleSectionClick = (sectionId: string) => {
    setActiveSectionId(sectionId);
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
  };

  return (
    <div className="max-w-2xl bg-white  rounded-lg shadow-sm p-6">
      {/* Encabezado con título y selector de sede */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Store className="h-5 w-5 mr-2 text-gray-700 " />
          <h2 className="text-base font-semibold text-gray-900 ">
            Configuraciones de la sede
          </h2>
        </div>
        <div className="relative">
          <select
            value={sede}
            onChange={handleSedeChange}
            className="appearance-none pl-3 pr-10 py-1.5 rounded-lg border border-gray-300  bg-white  text-gray-700  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="bogota">Bogotá</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500  pointer-events-none" />
        </div>
      </div>

      {/* Secciones del menú */}
      <div className="space-y-4">
        {menuSections.map((section) => {
          const isActive = section.id === activeSectionId;
          return (
            <Link
              href={section.route}
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`block cursor-pointer transition-colors duration-100 ${
                isActive
                  ? "bg-[#eef0ff] border-[#98a8f8]"
                  : "hover:bg-gray-50 border-transparent"
              } border rounded-lg p-4`}
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-900 ">
                    {section.title}
                  </h3>
                  <p className="text-gray-500  text-xs mt-1">
                    {section.description}
                  </p>
                </div>
                {isActive && (
                  <button
                    className="bg-[#98a8f8] hover:bg-[#7b8df7] text-white text-xs px-6 py-2 rounded-full uppercase font-medium transition-colors"
                    onClick={(e) => {
                      e.preventDefault(); // Evita la navegación
                      // Lógica para guardar
                    }}
                  >
                    Guardar
                  </button>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;

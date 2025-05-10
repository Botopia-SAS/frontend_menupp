"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ReservasView() {
  const pathname = usePathname();
  const [vistaOpen, setVistaOpen] = useState(false);
  const [ajustesOpen, setAjustesOpen] = useState(false);

  const tabs = [
    { label: "Servicios adicionales", href: "/reservas/servicios" },
    { label: "Espacios", href: "/reservas/espacios" },
    { label: "Horarios", href: "/reservas/horarios" },
  ];

  return (
    <div className="relative flex items-center gap-5 mt-1">
      {/* Dropdown: Vista */}
      <div className="relative">
        <button
          onClick={() => {
            setVistaOpen(!vistaOpen);
            setAjustesOpen(false);
          }}
          className="text-sm pb-1 border-b-2 border-black font-semibold text-black flex items-center gap-1"
        >
          Vista <ChevronDown size={14} />
        </button>

        {vistaOpen && (
          <div className="absolute mt-2 bg-white border rounded-md shadow-md w-32 z-50">
            <Link href="/reservas">
              <div className="px-4 py-2 hover:bg-gray-100 text-sm">Lista</div>
            </Link>
            <Link href="/reservas/mapa">
              <div className="px-4 py-2 hover:bg-gray-100 text-sm">Mapa</div>
            </Link>
          </div>
        )}
      </div>

      {/* Tabs normales */}
      {tabs.map((tab) => (
        <Link key={tab.href} href={tab.href}>
          <span
            className={cn(
              "text-sm pb-1 border-b-2 transition-all",
              pathname === tab.href
                ? "border-black text-black font-semibold"
                : "border-transparent text-gray-400 hover:text-black"
            )}
          >
            {tab.label}
          </span>
        </Link>
      ))}

      {/* Dropdown: Ajustes */}
      <div className="relative">
        <button
          onClick={() => {
            setAjustesOpen(!ajustesOpen);
            setVistaOpen(false);
          }}
          className="text-sm pb-1 border-b-2 border-transparent text-gray-400 hover:text-black flex items-center gap-1"
        >
          Ajustes <ChevronDown size={14} />
        </button>

        {ajustesOpen && (
          <div className="absolute mt-2 bg-white border rounded-md shadow-md w-32 z-50">
            <Link href="/reservas/ajustes/bogota">
              <div className="px-4 py-2 hover:bg-gray-100 text-sm">Bogotá</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

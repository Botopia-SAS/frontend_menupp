"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MenusCategoriasView() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<
    "traducciones" | "configuracion" | null
  >(null);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex gap-5 mt-1 relative">
      <Link href="/categorias">
        <span
          className={cn(
            "text-sm pb-1 border-b-2 transition-all",
            isActive("/categorias")
              ? "border-white text-white font-semibold"
              : "border-transparent text-gray-400 hover:text-white"
          )}
        >
          Productos
        </span>
      </Link>
      <Link href="/categorias/adiciones">
        <span
          className={cn(
            "text-sm pb-1 border-b-2 transition-all",
            isActive("/categorias/adiciones")
              ? "border-white text-white font-semibold"
              : "border-transparent text-gray-400 hover:text-white"
          )}
        >
          Adiciones y acompañantes
        </span>
      </Link>

      {/* Dropdown: Traducciones */}
      <div className="relative">
        <button
          onClick={() =>
            setOpenDropdown(
              openDropdown === "traducciones" ? null : "traducciones"
            )
          }
          className="text-sm pb-1 border-b-2 border-transparent text-gray-400 flex items-center gap-1 hover:text-white"
        >
          Traducciones <ChevronDown size={14} />
        </button>

        {openDropdown === "traducciones" && (
          <div className="absolute mt-2 bg-white border rounded-md shadow-md w-48 z-50 text-black">
            {["es", "en", "pt", "fr"].map((lang) => (
              <Link key={lang} href={`/categorias/translate/${lang}`}>
                <div className="px-4 py-2 hover:bg-gray-100 text-sm capitalize rounded-md">
                  {lang === "es" && "Español"}
                  {lang === "en" && "Inglés"}
                  {lang === "pt" && "Portugués"}
                  {lang === "fr" && "Francés"}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Dropdown: Configuraciones */}
      <div className="relative">
        <button
          onClick={() =>
            setOpenDropdown(
              openDropdown === "configuracion" ? null : "configuracion"
            )
          }
          className="text-sm pb-1 border-b-2 border-transparent text-gray-400 flex items-center gap-1 hover:text-white"
        >
          Configuraciones <ChevronDown size={14} />
        </button>

        {openDropdown === "configuracion" && (
          <div className="absolute mt-2 bg-white border rounded-md shadow-md w-48 z-50 text-black">
            <Link href="/categorias/ajustes">
              <div className="px-4 py-2 hover:bg-gray-100 text-sm rounded-md">
                Ajustes
              </div>
            </Link>
            <Link href="/menus/design">
              <div className="px-4 py-2 hover:bg-gray-100 text-sm rounded-md">
                Diseño
              </div>
            </Link>
            <Link href="/categorias/mesero">
              <div className="px-4 py-2 hover:bg-gray-100 text-sm rounded-md">
                Llamado mesero
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

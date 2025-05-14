"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";

const tabs = [
  { label: "Menús", href: "/menus" },
  { label: "Homepage", href: "/menus/homepage" },
];

export default function MenusView() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<"homepages" | "menus" | null>(null);
  const [subsubmenu, setSubsubmenu] = useState<"bogota" | null>(null);

  return (
    <div className="relative flex items-center gap-5 mt-1">
      {/* Tabs normales */}
      {tabs.map((tab) => (
        <Link key={tab.href} href={tab.href}>
          <span
            className={cn(
              "text-sm pb-1 border-b-2 transition-all",
              pathname === tab.href
                ? "border-white text-white font-semibold"
                : "border-transparent text-gray-400 hover:text-white"
            )}
          >
            {tab.label}
          </span>
        </Link>
      ))}

      {/* Dropdown principal */}
      <div className="relative">
        <button
          onClick={() => {
            setOpen(!open);
            setSubmenu(null);
            setSubsubmenu(null);
          }}
          className="text-sm pb-1 border-b-2 border-transparent text-gray-400 flex items-center gap-1"
        >
          Diseño <ChevronDown size={14} />
        </button>

        {/* Nivel 1 */}
        {open && (
          <div className="absolute mt-2 bg-white border rounded-md shadow-md w-48 z-50 text-bllack">
            <button
              onClick={() => {
                setSubmenu("homepages");
                setSubsubmenu(null);
              }}
              className="w-full px-4 py-2 hover:bg-gray-100 flex justify-between items-center text-sm text-black rounded-md"
            >
              Homepages <ChevronRight size={14} />
            </button>
            <button
              onClick={() => {
                setSubmenu("menus");
                setSubsubmenu(null);
              }}
              className="w-full px-4 py-2 hover:bg-gray-100 flex justify-between items-center text-sm text-black rounded-md"
            >
              Menús <ChevronRight size={14} />
            </button>
          </div>
        )}

        {/* Nivel 2 */}
        {submenu === "homepages" && (
          <div className="absolute left-48 top-0 mt-2 bg-white border rounded-md shadow-md w-56 z-50 text black">
            <Link href="/menus/design/homepages/marca">
              <div className="px-4 py-2 hover:bg-gray-100 text-sm text-black rounded-md">
                (Marca)
              </div>
            </Link>
            <Link href="/menus/design/homepages/marca">
              <div className="px-4 py-2 hover:bg-gray-100 text-sm text-black rounded-md">
                Bogotá
              </div>
            </Link>
          </div>
        )}

        {submenu === "menus" && (
          <div className="absolute left-48 top-0 mt-2 bg-white border rounded-md shadow-md w-56 z-50">
            <button
              onClick={() => setSubsubmenu("bogota")}
              className="w-full px-4 py-2 hover:bg-gray-100 flex justify-between items-center text-sm text-black rounded-md"
            >
              Bogotá <ChevronRight size={14} />
            </button>
          </div>
        )}

        {/* Nivel 3 SOLO para "menús → bogotá" */}
        {submenu === "menus" && subsubmenu === "bogota" && (
          <div className="absolute left-[384px] top-0 mt-2 bg-white border rounded-md shadow-md w-56 z-50">
            <Link href="/menus/design/menus/menu">
              <div className="px-4 py-2 hover:bg-gray-100 text-sm text-black">
                Menú
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

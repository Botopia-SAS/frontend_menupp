"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MarketingView() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const tabs = [
    { label: "Campañas", href: "/marketing/campanas" },
    { label: "Cupones", href: "/marketing/cupones" },
  ];

  return (
    <div className="relative flex items-center gap-5 mt-1">
      {/* Dropdown: Anuncios */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "text-sm pb-1 border-b-2 flex items-center gap-1 transition-all",
            pathname.startsWith("/marketing/anuncios")
              ? "border-black text-black font-semibold"
              : "border-transparent text-gray-400 hover:text-black"
          )}
        >
          Anuncios <ChevronDown size={14} />
        </button>

        {open && (
          <div className="absolute mt-2 bg-white border rounded-md shadow-md w-40 z-50">
            <Link href="/marketing/anuncios/activos">
              <div className="px-4 py-2 hover:bg-gray-100 text-sm">Activos</div>
            </Link>
            <Link href="/marketing/anuncios/biblioteca">
              <div className="px-4 py-2 hover:bg-gray-100 text-sm">
                Biblioteca
              </div>
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
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Menús", href: "/analitica/menus" },
  { label: "Homepage", href: "/analitica/homepage" },
  { label: "Pedidos", href: "/analitica/pedidos" },
  { label: "Reservas", href: "/analitica/reservas" },
  { label: "Clientes", href: "/analitica/clientes" },
  { label: "Anuncios", href: "/analitica/anuncios" },
];

export default function AnaliticaView() {
  const pathname = usePathname();

  return (
    <div className="flex gap-5 mt-1">
      {tabs.map((tab) => (
        <Link href={tab.href} key={tab.href}>
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

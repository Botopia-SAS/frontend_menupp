"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Marca", href: "/negocio" },
  { label: "Sedes", href: "/negocio/sedes" },
  { label: "Usuarios", href: "/negocio/usuarios" },
  { label: "Integraciones", href: "/negocio/integraciones" },
];

export default function NegocioView() {
  const pathname = usePathname();

  return (
    <div className="flex gap-5 mt-1">
      {tabs.map((tab) => (
        <Link href={tab.href} key={tab.href}>
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
    </div>
  );
}

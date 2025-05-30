"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Contactos", href: "/clientes/contactos" },
  { label: "Encuestas", href: "/clientes/encuestas" },
];

export default function ClientesView() {
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

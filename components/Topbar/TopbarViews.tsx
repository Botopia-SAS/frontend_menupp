"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// --- Negocio
export function NegocioView() {
  const pathname = usePathname();
  const tabs = [
    { label: "Marca", href: "/negocio/marca" },
    { label: "Sedes", href: "/negocio/sedes" },
    { label: "Usuarios", href: "/negocio/usuarios" },
    { label: "Integraciones", href: "/negocio/integraciones" },
  ];
  return <TabNav tabs={tabs} pathname={pathname} />;
}

// --- Menús
export function MenusView() {
  const pathname = usePathname();
  const tabs = [
    { label: "Menús", href: "/menus/menu" },
    { label: "Homepage", href: "/menus/homepage" },
    { label: "Diseño", href: "/menus/design" }, // puedes hacer esto dropdown más adelante
  ];
  return <TabNav tabs={tabs} pathname={pathname} />;
}

// --- Pedidos
export function PedidosView() {
  const pathname = usePathname();
  const tabs = [
    { label: "Tablero", href: "/pedidos" },
    { label: "Lista", href: "/pedidos/lista" },
  ];
  return <TabNav tabs={tabs} pathname={pathname} />;
}

// --- Componente común de pestañas
function TabNav({
  tabs,
  pathname,
}: {
  tabs: { label: string; href: string }[];
  pathname: string;
}) {
  return (
    <nav className="flex gap-5 mt-1 ">
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
    </nav>
  );
}

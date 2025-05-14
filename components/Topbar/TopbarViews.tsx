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
// TopbarViews.tsx (reemplaza solo TabNav)

// TopbarViews.tsx (reemplaza solo TabNav)

function TabNav({
  tabs,
  pathname,
}: {
  tabs: { label: string; href: string }[];
  pathname: string;
}) {
  return (
    <nav className="relative mt-1 overflow-x-auto scrollbar-hide max-w-full">
      <div className="flex gap-5 pr-4 pl-1">
        {tabs.map((tab) => (
          <Link href={tab.href} key={tab.href}>
            <span
              className={cn(
                "whitespace-nowrap text-sm pb-1 border-b-2 transition-all",
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

      {/* Mascara de sombreado lateral para indicar scroll */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#070068] to-transparent" />
    </nav>
  );
}

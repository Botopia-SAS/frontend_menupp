'use client';

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/lib/SidebarContext";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isHovered } = useSidebar();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Espera a montar para evitar mismatches SSR/CSR
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  // Rutas en las que no queremos ni sidebar ni topbar
  const hideNavPaths = ["/", "/login", "/register"];
  if (hideNavPaths.includes(pathname)) {
    return <>{children}</>;
  }

  // En el resto mostramos la navegación
  const sidebarWidth = isHovered ? "ml-64" : "ml-16";

  return (
    <div className="flex">
      <Sidebar />

      <div
        className={`min-h-screen flex-1 bg-[#f8f2e0] transition-all duration-300 ${sidebarWidth}`}
      >
        <Topbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}

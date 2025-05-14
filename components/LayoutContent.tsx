'use client';

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/lib/SidebarContext";
import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isHovered } = useSidebar();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const hideNavPaths = ["/", "/login", "/register"];
  if (hideNavPaths.includes(pathname)) {
    return <>{children}</>;
  }

  // Aplica ml solo en desktop
  const sidebarWidth = isHovered ? "md:ml-64" : "md:ml-16";

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div
        className={`min-h-screen flex-1 bg-[#f8f2e0] transition-all duration-300 ${sidebarWidth}`}
      >
        <Topbar />

        <main className="pt-24 px-4 sm:px-6 md:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}

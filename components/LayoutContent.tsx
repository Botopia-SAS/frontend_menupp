"use client";

import { useSidebar } from "@/lib/SidebarContext";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, isHovered } = useSidebar();

  // Calculamos el margen izquierdo basado en el estado de hover
  const sidebarWidth = isHovered ? "ml-64" : "ml-16";

  return (
    <div className="flex">
      <Sidebar />
      <div
        className={`min-h-screen flex-1 bg-[#fcfaed] transition-all duration-300 ${sidebarWidth}`}
      >
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

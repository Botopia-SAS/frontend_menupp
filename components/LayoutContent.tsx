"use client";

import { useSidebar } from "@/lib/SidebarContext";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  const isRoot = pathname === "/";
  const sidebarWidth = isHovered ? "ml-64" : "ml-16";

  if (isRoot) return <>{children}</>;
  if (!mounted) return null; // espera a estar en cliente para evitar mismatch

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

// components/Sidebar.tsx
'use client';

import { useSidebar } from "@/lib/SidebarContext";
import { sidebarItems } from "./sidebar.config";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const { isHovered, setIsHovered } = useSidebar();

  return (
    // Oculto en móvil, visible a partir de md
    <aside
      className="hidden md:fixed md:flex md:flex-col md:top-0 md:left-0 md:h-screen md:z-50
                 bg-[#3b0ac2] text-white transition-all duration-300
                 w-16 hover:w-64"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo / título */}
      <div
        className={`flex items-center px-4 py-6 transition-all duration-300 
                    ${isHovered ? "justify-center" : "justify-start"}`}
      >
        <span className="font-bold text-xl">
          {!isHovered ? (
            <span className="transition-opacity duration-300">m</span>
          ) : (
            <span className="transition-all duration-300">menüpp</span>
          )}
        </span>
      </div>

      {/* Items */}
      <nav className="flex flex-col gap-1 mt-4">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.path} {...item} />
        ))}
      </nav>
    </aside>
  );
}

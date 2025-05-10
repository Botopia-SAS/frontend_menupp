"use client";
import { useSidebar } from "@/lib/SidebarContext";
import { sidebarItems } from "./sidebar.config";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const { isHovered, setIsHovered } = useSidebar();

  return (
    <div
      className="fixed top-0 left-0 h-screen z-50 bg-[#030b29] text-white transition-all duration-300 flex flex-col w-16 hover:w-64"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sección del título ajustada */}
      <div
        className={`flex items-center px-4 py-6 transition-all duration-300 ${
          isHovered ? "justify-center" : "justify-start"
        }`}
      >
        <span className="relative font-bold text-xl text-pink-500">
          {!isHovered ? (
            <span className="transition-opacity duration-300">m</span>
          ) : (
            <span className="transition-all duration-300">menüpp</span>
          )}
        </span>
      </div>

      <div className="flex flex-col gap-1 mt-4">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

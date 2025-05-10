"use client";
import { useSidebar } from "@/lib/SidebarContext";
import { sidebarItems } from "./sidebar.config";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="group fixed top-0 left-0 h-screen z-50 bg-[#030b29] text-white transition-all duration-300 flex flex-col w-16 hover:w-64">
      <div className="flex items-center px-4 py-6 transition-all duration-300 justify-start group-hover:justify-center">
        <span className="relative font-bold text-xl text-pink-500">
          <span className="absolute group-hover:opacity-0 transition-opacity duration-300">
            m
          </span>
          <span className="opacity-0 group-hover:opacity-100 inline-block max-w-0 group-hover:max-w-[160px] overflow-hidden whitespace-nowrap transition-all duration-300">
            menüpp
          </span>
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

"use client";

import { usePathname } from "next/navigation";
import { topbarMap } from "./topbar.config";
import { Share2, UserCircle } from "lucide-react";
import { useSidebar } from "@/lib/SidebarContext";

export default function Topbar() {
  const pathname = usePathname();
  const match = topbarMap.find((route) => pathname.startsWith(route.path));
  const ViewComponent = match?.view;
  const { isHovered } = useSidebar();

  const marginLeft = isHovered ? "16rem" : "4rem"; // Sidebar ancho

  return (
    <div
      className="fixed top-0 right-0 transition-all duration-300 z-40 p-4 bg-[#f8f2e0]"
      style={{ left: marginLeft }}
    >
      <header className="bg-[#070068] shadow-md rounded-xl px-6 py-3 flex items-center justify-between w-full max-w-[calc(100vw-6rem)] mx-auto ">
        <div className="flex items-center gap-6 ">
          <h2 className="text-xl font-semibold text-white">
            {match?.title || "Panel"}
          </h2>
          {ViewComponent && <ViewComponent />}
        </div>

        <div className="flex items-center gap-3 ">
          <button className="flex items-center gap-1 border px-3 py-1 rounded-full text-sm text-white hover:shadow transition">
            <Share2 size={16} />
            Compartir
          </button>
          <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center">
            <UserCircle size={22} className="text-indigo-600" />
          </div>
        </div>
      </header>
    </div>
  );
}

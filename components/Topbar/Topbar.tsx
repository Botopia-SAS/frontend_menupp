"use client";

import { usePathname } from "next/navigation";
import { topbarMap } from "./topbar.config";
import { Share2, UserCircle } from "lucide-react";

export default function Topbar() {
  const pathname = usePathname();
  const match = topbarMap.find((route) => pathname.startsWith(route.path));
  const ViewComponent = match?.view;

  return (
    <header className="px-6 py-3 bg-white shadow-sm flex items-start justify-between rounded-b-md z-10 transition-all duration-300">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold">{match?.title || "Panel"}</h2>
        {ViewComponent && <ViewComponent />}
      </div>

      <div className="flex items-center gap-3 pt-1">
        <button className="flex items-center gap-1 border px-3 py-1 rounded-full text-sm text-gray-700 hover:shadow transition">
          <Share2 size={16} />
          Compartir
        </button>
        <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center">
          <UserCircle size={22} className="text-indigo-600" />
        </div>
      </div>
    </header>
  );
}

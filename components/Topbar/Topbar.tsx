"use client";

import { usePathname } from "next/navigation";
import { topbarMap } from "./topbar.config";
import { Share2, UserCircle } from "lucide-react";

export default function Topbar() {
  const pathname = usePathname();
  const match = topbarMap.find((route) => pathname.startsWith(route.path));
  const ViewComponent = match?.view;

  return (
    <div
      className="fixed top-0 right-0 left-0 p-2 transition-all duration-300 bg-[#fcfaed] z-50"
      style={{ marginLeft: "inherit" }}
    >
      <header className="px-6 py-3 bg-white shadow-sm flex items-center justify-between rounded-md">
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-semibold">{match?.title || "Panel"}</h2>
          {ViewComponent && (
            <div className="flex items-center">
              <ViewComponent />
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 border px-3 py-1 rounded-full text-sm text-gray-700 hover:shadow transition">
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

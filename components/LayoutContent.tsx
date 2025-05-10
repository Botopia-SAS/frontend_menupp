"use client";

import { useSidebar } from "@/lib/SidebarContext";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useSidebar();

  return (
    <div className="flex">
      <Sidebar />
      <div
        className={`min-h-screen flex-1 bg-[#fcfaed] transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-16"
        }`}
      >
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

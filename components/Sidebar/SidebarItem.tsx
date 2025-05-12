'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/lib/SidebarContext";
import type { ComponentType, SVGProps } from "react";

interface SidebarItemProps {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  path: string;
  disabled?: boolean;
}

export default function SidebarItem({
  label,
  icon: Icon,
  path,
  disabled = false,
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === path;
  const { isHovered } = useSidebar();

  return (
    <Link href={path}>
      <div
        className={cn(
          "flex items-center px-4 py-3 rounded-md text-white hover:bg-white/10 transition-all duration-300",
          isActive && "bg-white/10",
          disabled && "opacity-40 pointer-events-none"
        )}
      >
        <Icon className="w-5 h-5 min-w-[20px]" />
        <span
          className={cn(
            "ml-3 overflow-hidden whitespace-nowrap transition-all duration-300",
            !isHovered
              ? "max-w-0 opacity-0 scale-95"
              : "max-w-[180px] opacity-100 scale-100"
          )}
        >
          {label}
        </span>
      </div>
    </Link>
  );
}

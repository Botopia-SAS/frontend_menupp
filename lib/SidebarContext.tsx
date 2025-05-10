// /lib/SidebarContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
}>({
  isOpen: true,
  setIsOpen: () => {},
  isHovered: false,
  setIsHovered: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SidebarContext.Provider
      value={{ isOpen, setIsOpen, isHovered, setIsHovered }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}

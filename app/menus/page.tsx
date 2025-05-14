"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LocationsMenu, {
  Location,
  MenuItem,
} from "@/components/Menus/LocationsMenu";
import ShareMenuModal from "@/components/Menus/ShareMenuModal";
import CreateMenuModal from "@/components/Menus/CreateMenuModal";
import MobilePreview from "@/components/Menus/MobilePreview";

const initialData: Location[] = [
  {
    id: "bogota",
    name: "Bogotá",
    items: [{ id: "menu", label: "Menú", enabled: true }],
  },
];

const MenusPage: React.FC = () => {
  const router = useRouter();

  /* ---------- estado central ---------- */
  const [locations, setLocations] = useState<Location[]>(initialData);
  const [shareState, setShareState] = useState<{
    open: boolean;
    locId?: string;
  }>({ open: false });
  const [createState, setCreateState] = useState<{
    open: boolean;
    locId?: string;
  }>({ open: false });

  /* ---------- acciones ---------- */
  const handleItemClick = () => router.push("/categorias");

  const handleItemToggle = (locId: string, itemId: string, value: boolean) =>
    setLocations((prev) =>
      prev.map((loc) =>
        loc.id !== locId
          ? loc
          : {
              ...loc,
              items: loc.items.map((it) =>
                it.id === itemId ? { ...it, enabled: value } : it
              ),
            }
      )
    );

  const handleAddItem = (locId: string, item: MenuItem) =>
    setLocations((prev) =>
      prev.map((loc) =>
        loc.id !== locId ? loc : { ...loc, items: [...loc.items, item] }
      )
    );

  const handleReorder = (locId: string, newItems: MenuItem[]) =>
    setLocations((prev) =>
      prev.map((loc) => (loc.id !== locId ? loc : { ...loc, items: newItems }))
    );

  /* ---------- render ---------- */
  return (
    <>
      <div className="pt-20 flex flex-col lg:flex-row gap-6 p-8 min-h-screen">
        <div className="lg:w-1/2">
          <LocationsMenu
            locations={locations}
            onItemClick={handleItemClick}
            onItemToggle={handleItemToggle}
            onShare={(locId) => setShareState({ open: true, locId })}
            onCreate={(locId) => setCreateState({ open: true, locId })}
            onReorder={handleReorder}
          />
        </div>

        <div className="lg:w-1/2 relative">
          <div className="absolute top-10 right-10">
            {/* mock-up del iPhone */}
            <MobilePreview widthClass="w-80 md:w-96 lg:w-[28rem]" />
          </div>
        </div>
      </div>

      {/*  Modales */}
      {shareState.open && shareState.locId && (
        <ShareMenuModal
          location={locations.find((l) => l.id === shareState.locId)!}
          onClose={() => setShareState({ open: false })}
        />
      )}
      {createState.open && createState.locId && (
        <CreateMenuModal
          onClose={() => setCreateState({ open: false })}
          onCreate={(item) => {
            handleAddItem(createState.locId!, item);
            setCreateState({ open: false });
          }}
        />
      )}
    </>
  );
};

export default MenusPage;

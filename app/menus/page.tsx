'use client';
// pages/MenusPage.tsx
import React, { useState } from 'react';
import LocationsMenu, { Location } from '@/components/Menus/LocationsMenu';
import CategoriesMenu from '@/components/Menus/CategoriesMenu';
import MobilePreview from '@/components/Menus/MobilePreview';

const locationsData: Location[] = [
  {
    id: 'bogota',
    name: 'Bogotá',
    items: [{ id: 'menu', label: 'Menú', enabled: true }],
  },
];

const MenusPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className="pt-20 flex flex-col lg:flex-row gap-6 p-8 bg-[#FCF5E5] min-h-screen">
      {/* Panel izquierdo */}
      <div className="lg:w-1/2">
        <LocationsMenu
          locations={locationsData}
          onItemClick={setSelectedItem}
        />

        {/* Despliega categorías al hacer click */}
        {selectedItem && (
          <div className="mt-6">
            <CategoriesMenu
              locationId="bogota"
              menuId={selectedItem}
            />
          </div>
        )}
      </div>

      {/* Panel derecho: mockup iPhone */}
      <div className="lg:w-1/2 relative">
        <div className="absolute top-10 right-10">
          <MobilePreview widthClass="w-80 md:w-96 lg:w-[28rem]" />
        </div>
      </div>
    </div>
  );
};

export default MenusPage;

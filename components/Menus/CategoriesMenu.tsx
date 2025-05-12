import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';

interface CategoriesMenuProps {
  locationId: string;
  menuId: string;
}

const CategoriesMenu: React.FC<CategoriesMenuProps> = ({ locationId, menuId }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
    {/* Breadcrumb */}
    <div className="flex items-center space-x-2 text-gray-500 text-sm">
      <span>Sede {locationId}</span>
      <span>›</span>
      <span>📖</span>
      <span>{menuId}</span>
    </div>

    {/* Header con botón de editar */}
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-semibold">Categorías</h3>
      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
        <span>Editar</span>
        <Plus className="w-5 h-5" />
      </button>
    </div>

    {/* Aquí iría la lista de categorías similar a LocationsMenu */}
    <Card>
      <CardContent>
        {/* ... */}
        <p className="text-gray-400">Aquí verás las categorías.</p>
      </CardContent>
    </Card>
  </div>
);

export default CategoriesMenu;

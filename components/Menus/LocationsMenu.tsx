import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Cog, GripVertical, Share2, Plus, BookOpen, Home } from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  enabled: boolean;
}

export interface Location {
  id: string;
  name: string;
  items: MenuItem[];
}

interface LocationsMenuProps {
  locations: Location[];
  /** Callback cuando se hace click en un item */
  onItemClick?: (itemId: string) => void;
}

const LocationsMenu: React.FC<LocationsMenuProps> = ({ locations, onItemClick }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
    {/* Header */}
    <div className="flex items-center text-gray-700">
      <Home className="w-5 h-5 mr-2" />
      <span className="text-lg font-medium">Menús por sedes</span>
    </div>

    {/* Cards por sede */}
    <div className="space-y-4">
      {locations.map((loc) => (
        <Card key={loc.id} className="rounded-2xl overflow-hidden border border-gray-200">
          <div className="flex justify-between items-center bg-gray-50 px-6 py-3">
            <span className="text-lg font-semibold">{loc.name}</span>
            <div className="flex items-center space-x-3 text-gray-500">
              <Share2 className="w-5 h-5 hover:text-gray-700 cursor-pointer" />
              <Plus className="w-5 h-5 hover:text-gray-700 cursor-pointer" />
            </div>
          </div>
          <CardContent className="px-6 py-4">
            <div className="space-y-2">
              {loc.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onItemClick?.(item.id)}
                  className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3 text-gray-600">
                    <GripVertical className="w-5 h-5 text-gray-400 cursor-move" />
                    <span>{item.label}</span>
                    <BookOpen className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Cog className="w-5 h-5 text-gray-400 hover:text-gray-700 cursor-pointer" />
                    <Switch defaultChecked={item.enabled} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default LocationsMenu;
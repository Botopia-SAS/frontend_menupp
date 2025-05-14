import React from "react";
import { GripVertical, Share2, Plus, BookOpen, Cog, Home } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

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

type Props = {
  locations: Location[];
  onItemClick?: (locId: string, itemId: string) => void;
  onItemToggle?: (locId: string, itemId: string, value: boolean) => void;
  onShare?: (locId: string) => void;
  onCreate?: (locId: string) => void;
  onReorder?: (locId: string, items: MenuItem[]) => void;
};

const LocationsMenu: React.FC<Props> = ({
  locations,
  onItemClick,
  onItemToggle,
  onShare,
  onCreate,
  onReorder,
}) => {
  /* ---------- drag-&-drop ---------- */
  const handleDragEnd = (loc: Location) => (res: DropResult) => {
    if (!res.destination) return;
    const reordered = Array.from(loc.items);
    const [removed] = reordered.splice(res.source.index, 1);
    reordered.splice(res.destination.index, 0, removed);
    onReorder?.(loc.id, reordered);
  };

  return (
    <div className="space-y-6">
      {/* header */}
      <div className="flex items-center text-black">
        <Home className="w-5 h-5 mr-2" />
        <span className="text-lg font-medium">Menús por sedes</span>
      </div>

      {locations.map((loc) => (
        <Card
          key={loc.id}
          className="rounded-2xl overflow-hidden border border-gray-200"
        >
          {/* top-bar de la sede */}
          <div className="flex justify-between items-center px-6 py-3">
            <span className="text-lg font-semibold">{loc.name}</span>
            <div className="flex items-center space-x-3">
              <Share2
                className="w-5 h-5 cursor-pointer"
                onClick={() => onShare?.(loc.id)}
              />
              <Plus
                className="w-5 h-5 cursor-pointer"
                onClick={() => onCreate?.(loc.id)}
              />
            </div>
          </div>

          {/* lista con dnd */}
          <CardContent className="px-6 pb-6">
            <DragDropContext onDragEnd={handleDragEnd(loc)}>
              <Droppable droppableId={loc.id}>
                {(dropProv) => (
                  <div
                    ref={dropProv.innerRef}
                    {...dropProv.droppableProps}
                    className="space-y-2"
                  >
                    {loc.items.map((item, idx) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={idx}
                      >
                        {(dragProv) => (
                          <div
                            ref={dragProv.innerRef}
                            {...dragProv.draggableProps}
                            onClick={() => onItemClick?.(loc.id, item.id)}
                            className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-50"
                          >
                            <div className="flex items-center space-x-3 text-gray-600">
                              {/* drag-handle */}
                              <span {...dragProv.dragHandleProps}>
                                <GripVertical className="w-5 h-5 text-gray-400" />
                              </span>
                              <span>{item.label}</span>
                              <BookOpen className="w-4 h-4 text-gray-400" />
                            </div>

                            <div className="flex items-center space-x-3">
                              <Cog className="w-5 h-5 text-gray-400 cursor-pointer" />
                              <Switch
                                checked={item.enabled}
                                onCheckedChange={(v) =>
                                  onItemToggle?.(loc.id, item.id, v)
                                }
                              />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {dropProv.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LocationsMenu;

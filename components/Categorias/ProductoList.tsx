"use client";
import { useState } from "react";
import ProductoFormModal from "./ProductoFormModal";
import { GripVertical, Settings } from "lucide-react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Categoria, Producto } from "@/app/(protected)/categorias/types";

type Props = {
  data: Producto[];
  category: Categoria | null;
  selected: string | null;
  onSelect: (name: string) => void;
  onAdd: (prod: Producto) => void;
};

export default function ProductosList({
  data,
  category,
  selected,
  onSelect,
  onAdd,
}: Props) {
  const [open, setOpen] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <div className="w-1/4 bg-white rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Productos</h2>
        <button
          className="text-lg text-gray-500"
          onClick={() => setOpen(true)}
          disabled={!category}
        >
          +
        </button>
      </div>

      {category ? (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={({ active, over }) => {
            if (over && active.id !== over.id) {
              const oldIdx = data.findIndex((p) => p.nombre === active.id);
              const newIdx = data.findIndex((p) => p.nombre === over.id);
              onAdd(arrayMove(data, oldIdx, newIdx) as unknown as Producto);
            }
          }}
        >
          <SortableContext
            items={data.map((p) => p.nombre)}
            strategy={verticalListSortingStrategy}
          >
            <ul className="space-y-1">
              {data.map((prod) => (
                <ProdLi
                  key={prod.nombre}
                  prod={prod}
                  selected={selected}
                  onSelect={onSelect}
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      ) : (
        <p className="text-sm text-gray-500">Selecciona una categoría</p>
      )}

      {open && (
        <ProductoFormModal
          onClose={() => setOpen(false)}
          onSave={(p) => {
            onAdd({ ...p, categoriaId: category!.id, id: crypto.randomUUID() });
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}

function ProdLi({
  prod,
  selected,
  onSelect,
}: {
  prod: Producto;
  selected: string | null;
  onSelect: (name: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: prod.nombre });

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
      className={`p-2 rounded flex justify-between items-center cursor-pointer ${
        selected === prod.nombre
          ? "bg-indigo-100 text-indigo-700 font-semibold"
          : "hover:bg-gray-100"
      }`}
      onClick={() => onSelect(prod.nombre)}
    >
      <div className="flex items-center gap-2">
        <div {...listeners}>
          <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
        </div>
        {prod.nombre}
      </div>
      <Settings className="w-4 h-4" />
    </li>
  );
}

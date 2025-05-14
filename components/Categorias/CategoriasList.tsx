"use client";

import { useState } from "react";
import CategoriaFormModal from "./CategoriaFormModal";
import {
  GripVertical,
  Settings,
  Image,
  List,
  AlertTriangle,
} from "lucide-react";
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

/* ------------------------------------------------------------------ */
/* Ajusta el import al lugar donde declaras la interfaz Categoria      */
import type { Categoria } from "@/app/categorias/types";
/* ------------------------------------------------------------------ */

type Props = {
  /** lista completa que proviene del padre */
  data: Categoria[];
  /** nombre actualmente seleccionado */
  selected: string | null;
  /** callback cuando el usuario hace clic en una fila */
  onSelect: (name: string) => void;
  /** callback al crear una categoría nueva */
  onAdd: (cat: Categoria) => void;
};

export default function CategoriasList({
  data,
  selected,
  onSelect,
  onAdd,
}: Props) {
  const [open, setOpen] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor));

  /* Helpers ---------------------------------------------------------------- */
  const getIcon = (estilo: string) => {
    switch (estilo) {
      case "Con imágenes":
        return <Image className="w-4 h-4 text-gray-400" />;
      case "En lista":
        return <List className="w-4 h-4 text-gray-400" />;
      case "Banner":
        return <AlertTriangle className="w-4 h-4 text-gray-400" />;
      default:
        return null;
    }
  };

  /* ----------------------------------------------------------------------- */
  return (
    <div className="w-1/4 bg-white rounded-xl shadow p-4">
      {/* Cabecera */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Categorías</h2>
        <button
          onClick={() => setOpen(true)}
          className="text-lg font-semibold text-gray-500"
        >
          +
        </button>
      </div>

      {/* Lista drag-and-drop */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={({ active, over }) => {
          if (over && active.id !== over.id) {
            const oldIndex = data.findIndex((c) => c.nombre === active.id);
            const newIndex = data.findIndex((c) => c.nombre === over.id);
            onAdd(arrayMove(data, oldIndex, newIndex) as unknown as Categoria); // ajusta si quieres lógica in-place
          }
        }}
      >
        <SortableContext
          items={data.map((c) => c.nombre)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="space-y-1">
            {data.map((cat) => (
              <Li
                key={cat.nombre}
                cat={cat}
                selected={selected}
                onSelect={onSelect}
                icon={getIcon(cat.estilo)}
              />
            ))}
          </ul>
        </SortableContext>
      </DndContext>

      {/* Modal alta categoría */}
      {open && (
        <CategoriaFormModal
          onClose={() => setOpen(false)}
          onSave={(c) => {
            onAdd(c);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}

/* ------ Fila ordenable ---------------------------------------------------- */
function Li({
  cat,
  selected,
  onSelect,
  icon,
}: {
  cat: Categoria;
  selected: string | null;
  onSelect: (name: string) => void;
  icon: React.ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: cat.nombre });

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
      className={`p-2 rounded flex justify-between items-center cursor-pointer ${
        selected === cat.nombre
          ? "bg-indigo-100 text-indigo-700 font-semibold"
          : "hover:bg-gray-100"
      }`}
      onClick={() => onSelect(cat.nombre)}
    >
      <div className="flex items-center gap-2">
        <div {...listeners}>
          <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
        </div>
        {cat.nombre}
      </div>

      <div className="flex items-center gap-2">
        {icon}
        <Settings className="w-4 h-4" />
      </div>
    </li>
  );
}

"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Plus } from "lucide-react";
import OptionItem, { Option } from "./OptionItem";
import NewOptionModal from "./NewOptionModal";

const initialOptions: Option[] = [
  { id: "menu", label: "Menú", icon: "Menu", enabled: true },
  { id: "book1", label: "Reservas", icon: "Calendar", enabled: true },
  { id: "rappi", label: "Rappi", icon: "Link2", enabled: true },
  { id: "loc", label: "Ubicación", icon: "MapPin", enabled: true },
  { id: "rate", label: "Califícanos", icon: "Star", enabled: true },
  { id: "contact", label: "Contáctanos", icon: "Mail", enabled: true },
];

export default function HomepageBuilder() {
  const [options, setOptions] = useState<Option[]>(initialOptions);
  const [showNew, setShowNew] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = options.findIndex((o) => o.id === active.id);
      const newIndex = options.findIndex((o) => o.id === over.id);
      setOptions(arrayMove(options, oldIndex, newIndex));
    }
  };

  const updateOption = (id: string, data: Partial<Option>) =>
    setOptions((opts) =>
      opts.map((o) => (o.id === id ? { ...o, ...data } : o))
    );

  const removeOption = (id: string) =>
    setOptions((opts) => opts.filter((o) => o.id !== id));

  const addOption = (opt: Option) => setOptions([...options, opt]);

  return (
    <section className="max-w-xl space-y-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Homepage de tu marca</h2>
        <button
          onClick={() => setShowNew(true)}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full  hover:bg-gray-400 text-black"
          aria-label="Agregar botón"
        >
          <Plus size={18} />
        </button>
      </header>

      {/* Lista arrastrable */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={options} strategy={verticalListSortingStrategy}>
          {options.map((opt) => (
            <OptionItem
              key={opt.id}
              option={opt}
              onUpdate={updateOption}
              onDelete={() => removeOption(opt.id)}
            />
          ))}
        </SortableContext>
      </DndContext>

      {/* Modal “+” */}
      {showNew && (
        <NewOptionModal onClose={() => setShowNew(false)} onAdd={addOption} />
      )}
    </section>
  );
}

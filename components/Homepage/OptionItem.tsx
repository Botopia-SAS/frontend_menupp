"use client";
import React, { useState } from "react";
import { Settings as SettingsIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch"; // shadcn/ui
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import OptionDropdown from "./OptionDropdown";
import EditOptionModal from "./EditOptionModal";
import clsx from "clsx";
import {
  GripVertical,
  Mail,
  Home,
  Settings,
  // añade los íconos posibles
} from "lucide-react";

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  GripVertical,
  Mail,
  Home,
  Settings,
};

export type Option = {
  id: string;
  label: string;
  icon: string; // nombre del ícono de lucide-react
  enabled: boolean;
};

type Props = {
  option: Option;
  onUpdate: (id: string, data: Partial<Option>) => void;
  onDelete: () => void;
};

export default function OptionItem({ option, onUpdate, onDelete }: Props) {
  const [showDD, setShowDD] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  // Map icon names to Lucide icon components
  const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
    GripVertical,
    Settings: SettingsIcon,
    // Add more icons here as needed, e.g.:
    // Home: HomeIcon,
    // User: UserIcon,
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: option.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const LucideIcon = iconMap[option.icon] ?? GripVertical;

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className={clsx(
          "flex items-center bg-white rounded-lg shadow px-3 py-2 gap-3",
          !option.enabled && "opacity-40"
        )}
      >
        {/* Drag handle */}
        <button {...listeners} {...attributes} className="cursor-grab">
          <GripVertical size={18} />
        </button>

        {/* Icon */}
        <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
          <LucideIcon size={18} />
        </div>

        {/* Label */}
        <span className="flex-1 font-medium">{option.label}</span>

        {/* Toggle */}
        <Switch
          checked={option.enabled}
          onCheckedChange={(val) => onUpdate(option.id, { enabled: val })}
        />

        {/* Engrane */}
        <div className="relative">
          <button
            onClick={() => setShowDD((p) => !p)}
            aria-label="Configurar"
            className="p-1 rounded hover:bg-gray-100"
          >
            <SettingsIcon size={18} />
          </button>

          {showDD && (
            <OptionDropdown
              onClose={() => setShowDD(false)}
              onEdit={() => {
                setShowDD(false);
                setShowEdit(true);
              }}
              onDelete={onDelete}
            />
          )}
        </div>
      </div>

      {/* Modal editar */}
      {showEdit && (
        <EditOptionModal
          option={option}
          onClose={() => setShowEdit(false)}
          onSave={(data) => {
            onUpdate(option.id, data);
            setShowEdit(false);
          }}
        />
      )}
    </>
  );
}

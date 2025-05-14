"use client";
import React from "react";
import Modal from "../ui/Modal";
import { v4 as uuid } from "uuid";
import {
  Calendar,
  FileText,
  Group,
  Link2,
  MapPin,
  Menu,
  Star,
  Mail,
} from "lucide-react";
import { Option } from "./OptionItem";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CATEGORIES: { icon: any; label: string; desc: string }[] = [
  {
    icon: Menu,
    label: "Link a tus menús",
    desc: "Lleva a tus clientes a una o más de tus cartas",
  },
  {
    icon: Link2,
    label: "Link a tus pedidos",
    desc: "Recibe pedidos de Menúpp o de otras apps",
  },
  {
    icon: Calendar,
    label: "Link a tus reservas",
    desc: "Recibe reservas de Menúpp o de otras apps",
  },
  {
    icon: Star,
    label: "Link a encuesta de satisfacción",
    desc: "Escucha la opinión de tus clientes",
  },
  {
    icon: MapPin,
    label: "Información sedes",
    desc: "Comparte toda la información de tus puntos",
  },
  {
    icon: Group,
    label: "Grupo",
    desc: "Crea una sección más para agrupar botones",
  },
  {
    icon: FileText,
    label: "PDF",
    desc: "Sube un PDF para que tus clientes lo vean",
  },
  {
    icon: Link2,
    label: "Link externo",
    desc: "Agrega otros links a páginas por fuera de Menúpp",
  },
];

export default function NewOptionModal({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (opt: Option) => void;
}) {
  const handleClick = (item: (typeof CATEGORIES)[number]) => {
    onAdd({
      id: uuid(),
      label: item.label,
      icon: item.icon.displayName || item.icon.name,
      enabled: true,
    });
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h3 className="text-xl font-semibold mb-4">Nuevo botón</h3>
      <p className="text-sm mb-4">
        ¿Qué tipo de botón quisieras agregar a tu homepage?
      </p>

      <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.label}
            onClick={() => handleClick(cat)}
            className="w-full flex items-center gap-3 border rounded-lg px-3 py-2 hover:bg-gray-50 text-left"
          >
            <cat.icon size={24} className="text-indigo-600" />
            <div className="flex-1">
              <span className="block font-medium">{cat.label}</span>
              <span className="block text-xs text-gray-500">{cat.desc}</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>
        ))}
      </div>
    </Modal>
  );
}

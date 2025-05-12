"use client";

import { GripVertical } from "lucide-react";
import { useRouter } from "next/navigation";

interface SedeItemProps {
  name: string;
  onDelete: () => void;
  onConfigure: () => void;
}

export default function SedeItem({ name, onDelete }: SedeItemProps) {
  const router = useRouter(); // ✅ ahora está dentro del componente

  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-md px-4 py-3">
      <div className="flex items-center gap-3 font-semibold text-sm">
        <GripVertical size={16} />
        {name}
      </div>
      <div className="flex gap-3">
        <button
          onClick={onDelete}
          className="text-red-600 border border-red-600 px-4 py-1 rounded-full text-sm hover:bg-red-50 transition"
        >
          ELIMINAR
        </button>
        <button
          onClick={() => router.push("/negocio/sedes/configurar")}
          className="bg-[#98a8f8] text-white px-4 py-1 rounded-full text-sm shadow hover:bg-[#7f8dee] transition"
        >
          CONFIGURAR
        </button>
      </div>
    </div>
  );
}

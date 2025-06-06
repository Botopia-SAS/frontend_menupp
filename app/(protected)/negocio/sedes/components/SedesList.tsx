"use client";

import { useState } from "react";
import { Plus, Store } from "lucide-react";
import SedeItem from "./SedeItem";
import CreateSedeModal from "./CreateSedeModal";

export default function SedesList() {
  const [sedes, setSedes] = useState<string[]>(["Bogotá"]);
  const [showModal, setShowModal] = useState(false);

  const handleAddSede = (name: string) => {
    setSedes([...sedes, name]);
    setShowModal(false);
  };

  const handleDelete = (name: string) => {
    setSedes(sedes.filter((sede) => sede !== name));
  };

  return (
    <>
      <div className="bg-[#f8f8f7] rounded-2xl shadow p-6 space-y-4">
        {/* Encabezado */}
        <div className="flex justify-between items-center text-grey-300">
          <div className="flex items-center gap-2 font-semibold text-lg text-black">
            <Store size={20} />
            Sedes de tu marca
          </div>
          <button onClick={() => setShowModal(true)}>
            <Plus size={20} />
          </button>
        </div>

        {/* Lista de sedes */}
        <div className="space-y-2 text-black">
          {sedes.map((sede) => (
            <SedeItem
              key={sede}
              name={sede}
              onDelete={() => handleDelete(sede)}
              onConfigure={() => console.log("configurar", sede)}
            />
          ))}
        </div>
      </div>

      <CreateSedeModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onCreate={handleAddSede}
      />
    </>
  );
}

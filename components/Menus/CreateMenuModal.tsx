"use client";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Modal from "@/components/ui/Modal";
import { MenuItem } from "./LocationsMenu";
import { Switch } from "@/components/ui/switch";

type Props = {
  onCreate: (item: MenuItem) => void;
  onClose: () => void;
};

const visibilityOptions = [
  { value: "visible", label: "Visible", color: "bg-green-500" },
  { value: "secret", label: "Secreto", color: "bg-blue-400" },
  { value: "disabled", label: "Desactivado", color: "bg-red-500" },
];

const CreateMenuModal: React.FC<Props> = ({ onCreate, onClose }) => {
  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState("visible");
  const [language, setLanguage] = useState("Español");
  const [type, setType] = useState<"read" | "order" | "plaza">("read");

  // horarios
  const [showSchedule, setShowSchedule] = useState(false);
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const [schedule, setSchedule] = useState(
    days.map((d) => ({ day: d, chunks: [{ open: "", close: "" }] }))
  );

  const handleSave = () => {
    onCreate({
      id: uuid(),
      label: name || "Nuevo menú",
      enabled: visibility === "visible",
    });
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">Nuevo menú</h2>

      {/* nombre */}
      <label className="block text-sm mb-1">Nombre del menú</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 border rounded-lg px-3 py-2"
      />

      {/* visibilidad */}
      <label className="block text-sm mb-1">Visibilidad</label>
      <select
        value={visibility}
        onChange={(e) => setVisibility(e.target.value)}
        className="w-full mb-4 border rounded-lg px-3 py-2"
      >
        {visibilityOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* idioma */}
      <label className="block text-sm mb-1">Idioma principal</label>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full mb-4 border rounded-lg px-3 py-2"
      >
        {["Español", "English", "Português", "Français"].map((lang) => (
          <option key={lang}>{lang}</option>
        ))}
      </select>

      {/* tipo */}
      <label className="block text-sm mb-1">Tipo de menú</label>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <button
          onClick={() => setType("read")}
          className={`border rounded-lg p-3 ${
            type === "read" ? "ring-2 ring-indigo-500" : "hover:bg-gray-50"
          }`}
        >
          Solo lectura
        </button>
        <button
          onClick={() => setType("order")}
          className={`border rounded-lg p-3 ${
            type === "order" ? "ring-2 ring-indigo-500" : "hover:bg-gray-50"
          }`}
        >
          Recibir pedidos
        </button>
        <button
          onClick={() => setType("plaza")}
          className={`border rounded-lg p-3 ${
            type === "plaza" ? "ring-2 ring-indigo-500" : "hover:bg-gray-50"
          }`}
        >
          Plazoleta
        </button>
      </div>

      {/* Condicionales */}
      {type === "read" && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Horarios</span>
            <Switch checked={showSchedule} onCheckedChange={setShowSchedule} />
          </div>

          {showSchedule &&
            schedule.map((d, idx) => (
              <div key={d.day} className="flex items-center gap-2 mb-2">
                <span className="w-20 text-sm">{d.day}</span>
                <input
                  placeholder="00:00"
                  value={d.chunks[0].open}
                  onChange={(e) =>
                    setSchedule((s) => {
                      s[idx].chunks[0].open = e.target.value;
                      return [...s];
                    })
                  }
                  className="flex-1 border rounded-lg px-2 py-1"
                />
                <span>-</span>
                <input
                  placeholder="00:00"
                  value={d.chunks[0].close}
                  onChange={(e) =>
                    setSchedule((s) => {
                      s[idx].chunks[0].close = e.target.value;
                      return [...s];
                    })
                  }
                  className="flex-1 border rounded-lg px-2 py-1"
                />
                {/* botón +  para más rangos (simplificado) */}
              </div>
            ))}
        </div>
      )}

      {type === "order" && (
        <div className="space-y-2 mb-4">
          {["Domicilios", "Para recoger", "En mesa"].map((lbl) => (
            <div key={lbl} className="flex items-center justify-between">
              <span>{lbl}</span>
              <Switch defaultChecked />
            </div>
          ))}
        </div>
      )}

      <button
        disabled={!name}
        onClick={handleSave}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg disabled:opacity-40"
      >
        Crear menú
      </button>
    </Modal>
  );
};

export default CreateMenuModal;

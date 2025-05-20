// src/pages/HomepageDesign.jsx
"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Eye, Pencil, Trash2 } from "lucide-react";
import MobilePreview from "@/components/Menus/MobilePreview";

/* ───────────────────────────────── Tab util ─────────────────────────────── */
type TabsProps = {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
};

function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <div className="flex gap-2 mb-6">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`px-4 py-1 rounded-md font-semibold ${
            active === t
              ? "bg-neutral-900 text-white"
              : "bg-neutral-100 text-neutral-700"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

/* ──────────────────────── Sección plegable reutilizable ─────────────────── */
type CollapsibleProps = {
  title: string;
  children: React.ReactNode;
};

function Collapsible({ title, children }: CollapsibleProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 border rounded-xl bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div>
          <p className="font-semibold text-neutral-900">{title}</p>
          {!open && (
            <p className="text-sm text-neutral-500">
              {title === "Fondo"
                ? "Elige una imagen o color para el fondo de tu homepage"
                : "Cambia los colores y estilos de los botones"}
            </p>
          )}
        </div>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {open && <div className="px-6 pb-6">{children}</div>}
    </div>
  );
}

/* ────────────────────────────── Contenido Fondo ─────────────────────────── */
function FondoOptions() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Imagen horizontal */}
      <div>
        <p className="font-semibold mb-2">Imagen horizontal</p>
        <div className="relative w-48 h-32 rounded-md overflow-hidden">
          {/* Miniatura */}
          <img
            src="https://placehold.co/300x200/png"
            alt="miniatura"
            className="w-full h-full object-cover"
          />
          {/* Acciones */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition">
            <button className="p-2 rounded-full bg-neutral-900/80 text-white">
              <Eye size={16} />
            </button>
            <button className="p-2 rounded-full bg-neutral-900/80 text-white">
              <Pencil size={16} />
            </button>
            <button className="p-2 rounded-full bg-red-600 text-white">
              <Trash2 size={16} />
            </button>
          </div>
        </div>
        <p className="text-xs text-neutral-500 mt-1">
          Dimensiones recomendadas: 1920 × 1080 px
        </p>
        {/* Slider de opacidad eg. */}
        <input type="range" className="mt-4 w-full" />
      </div>

      {/* Color fondo */}
      <div className="flex flex-col">
        <p className="font-semibold mb-2">Color fondo</p>
        <div className="flex items-center gap-3">
          <input
            type="color"
            defaultValue="#120000"
            className="w-12 h-12 rounded-md overflow-hidden border"
          />
          <input
            type="text"
            defaultValue="#120000"
            className="border rounded-md p-2 flex-1"
          />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────── Contenido Botones ────────────────────────── */
function BotonOptions() {
  return (
    <div className="space-y-6">
      {/* Forma botón */}
      <div>
        <p className="font-semibold mb-2">Forma botón</p>
        <div className="grid grid-cols-3 gap-4">
          <input type="text" className="border rounded-md p-2" />
          <input type="text" className="border rounded-md p-2" />
          <input type="text" className="border rounded-md p-2" />
        </div>
      </div>

      {/* Tamaño botón */}
      <div>
        <p className="font-semibold mb-2">Tamaño botón</p>
        <div className="flex gap-4">
          {["S", "M", "L"].map((s) => (
            <button
              key={s}
              className="w-10 h-10 border rounded-md flex items-center justify-center text-neutral-700 hover:border-neutral-900"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Fuente */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <p className="font-semibold mb-2">Fuente en botones</p>
          <select className="w-full border rounded-md p-2">
            <option>Archivo Black</option>
            <option>Montserrat</option>
          </select>
        </div>
        <div>
          <p className="font-semibold mb-2">Tamaño</p>
          <select className="w-full border rounded-md p-2">
            {[12, 14, 16, 18, 20].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Colores */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Relleno */}
        <div>
          <p className="font-semibold mb-2">Color relleno</p>
          <div className="flex gap-3">
            <input
              type="color"
              defaultValue="#380082"
              className="w-12 h-12 rounded-md border"
            />
            <input
              type="text"
              defaultValue="#380082"
              className="border rounded-md p-2 flex-1"
            />
            <input
              type="text"
              defaultValue="40 %"
              className="border rounded-md p-2 w-20"
            />
          </div>
        </div>
        {/* Borde */}
        <div>
          <p className="font-semibold mb-2">Color borde</p>
          <div className="flex gap-3">
            <input
              type="color"
              defaultValue="#f3bc44"
              className="w-12 h-12 rounded-md border"
            />
            <input
              type="text"
              defaultValue="#f3bc44"
              className="border rounded-md p-2 flex-1"
            />
          </div>
        </div>
      </div>

      {/* Sombras */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div>
          <p className="font-semibold mb-2">Color sombra</p>
          <input type="color" className="w-12 h-12 rounded-md border" />
        </div>
        <div className="lg:col-span-2 flex items-end gap-3">
          <input type="text" className="border rounded-md p-2 flex-1" />
          <input
            type="text"
            defaultValue="0 %"
            className="border rounded-md p-2 w-20"
          />
        </div>
      </div>

      <button className="text-sm text-neutral-500 hover:text-neutral-700 flex items-center gap-2">
        <Pencil size={14} />
        Opciones avanzadas por botón
      </button>
    </div>
  );
}

/* ───────────────────────────────── Página ───────────────────────────────── */
export default function HomepageDesign() {
  const [tab, setTab] = useState("Marca");

  return (
    <div className="lg:flex gap-8 max-w-screen-xl mx-auto px-4 lg:px-8 py-10">
      {/* Columna izquierda ─────────────────────────── */}
      <div className="lg:w-1/2">
        <h2 className="flex items-center gap-2 font-bold text-xl mb-6">
          <span role="img" aria-label="paint">
            🎨
          </span>
          Diseño homepage
        </h2>

        {/* Tabs */}
        <Tabs tabs={["Marca", "Bogotá"]} active={tab} onChange={setTab} />

        {/* Contenido del tab ─ mismo layout para ambos */}
        {["Marca", "Bogotá"].includes(tab) && (
          <>
            <Collapsible title="Fondo">
              <FondoOptions />
            </Collapsible>

            <Collapsible title="Botones">
              <BotonOptions />
            </Collapsible>
          </>
        )}
      </div>

      {/* Columna derecha ───────────────────────────── */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-14">
        <div className="sticky top-30">
          {/* Ajusta estas clases para modificar el ancho 👇 */}
          <MobilePreview widthClass="w-80 md:w-96 lg:w-[28rem]" />
        </div>
      </div>
    </div>
  );
}

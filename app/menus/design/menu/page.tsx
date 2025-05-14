// app/menus/page.tsx
"use client";

import MobilePreview from "@/components/Menus/MobilePreview";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

/* ――― Form helpers ――― */
function ColorField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <Label htmlFor={id} className="w-48">
        {label}
      </Label>
      <Input
        type="color"
        id={id}
        value={value}
        onChange={(e: { target: { value: string } }) =>
          onChange(e.target.value)
        }
        className="h-10 w-12 p-0 border"
      />
      <Input
        value={value}
        onChange={(e: { target: { value: string } }) =>
          onChange(e.target.value)
        }
        className="w-32"
      />
    </div>
  );
}
function ToggleField({
  label,
  checked,
  onCheckedChange,
}: {
  label: string;
  checked: boolean;
  onCheckedChange: (c: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <span>{label}</span>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}

/* ――― Individual accordion panes (resumen) ――― */
/* 1. Encabezado -------------------------------------------------------- */
function EncabezadoForm() {
  const [color, setColor] = useState("#5d0ec4");
  const [showHeader, setShowHeader] = useState(true);
  return (
    <div className="space-y-4">
      <Label className="block">Imagen horizontal</Label>
      <Input type="file" />
      <ColorField
        id="encab-color"
        label="Color encabezado"
        value={color}
        onChange={setColor}
      />
      <ToggleField
        label="Mostrar encabezado y logo"
        checked={showHeader}
        onCheckedChange={setShowHeader}
      />
    </div>
  );
}

/* 2. Widgets ----------------------------------------------------------- */
function WidgetsForm() {
  const [state, setState] = useState({
    contacto: true,
    recomendados: true,
    traduccion: true,
    buscar: true,
    suscripcion: true,
    favoritos: false,
  });
  return (
    <div className="space-y-2">
      {Object.entries(state).map(([k, v]) => (
        <ToggleField
          key={k}
          label={k.charAt(0).toUpperCase() + k.slice(1)}
          checked={v}
          onCheckedChange={(c) => setState({ ...state, [k]: c })}
        />
      ))}
    </div>
  );
}

/* 3. Colores Principales ---------------------------------------------- */
function ColoresPrincipalesForm() {
  const [boton, setBoton] = useState("#f3bc44");
  const [textoBoton, setTextoBoton] = useState("#000000");
  const [carrusel, setCarrusel] = useState("#ffffff");
  const [textoCarrusel, setTextoCarrusel] = useState("#5d0ec4");
  return (
    <div className="space-y-4">
      <ColorField
        id="c-boton"
        label="Color botones"
        value={boton}
        onChange={setBoton}
      />
      <ColorField
        id="c-tboton"
        label="Color texto botones"
        value={textoBoton}
        onChange={setTextoBoton}
      />
      <ColorField
        id="c-carrusel"
        label="Color carrusel categorías"
        value={carrusel}
        onChange={setCarrusel}
      />
      <ColorField
        id="c-tcarrusel"
        label="Color texto carrusel"
        value={textoCarrusel}
        onChange={setTextoCarrusel}
      />
    </div>
  );
}

/* 4. Fondo menú -------------------------------------------------------- */
function FondoMenuForm() {
  const [fondo, setFondo] = useState("#f3bc44");
  const [desktop, setDesktop] = useState("#f3bc44");
  return (
    <div className="space-y-4">
      <Label className="block">Imagen vertical</Label>
      <Input type="file" />
      <ColorField
        id="c-fondo"
        label="Color fondo"
        value={fondo}
        onChange={setFondo}
      />
      <ColorField
        id="c-desktop"
        label="Color desktop"
        value={desktop}
        onChange={setDesktop}
      />
    </div>
  );
}

/* 5. Categorías -------------------------------------------------------- */
function CategoriasForm() {
  const fonts = ["Noto Sans", "Nunito", "Poppins"];
  const [vistas, setVistas] = useState({
    vistaCat: true,
    textoCat: false,
    fondoCat: true,
    carruselSup: true,
  });
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Tipografía título categorías</Label>
        <Select defaultValue="Noto Sans">
          <SelectTrigger>
            <SelectValue placeholder="Fuente" />
          </SelectTrigger>
          <SelectContent>
            {fonts.map((f) => (
              <SelectItem key={f} value={f}>
                {f}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-4">
          <Input type="number" placeholder="Tamaño" defaultValue={20} />
          <Input type="color" defaultValue="#5d0ec4" className="h-10 w-12" />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Tipografía descripciones categorías</Label>
        <Select defaultValue="Nunito">
          <SelectTrigger>
            <SelectValue placeholder="Fuente" />
          </SelectTrigger>
          <SelectContent>
            {fonts.map((f) => (
              <SelectItem key={f} value={f}>
                {f}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-4">
          <Input type="number" placeholder="Tamaño" defaultValue={18} />
          <Input type="color" defaultValue="#5d0ec4" className="h-10 w-12" />
        </div>
      </div>

      {Object.entries(vistas).map(([k, v]) => (
        <ToggleField
          key={k}
          label={
            {
              vistaCat: "Vista categorías",
              textoCat: "Texto categorías",
              fondoCat: "Fondo en categoría",
              carruselSup: "Carrusel superior",
            }[k]!
          }
          checked={v}
          onCheckedChange={(c) => setVistas({ ...vistas, [k]: c })}
        />
      ))}
    </div>
  );
}

/* 6. Productos --------------------------------------------------------- */
function ProductosForm() {
  const [colorFondo, setColorFondo] = useState("#5d0ec4");
  const [opciones, setOpciones] = useState({
    titulos: true,
    descripciones: true,
    precios: true,
  });
  return (
    <div className="space-y-6">
      <ColorField
        id="c-ficha"
        label="Color ficha producto"
        value={colorFondo}
        onChange={setColorFondo}
      />

      {/* Título */}
      <div className="space-y-2">
        <Label>Tipografía títulos productos</Label>
        <div className="flex gap-4">
          <Input type="number" placeholder="Tamaño" defaultValue={18} />
          <Input type="color" defaultValue="#f3bc44" className="h-10 w-12" />
        </div>
      </div>

      {/* Descripción */}
      <div className="space-y-2">
        <Label>Tipografía descripciones productos</Label>
        <div className="flex gap-4">
          <Input type="number" placeholder="Tamaño" defaultValue={14} />
          <Input type="color" defaultValue="#ffffff" className="h-10 w-12" />
        </div>
      </div>

      {Object.entries(opciones).map(([k, v]) => (
        <ToggleField
          key={k}
          label={k.charAt(0).toUpperCase() + k.slice(1)}
          checked={v}
          onCheckedChange={(c) => setOpciones({ ...opciones, [k]: c })}
        />
      ))}
    </div>
  );
}

/* 7. Notificaciones ---------------------------------------------------- */
function NotificacionesForm() {
  const [activo, setActivo] = useState(true);
  const [posicion, setPosicion] = useState("Abajo");
  const [freq, setFreq] = useState(60);
  return (
    <div className="space-y-4">
      <ToggleField
        label="Activar/Desactivar notificaciones"
        checked={activo}
        onCheckedChange={setActivo}
      />
      <div className="flex items-center gap-4">
        <Label className="w-48">Posición</Label>
        <Select value={posicion} onValueChange={setPosicion}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Arriba">Arriba</SelectItem>
            <SelectItem value="Abajo">Abajo</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-4">
        <Label className="w-48">Frecuencia (s)</Label>
        <Input
          type="number"
          value={freq}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFreq(Number(e.target.value))
          }
          className="w-32"
        />
      </div>
    </div>
  );
}

/* 8. Copiar diseño ----------------------------------------------------- */
function CopiarDisenoForm() {
  return (
    <div className="space-y-4">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecciona…" />
        </SelectTrigger>
        <SelectContent>
          {/* Reemplaza con tus menús reales */}
          <SelectItem value="menu-1">Menú 1</SelectItem>
          <SelectItem value="menu-2">Menú 2</SelectItem>
        </SelectContent>
      </Select>
      <Button className="ml-auto">COPIAR</Button>
    </div>
  );
}

/* ――― Página principal ――― */
export default function MenusPage() {
  return (
    <main className="flex flex-col lg:flex-row gap-8 p-6">
      {/* Lado izquierdo: panel de desplegables */}
      <section className="lg:w-1/2 lg:pr-8 space-y-4">
        <Accordion type="multiple" defaultValue={["encabezado"]}>
          <AccordionItem value="encabezado">
            <AccordionTrigger>Encabezado</AccordionTrigger>
            <AccordionContent>
              <EncabezadoForm />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="widgets">
            <AccordionTrigger>Widgets</AccordionTrigger>
            <AccordionContent>
              <WidgetsForm />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="colores">
            <AccordionTrigger>Colores Principales</AccordionTrigger>
            <AccordionContent>
              <ColoresPrincipalesForm />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fondo">
            <AccordionTrigger>Fondo menú</AccordionTrigger>
            <AccordionContent>
              <FondoMenuForm />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="categorias">
            <AccordionTrigger>Categorías</AccordionTrigger>
            <AccordionContent>
              <CategoriasForm />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="productos">
            <AccordionTrigger>Productos</AccordionTrigger>
            <AccordionContent>
              <ProductosForm />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="notificaciones">
            <AccordionTrigger>Notificaciones</AccordionTrigger>
            <AccordionContent>
              <NotificacionesForm />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="copiar">
            <AccordionTrigger>Copiar este diseño a otro menú</AccordionTrigger>
            <AccordionContent>
              <CopiarDisenoForm />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Lado derecho: mock-up del iPhone */}
      <div className="lg:w-1/2 relative">
        <div
          className="absolute top-10 right-10 mt-10
        "
        >
          <MobilePreview widthClass="w-80 md:w-96 lg:w-[28rem]" />
        </div>
      </div>
    </main>
  );
}

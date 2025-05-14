"use client";
import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import { Location } from "./LocationsMenu";
import { QRCodeSVG } from "qrcode.react";
import { BookOpen } from "lucide-react";

type Props = { location: Location; onClose: () => void };

const ShareMenuModal: React.FC<Props> = ({ location, onClose }) => {
  const [step, setStep] = useState<"select" | "qr">("select");
  const [selected, setSelected] = useState<string | null>(null);

  const link = selected ? `https://menuupp.co/irrvrnt/venue/${selected}` : "";

  return (
    <Modal onClose={onClose}>
      {step === "select" && (
        <>
          <h2 className="text-center font-semibold text-lg mb-2">
            Comparte tu Menüpp
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Selecciona el menú a donde quieres llevar a tus clientes
          </p>

          {location.items.map((it) => (
            <button
              key={it.id}
              className="w-full flex items-center justify-between gap-2 p-3 rounded-lg border hover:bg-gray-50"
              onClick={() => {
                setSelected(it.id);
                setStep("qr");
              }}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5" />
                <span>{it.label}</span>
              </div>
              <span>›</span>
            </button>
          ))}
        </>
      )}

      {step === "qr" && selected && (
        <>
          <h2 className="text-center font-semibold text-lg mb-4">
            {location.items.find((i) => i.id === selected)?.label} –{" "}
            {location.name}
          </h2>

          <p className="text-gray-600 text-sm mb-3">
            Descarga el QR para imprimir en tus habladores o compártelo
          </p>

          <div className="flex justify-center mb-4">
            <QRCodeSVG value={link} size={180} includeMargin />
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm underline mb-2"
          >
            {link}
          </a>

          <button
            onClick={() => setStep("select")}
            className="mt-2 w-full text-center text-blue-600 hover:text-blue-800 text-sm"
          >
            ‹ Volver a menús
          </button>
        </>
      )}
    </Modal>
  );
};

export default ShareMenuModal;

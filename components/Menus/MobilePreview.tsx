// components/MobilePreview.tsx (iPhone-style frame only)
import React from "react";
import clsx from "clsx";

const MobilePreview: React.FC<{ widthClass?: string }> = ({}) => (
  <div
    className={clsx(
      "hidden lg:block", // oculto en móviles, visible desde lg en adelante
      "relative mx-auto",
      "h-[690px] w-[340px] bg-black rounded-4xl shadow-xl mr-50"
    )}
  >
    {/* Notch */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-44 h-8 bg-black rounded-b-2xl z-10" />

    {/* Interior (vacío) */}
    <div className="absolute inset-0 m-2 bg-transparent rounded-2xl" />

    {/* Home indicator */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-30 h-1 bg-gray-400 rounded-full" />
  </div>
);

export default MobilePreview;

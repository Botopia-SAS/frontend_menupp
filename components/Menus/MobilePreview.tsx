// components/MobilePreview.tsx (iPhone-style frame only)
import React from 'react';
import clsx from 'clsx';

const MobilePreview: React.FC<{widthClass?: string}> = ({ widthClass }) => (
  <div
    className={clsx(
      'relative mx-auto',    // centrar
      widthClass ?? 'w-72 md:w-80 lg:w-96', // ancho ajustable
      'h-[640px] bg-black rounded-3xl shadow-xl'
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
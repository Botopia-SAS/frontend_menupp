import React, { ReactNode } from 'react'
import clsx from 'clsx'

interface MobileMockupProps {
  children: ReactNode
  className?: string
}

const MobileMockup: React.FC<MobileMockupProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'relative w-full h-[600px] bg-black rounded-3xl overflow-hidden',
        className
      )}
    >
      {/* Borde interior blanco simulando pantalla */}
      <div className="absolute inset-0 m-2 bg-white rounded-2xl overflow-hidden">
        {children}
      </div>
      {/* Altavoz (barra) */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded" />
      {/* Cámara frontal */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full" />
    </div>
  )
}

export default MobileMockup

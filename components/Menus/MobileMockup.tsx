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
        'relative w-72 h-[565px] bg-black rounded-[40px] -mr-60 overflow-hidden',
        className
      )}
    >
      {/* Borde interior blanco simulando pantalla */}
      <div className="absolute inset-0 m-2 bg-white rounded-4xl overflow-hidden">
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

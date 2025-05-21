// components/MobileNavbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarItems } from './Sidebar/sidebar.config';
import { Menu } from 'lucide-react';

export default function MobileNavbar() {
  const pathname = usePathname();
  // rutas donde NO queremos mostrar la barra
  const hideOn = ['/', '/login', '/register'];

  if (hideOn.includes(pathname)) {
    return null;
  }

  const [showMore, setShowMore] = useState(false);

  // Ítems fijos inferiores
  const mainItems = sidebarItems.filter(item =>
    ['Tu Negocio', 'Menús y Homepage', 'Pedidos'].includes(item.label)
  );

  // Ítems que se ocultan en el menú hamburguesa
  const extraItems = sidebarItems.filter(
    item => !['Tu Negocio', 'Menús y Homepage', 'Pedidos'].includes(item.label)
  );

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#3b0ac2] text-white border-t border-white/10">
      <div className="flex justify-around items-center py-2">
        {mainItems.map(({ path, icon: Icon, label }) => (
          <Link key={path} href={path} className="flex flex-col items-center text-xs">
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}

        {/* Botón hamburguesa */}
        <button onClick={() => setShowMore(prev => !prev)} className="flex flex-col items-center text-xs">
          <Menu className="w-5 h-5" />
          <span>Más</span>
        </button>
      </div>

      {/* Menú adicional desplegable */}
      {showMore && (
        <div className="bg-[#3b0ac2] border-t border-white/10">
          <div className="flex flex-wrap justify-around py-2">
            {extraItems.map(({ path, icon: Icon, label, disabled }) => (
              <Link
                key={path}
                href={disabled ? '#' : path}
                className={`flex flex-col items-center text-xs p-2 ${disabled ? 'opacity-40 pointer-events-none' : ''}`}
              >
                <Icon className="w-5 h-5" />
                <span className="mt-1">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

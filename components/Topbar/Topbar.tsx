'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { topbarMap } from './topbar.config'
import { Share2, UserCircle } from 'lucide-react'
import { useSidebar } from '@/lib/SidebarContext'
import { supabase } from '@/lib/supabaseClient'

export default function Topbar() {
  const pathname = usePathname()
  const match = topbarMap.find(route => pathname.startsWith(route.path))
  const ViewComponent = match?.view
  const { isHovered } = useSidebar()

  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Cierra si clic fuera
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.replace('/login')
  }

  const marginLeft = isHovered ? '16rem' : '4rem'

  return (
    <div
      className="fixed top-0 right-0 z-40 p-4 bg-[#f8f2e0] transition-all duration-300"
      style={{ left: marginLeft }}
    >
      <header className="flex items-center justify-between px-6 py-3 bg-[#070068] rounded-xl shadow-md w-full max-w-[calc(100vw-6rem)] mx-auto">
        {/* Título y vista extra */}
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-semibold text-white">
            {match?.title || 'Panel'}
          </h2>
          {ViewComponent && <ViewComponent />}
        </div>

        {/* Botones de acciones */}
        <div className="relative flex items-center gap-3">
          <button className="flex items-center gap-1 px-3 py-1 text-sm text-white border rounded-full hover:shadow transition">
            <Share2 size={16} />
            Compartir
          </button>

          {/* Avatar / toggle menu */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="relative flex items-center justify-center w-9 h-9 bg-indigo-100 rounded-full"
          >
            <UserCircle size={22} className="text-indigo-600" />
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div
              ref={menuRef}
              className="absolute right-0 top-full mt-2 z-50"
            >
              {/* Flechita hacia arriba */}
              <div className="absolute right-4 -top-2 w-0 h-0 
                    border-l-8 border-r-8 border-b-8 
                    border-transparent border-b-white" />

              {/* Caja blanca con borde rojo */}
              <div className="w-48 bg-white rounded-md shadow-lg overflow-hidden">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-red-600 font-semibold 
                   hover:bg-red-100 transition"
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

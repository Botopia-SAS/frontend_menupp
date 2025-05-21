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
      style={{ '--sidebar-margin': marginLeft } as React.CSSProperties}
      className="
        fixed top-0 inset-x-0 md:left-[var(--sidebar-margin)] z-40 p-4
        bg-transparent md:bg-[#f8f2e0] transition-all duration-300
      "
    >
      <header className="
          flex flex-col md:flex-row items-start md:items-center
          justify-between mx-auto w-full max-w-[calc(100vw-6rem)]
          px-6 py-3 bg-[#070068] text-white md:shadow-md rounded-xl
        ">
        {/** — ROW 1: título + nav (solo desktop) + botones siempre — **/}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-semibold">{match?.title || 'Panel'}</h2>
            <nav className="hidden md:flex items-center gap-8">
              {ViewComponent && <ViewComponent />}
            </nav>
          </div>

          {/* compartir + perfil */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 px-3 py-1 text-sm border rounded-full hover:shadow transition">
              <Share2 size={16} /> Compartir
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="relative flex items-center justify-center w-9 h-9 bg-indigo-100 rounded-full"
            >
              <UserCircle size={22} className="text-indigo-600" />
            </button>
            {menuOpen && (
              <div ref={menuRef} className="absolute right-0 top-full mt-2 z-50">
                <div className="absolute right-4 -top-2 w-0 h-0 
                                border-l-8 border-r-8 border-b-8 
                                border-transparent border-b-white" />
                <div className="w-48 bg-white rounded-md shadow-lg overflow-hidden">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-red-600 font-semibold hover:bg-red-100 transition"
                  >
                    Cerrar sesión
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/** — ROW 2: navegación (solo en móvil) — **/}
        <nav className="flex md:hidden justify-center items-center gap-8 mt-3">
          {ViewComponent && <ViewComponent />}
        </nav>
      </header>
    </div>
  )
}

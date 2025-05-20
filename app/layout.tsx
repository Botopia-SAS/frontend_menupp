import type { Metadata } from "next"
import { Geist, Geist_Mono }   from "next/font/google"
import "./globals.css"

import { SidebarProvider } from "@/lib/SidebarContext"
import LayoutContent      from "@/components/LayoutContent"
import MobileNavbar      from "@/components/MobileNavbar"

// 1️⃣ IMPORTA AuthProvider
import { AuthProvider }  from "@/context/AuthContext"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title:       "Menüpp Admin",
  description: "Panel administrativo para restaurantes",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          {/* 2️⃣ ENVUELVE AuthProvider */}
          <AuthProvider>
            <LayoutContent>
              {children}
              <MobileNavbar />
            </LayoutContent>
          </AuthProvider>
        </SidebarProvider>
      </body>
    </html>
  )
}

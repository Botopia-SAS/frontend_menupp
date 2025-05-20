'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter }      from 'next/navigation'
import { useAuth }        from '../context/AuthContext'

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login')
    }
  }, [isLoading, user, router])

  if (isLoading) return <p>Loading…</p>
  if (!user)      return null
  return <>{children}</>
}

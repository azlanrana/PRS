'use client'

import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'

export default function Sidebar() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    fetchUser()
  }, [supabase.auth])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4">Risk Control</h2>
        <nav>
          <ul>
            <li>
              <Link href="/" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/traders" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Traders
              </Link>
            </li>
            <li>
              <Link href="/rulesets" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Rule Sets
              </Link>
            </li>
            <li>
              <Link href="/dashboard/simulation" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Simulator
              </Link>
            </li>
            <li>
              <Link href="/logs" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Execution Logs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {user && (
        <div className="mt-4">
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 text-left bg-red-600 hover:bg-red-700 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </aside>
  )
} 
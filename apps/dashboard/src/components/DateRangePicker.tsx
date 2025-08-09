'use client'

import { useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export function DateRangePicker() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [from, setFrom] = useState(searchParams.get('from') || '')
  const [to, setTo] = useState(searchParams.get('to') || '')

  const handleApply = () => {
    const params = new URLSearchParams(searchParams)
    if (from) {
      params.set('from', from)
    } else {
      params.delete('from')
    }
    if (to) {
      params.set('to', to)
    } else {
      params.delete('to')
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex items-center space-x-4 mb-6">
      <div>
        <label htmlFor="from" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          From
        </label>
        <input
          type="date"
          id="from"
          name="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
      </div>
      <div>
        <label htmlFor="to" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          To
        </label>
        <input
          type="date"
          id="to"
          name="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
      </div>
      <button
        onClick={handleApply}
        className="self-end px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Apply
      </button>
    </div>
  )
} 
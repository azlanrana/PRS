'use client'

import { useState } from 'react'

export function JsonViewer({ data }: { data: Record<string, unknown> }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!data || Object.keys(data).length === 0) {
    return <span className="text-gray-500">None</span>
  }

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 font-mono text-sm"
      >
        View JSON
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">JSON Payload</h2>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md max-h-96 overflow-auto">
              <pre className="text-sm text-left whitespace-pre-wrap">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 
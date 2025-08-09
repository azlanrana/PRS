'use client'

import { useState } from 'react'
import { JsonViewer } from './JsonViewer'

interface Log {
    id: string;
    createdAt: string;
    traderPlatformId: string;
    status: 'PROCESSED' | 'FAILED';
    appliedRules: Record<string, unknown>;
    requestPayload: Record<string, unknown>;
    responsePayload: Record<string, unknown>;
}

export function LogsView({ logs }: { logs: Log[] }) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredLogs = logs.filter((log) =>
    log.traderPlatformId.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Execution Logs</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Trader ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-xs p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
        />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="tracking-wider border-b-2 dark:border-neutral-600 border-t">
              <tr>
                <th className="px-6 py-3 border-x dark:border-neutral-600">
                  Timestamp
                </th>
                <th className="px-6 py-3 border-x dark:border-neutral-600">
                  Trader ID
                </th>
                <th className="px-6 py-3 border-x dark:border-neutral-600">
                  Status
                </th>
                <th className="px-6 py-3 border-x dark:border-neutral-600">
                  Applied Rules
                </th>
                <th className="px-6 py-3 border-x dark:border-neutral-600">
                  Request
                </th>
                <th className="px-6 py-3 border-x dark:border-neutral-600">
                  Response
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id} className="border-b dark:border-neutral-600">
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    {new Date(log.createdAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    {log.traderPlatformId}
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        log.status === 'PROCESSED'
                          ? 'bg-green-200 text-green-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    <JsonViewer data={log.appliedRules} />
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    <JsonViewer data={log.requestPayload} />
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    <JsonViewer data={log.responsePayload} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 
'use client'

import { useState } from 'react'
import { Trader, RuleSet } from '@prisma/client'
import Link from 'next/link'
import { TraderActions } from './TraderActions'

type TraderWithRuleSet = Trader & {
  ruleSet: RuleSet | null
}

export function TradersView({
  traders,
  ruleSets,
}: {
  traders: TraderWithRuleSet[]
  ruleSets: RuleSet[]
}) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTraders = traders.filter((trader) =>
    trader.platformId.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Traders Management</h1>
        <Link
          href="/rulesets"
          className="px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Manage Rule Sets
        </Link>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Platform ID..."
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
                <th
                  scope="col"
                  className="px-6 py-3 border-x dark:border-neutral-600"
                >
                  Platform ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border-x dark:border-neutral-600"
                >
                  Platform
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border-x dark:border-neutral-600"
                >
                  Applied Rule Set
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border-x dark:border-neutral-600"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTraders.map((trader: TraderWithRuleSet) => (
                <tr key={trader.id} className="border-b dark:border-neutral-600">
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    {trader.platformId}
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    {trader.platform}
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    {trader.ruleSet?.name || 'None'}
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    <TraderActions trader={trader} ruleSets={ruleSets || []} />
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
'use client'

import { RuleSet } from '@risk-control/shared-types'
import Link from 'next/link'
import { AddRuleSetModal } from './AddRuleSetModal'
import { EditRuleSetModal } from './EditRuleSetModal'
import { useTransition } from 'react'
import { deleteRuleSet } from './actions'

type RuleSetWithRules = RuleSet & {
  rules: any[]
}

export function RuleSetsView({
  ruleSets,
}: {
  ruleSets: RuleSetWithRules[]
}) {
  const [isPending, startTransition] = useTransition()

  const handleDelete = (id: string) => {
    startTransition(async () => {
      await deleteRuleSet(id)
    })
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Rule Sets Management</h1>
        <AddRuleSetModal />
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
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border-x dark:border-neutral-600"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border-x dark:border-neutral-600"
                >
                  Rule Count
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
              {ruleSets?.map((ruleSet) => (
                <tr key={ruleSet.id} className="border-b dark:border-neutral-600">
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    <Link
                      href={`/rulesets/${ruleSet.id}`}
                      className="text-indigo-400 hover:underline"
                    >
                      {ruleSet.name}
                    </Link>
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    {ruleSet.description}
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    {ruleSet.rules.length}
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    <EditRuleSetModal ruleSet={ruleSet} />
                    <button
                      onClick={() => handleDelete(ruleSet.id)}
                      disabled={isPending}
                      className="text-red-400 hover:text-red-300 ml-4 disabled:opacity-50"
                    >
                      {isPending ? 'Deleting...' : 'Delete'}
                    </button>
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
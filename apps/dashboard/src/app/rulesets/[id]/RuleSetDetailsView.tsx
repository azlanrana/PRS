'use client'

import Link from 'next/link'
import { AddExecutionRuleModal } from './AddExecutionRuleModal'
import { RuleSet } from '@risk-control/shared-types';

interface ExecutionRule {
    id: string;
    type: string;
    parameters: Record<string, unknown>;
}

interface RuleSetWithRules extends RuleSet {
    rules: ExecutionRule[];
}

export function RuleSetDetailsView({ ruleSet, ruleTypes }: { ruleSet: RuleSetWithRules, ruleTypes: string[] }) {
  return (
    <div>
      <div className="mb-6">
        <Link
          href="/rulesets"
          className="text-indigo-400 hover:text-indigo-300"
        >
          &larr; Back to Rule Sets
        </Link>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">{ruleSet.name}</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {ruleSet.description}
          </p>
        </div>
        <AddExecutionRuleModal ruleSetId={ruleSet.id} ruleTypes={ruleTypes} />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Execution Rules</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="tracking-wider border-b-2 dark:border-neutral-600 border-t">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 border-x dark:border-neutral-600"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border-x dark:border-neutral-600"
                >
                  Parameters
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
              {ruleSet.rules.map((rule) => (
                <tr key={rule.id} className="border-b dark:border-neutral-600">
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    {rule.type}
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600 font-mono">
                    {JSON.stringify(rule.parameters)}
                  </td>
                  <td className="px-6 py-3 border-x dark:border-neutral-600">
                    <button className="text-red-400 hover:text-red-300">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {ruleSet.rules.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-4 text-gray-500">
                    No execution rules in this set.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 
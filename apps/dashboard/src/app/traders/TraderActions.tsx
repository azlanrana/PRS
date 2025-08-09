
'use client'
import { useState } from 'react'
import { Trader, RuleSet } from '@risk-control/shared-types'
import { assignRuleSet } from './actions'

type TraderWithRuleSet = Trader & {
  ruleSet: RuleSet | null
}

export function TraderActions({
  trader,
  ruleSets,
}: {
  trader: TraderWithRuleSet
  ruleSets: RuleSet[]
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRuleSetId, setSelectedRuleSetId] = useState(
    trader.ruleSetId || ''
  )

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await assignRuleSet(trader.id, selectedRuleSetId)
    handleCloseModal()
  }

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        Manage Rules
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              Manage Rules for {trader.platformId}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="ruleSet"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Assign Rule Set
                </label>
                <select
                  id="ruleSet"
                  value={selectedRuleSetId}
                  onChange={(e) => setSelectedRuleSetId(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                >
                  <option value="">None</option>
                  {ruleSets.map((rs) => (
                    <option key={rs.id} value={rs.id}>
                      {rs.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 
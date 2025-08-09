'use client';

import { useState } from 'react';
import { addExecutionRule } from './actions';

export function AddExecutionRuleModal({ ruleSetId, ruleTypes }: { ruleSetId: string, ruleTypes: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<string>(ruleTypes[0] || '');
  const [parameters, setParameters] = useState('{}');
  const [error, setError] = useState('');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsedParams = JSON.parse(parameters);
      await addExecutionRule({
        ruleSetId,
        type: type as any, // The type is a string, but the server action expects the enum
        parameters: parsedParams,
      });
      handleClose();
    } catch (err) {
      setError('Invalid JSON format for parameters.');
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700"
      >
        Add Execution Rule
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Execution Rule</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Rule Type
                </label>
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                >
                  {ruleTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="parameters" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Parameters (JSON)
                </label>
                <textarea
                  id="parameters"
                  value={parameters}
                  onChange={(e) => setParameters(e.target.value)}
                  rows={5}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 font-mono"
                  placeholder='{ "key": "value" }'
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Add Rule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 
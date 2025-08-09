'use client';

import { useState } from 'react';

// We'll define a type for the trade result later
type SimulationResult = {
  originalTrade: Record<string, any>;
  manipulatedTrade: Record<string, any>;
  appliedRules: any[];
};

export default function SimulationPage() {
  const [traderId, setTraderId] = useState('');
  const [symbol, setSymbol] = useState('EURUSD');
  const [price, setPrice] = useState('1.07500');
  const [volume, setVolume] = useState('1.00');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSimulate = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    const tradeData = {
      traderId: parseInt(traderId, 10),
      symbol,
      price: parseFloat(price),
      volume: parseFloat(volume),
      timestamp: new Date().toISOString(),
    };

    if (isNaN(tradeData.traderId)) {
      setError('Invalid Trader ID. Please enter a number.');
      setIsLoading(false);
      return;
    }

    try {
      // The backend API is running on port 3001
      const response = await fetch('http://localhost:3001/api/process-trade', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tradeData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trade Execution Simulator</h1>
      <div className="border border-gray-700 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-2">Simulation Parameters</h2>
        <p className="text-sm text-gray-400 mb-4">Enter mock trade data to see how the execution engine applies rules.</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="traderId" className="block text-sm font-medium">Trader ID</label>
            <input id="traderId" placeholder="e.g., 1" value={traderId} onChange={(e) => setTraderId(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-gray-800 border-gray-600 text-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="symbol" className="block text-sm font-medium">Symbol</label>
            <input id="symbol" placeholder="e.g., EURUSD" value={symbol} onChange={(e) => setSymbol(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-gray-800 border-gray-600 text-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="price" className="block text-sm font-medium">Price</label>
            <input id="price" placeholder="e.g., 1.07500" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-gray-800 border-gray-600 text-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="volume" className="block text-sm font-medium">Volume (Lots)</label>
            <input id="volume" placeholder="e.g., 1.00" value={volume} onChange={(e) => setVolume(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-gray-800 border-gray-600 text-white" />
          </div>
        </div>
        <div className="mt-6">
          <button onClick={handleSimulate} disabled={isLoading} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50">
            {isLoading ? 'Simulating...' : 'Run Simulation'}
          </button>
        </div>
      </div>

      {error && (
          <div className="mt-4 border border-red-700 rounded-lg p-4 bg-red-900/50">
              <h3 className="font-bold text-red-400">Simulation Failed</h3>
              <pre className="mt-2 text-sm text-red-300 whitespace-pre-wrap">{error}</pre>
          </div>
      )}

      {result && (
        <div className="mt-4 border border-gray-700 rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-bold">Simulation Result</h2>
          </div>
          <div className="p-6 border-t border-gray-700 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">Original Trade</h3>
              <pre className="p-4 bg-gray-800 rounded-md text-sm">{JSON.stringify(result.originalTrade, null, 2)}</pre>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Manipulated Trade</h3>
              <pre className="p-4 bg-gray-800 rounded-md text-sm">{JSON.stringify(result.manipulatedTrade, null, 2)}</pre>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-semibold mb-2">Applied Rules</h3>
              {result.appliedRules.length > 0 ? (
                <pre className="p-4 bg-gray-800 rounded-md text-sm">{JSON.stringify(result.appliedRules, null, 2)}</pre>
              ) : (
                <p className="text-gray-400">No rules were applied for this trader.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
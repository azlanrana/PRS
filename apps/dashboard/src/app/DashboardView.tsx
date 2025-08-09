'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { DateRangePicker } from '../components/DateRangePicker'

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
}


const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-700 text-white p-4 rounded-lg shadow-lg border border-gray-600">
        <p className="font-bold text-lg">{`${payload[0].name}`}</p>
        <p className="text-sm" style={{ color: payload[0].color }}>{`${
          payload[0].name
        }: ${formatCurrency(payload[0].value)}`}</p>
        <p className="text-sm" style={{ color: payload[1].color }}>{`${
          payload[1].name
        }: ${formatCurrency(payload[1].value)}`}</p>
      </div>
    )
  }

  return null
}

interface Stats {
    totalTraders: number;
    manipulatedTraders: number;
    totalExecutions: number;
    originalProfit: number;
    manipulatedProfit: number;
}

export function DashboardView({ stats }: { stats: Stats }) {
  const chartData = [
    {
      name: '',
      'Original Profit': stats.originalProfit,
      'Risk Adjusted Profit': stats.manipulatedProfit,
    },
  ]

  const profitDifference = stats.originalProfit - stats.manipulatedProfit

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      </div>
      <DateRangePicker />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
            Total Traders
          </h3>
          <p className="text-4xl font-bold">{stats.totalTraders}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
            Traders Under Risk Adjustment
          </h3>
          <p className="text-4xl font-bold text-yellow-500">
            {stats.manipulatedTraders}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
            Total Risk Adjustments
          </h3>
          <p className="text-4xl font-bold">{stats.totalExecutions}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
            Profit Saved
          </h3>
          <p className="text-4xl font-bold text-green-500">
            {formatCurrency(profitDifference)}
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Profit Analysis</h3>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorOriginal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorAdjusted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={formatCurrency} />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: 'transparent' }}
              />
              <Legend />
              <Bar
                dataKey="Original Profit"
                fill="url(#colorOriginal)"
                radius={[4, 4, 0, 0]}
                activeBar={{ fill: 'url(#colorOriginal)' }}
              />
              <Bar
                dataKey="Risk Adjusted Profit"
                fill="url(#colorAdjusted)"
                radius={[4, 4, 0, 0]}
                activeBar={{ fill: 'url(#colorAdjusted)' }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
} 
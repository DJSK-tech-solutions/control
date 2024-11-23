import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartDetails = ({ selectedStat }) => {
  if (!selectedStat) return null;

  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <button className="px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-600">
            Monthly {selectedStat.title} Growth
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <span className="text-sm text-gray-600">Current Year</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-600">Previous Year</span>
            </div>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={selectedStat.data}
              margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={false} 
                stroke="#E5E7EB"
                opacity={0.4}
              />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                tickFormatter={(value) => `${(value / 1000)}k`}
              />
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload?.length) {
                    const currentValue = payload[0].value;
                    const previousValue = payload[1].value;
                    const growth = ((currentValue - previousValue) / previousValue * 100).toFixed(1);
                    
                    return (
                      <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm">
                        <div className="font-medium">{label}</div>
                        <div>Current: {(currentValue / 1000).toFixed(1)}k</div>
                        <div>Previous: {(previousValue / 1000).toFixed(1)}k</div>
                        <div className="text-green-400">Growth: +{growth}%</div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line 
                type="monotone"
                dataKey="current"
                stroke="#000"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#000" }}
              />
              <Line 
                type="monotone"
                dataKey="previous"
                stroke="#9CA3AF"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#9CA3AF" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartDetails;
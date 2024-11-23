import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

interface AnnualRevenueProps {
    selectedYear: string;
    setSelectedYear: (year: string) => void;
    pieData: { name: string; value: number; color: string }[];
    quarterlyData: { quarter: string; value: string; trend: string; isDown: boolean }[];
}

const AnnualRevenue = ({ selectedYear, setSelectedYear, pieData, quarterlyData }: AnnualRevenueProps) => {
    return (
        <div className=" rounded-3xl p-6 h-[670px] border border-gray-500">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-[#1D2129]">Annual Revenue</h3>
                <div className="relative">
                    <button className="px-4 py-2 border border-[#364A15] rounded-full flex items-center gap-2">
                        <span className="text-sm">{selectedYear}</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#364A15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
                {/* Pie Chart */}
                <div className="relative">
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={110}
                                startAngle={90}
                                endAngle={450}
                                paddingAngle={2}
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell 
                                        key={`cell-${index}`} 
                                        fill={entry.color} 
                                        strokeWidth={0}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-sm text-gray-600">Total (million)</div>
                        <div className="text-3xl font-semibold mt-1">526.33</div>
                    </div>
                </div>

                {/* Revenue Info */}
                <div className="pt-8">
                    <h3 className="text-lg text-[#364A15] mb-2">Total Revenue</h3>
                    <div className="text-4xl font-semibold mb-2">526.33</div>
                    <div className="text-sm text-gray-500 mb-4">million dollar</div>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="inline-flex items-center text-red-500">
                            <ArrowDownRight className="w-4 h-4" />
                            11.2%
                        </span>
                        <span className="text-sm text-gray-500">Compare with last year</span>
                    </div>

                    {/* Legend */}
                    <div className="grid grid-cols-2 gap-y-2">
                        {pieData.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div 
                                    className="w-3 h-3 rounded-full" 
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-sm text-[#4E5969]">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quarterly Data */}
            <div className="mt-8">
                {quarterlyData.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex justify-between items-center py-4 border-b border-gray-100 last:border-none"
                    >
                        <span className="text-[#4E5969]">{item.quarter}</span>
                        <div className="flex items-center gap-4">
                            <span className="font-medium text-[#1D2129]">{item.value}</span>
                            <span 
                                className={`inline-flex items-center gap-1 ${
                                    item.isDown ? 'text-red-500' : 'text-green-500'
                                }`}
                            >
                                {item.isDown ? (
                                    <ArrowDownRight className="w-3 h-3" />
                                ) : (
                                    <ArrowUpRight className="w-3 h-3" />
                                )}
                                {item.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Example usage
const ExampleData = {
    pieData: [
        { name: 'Commissions', value: 30, color: '#D2F4D6' },
        { name: 'Delivery fees', value: 25, color: '#ECC4B7' },
        { name: 'Advertisement', value: 25, color: '#F9BC89' },
        { name: 'Payment fees', value: 20, color: '#E4E4FC' }
    ],
    quarterlyData: [
        { quarter: '1st Quarter', value: '120.03', trend: '↓ 2.8%', isDown: true },
        { quarter: '2nd Quarter', value: '83.30', trend: '↓ 2.8%', isDown: true },
        { quarter: '3rd Quarter', value: '145.00', trend: '↓ 2.8%', isDown: true },
        { quarter: '4th Quarter', value: '178.00', trend: '↑ 2.8%', isDown: false }
    ]
};

export default AnnualRevenue;
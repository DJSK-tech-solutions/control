// components/QuarterRevenue.tsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

interface QuarterRevenueProps {
    selectedQuarter: string;
    setSelectedQuarter: (quarter: string) => void;
}

const QuarterRevenue = ({ selectedQuarter, setSelectedQuarter }: QuarterRevenueProps) => {
    const pieData = [
        { name: 'Commissions', value: 40, color: '#4ADE80' },
        { name: 'Delivery fees', value: 30, color: '#FDA4AF' },
        { name: 'Advertisement', value: 30, color: '#FFB98A' }
    ];

    const barData = [
        { month: 'Feb', value: 25 },
        { month: 'Mar', value: 15 },
        { month: 'Apr', value: 32 }
    ];

    // Quarter Revenue Pie Chart Component
    const QuarterPieChart = () => (
        <div className="relative h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={0}
                        dataKey="value"
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            
            {/* Total Sales Overlay */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 text-right">
                <div className="text-sm font-medium text-gray-600">Total sales</div>
                <div className="text-2xl font-semibold text-gray-900">120.03</div>
                <div className="text-sm text-gray-500">million dollar</div>
            </div>
        </div>
    );

    // Quarter Revenue Bar Chart Component
    const QuarterBarChart = () => (
        <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                    data={barData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    barSize={24}
                >
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        vertical={false}
                        stroke="#E5E7EB"
                        opacity={0.5}
                    />
                    <XAxis 
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        tickCount={4}
                        domain={[0, 40]}
                        dx={-10}
                        label={{ 
                            value: 'Figure in million',
                            angle: -90,
                            position: 'insideLeft',
                            style: { fill: '#9CA3AF', fontSize: 12 },
                            offset: 0
                        }}
                    />
                    <Bar 
                        dataKey="value" 
                        fill="#4ADE80"
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

    return (
        <div className="bg-white rounded-2xl p-6">
            

            <QuarterPieChart />

            {/* Legend */}
            <div className="flex justify-between mb-8">
                {pieData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                ))}
            </div>

            <QuarterBarChart />
        </div>
    );
};

export default QuarterRevenue;
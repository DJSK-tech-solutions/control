// components/RevenuePieChart.tsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface RevenuePieChartProps {
    data: Array<{
        name: string;
        value: number;
        color: string;
    }>;
    totalAmount: string;
    title?: string;
    subtitle?: string;
    compareText?: string;
}

const RevenuePieChart = ({ data, totalAmount, title, subtitle, compareText }: RevenuePieChartProps) => {
    return (
        <div className="relative h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={0}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            
            {/* Center Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-sm text-gray-600">Total (million)</div>
                <div className="text-2xl font-semibold">{totalAmount}</div>
            </div>

            {/* Info Overlay */}
            {title && (
                <div className="absolute top-4 right-4">
                    <div className="text-sm font-medium">{title}</div>
                    <div className="text-2xl font-semibold">{totalAmount}</div>
                    <div className="text-sm text-gray-500">{subtitle}</div>
                    {compareText && (
                        <div className="text-sm text-red-500 mt-1">{compareText}</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default RevenuePieChart;
// components/QuarterlyBarChart.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const QuarterlyBarChart = ({ data }) => {
    return (
        <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                    data={data}
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
};

export default QuarterlyBarChart;
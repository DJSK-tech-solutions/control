
import React, { useState } from 'react';

import { LineChart, Line } from 'recharts';
const chartData = [...Array(7)].map(() => ({
    value: Math.random() * 10 + 90
  }));
const ProductCard = ({ item }) => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden w-[160px] h-[250px]">
      <div className="relative">
        <div className="p-3">
          <img src={item.image} alt={item.title} className="w-full h-24 object-contain mb-1" />
        </div>
        <span 
          className={`
            absolute right-0 top-2 px-2 py-0.5 rounded-lg text-xs
            ${item.label === 'Top 1' 
              ? 'bg-[#FF9340] text-white' 
              : 'bg-[#F5F5F5] text-[#364A15]'
            }
          `}
        >
          {item.label}
        </span>
      </div>
      
      <div className="p-3 space-y-1.5">
        {[
          { label: 'Item', value: item.title },
          { label: 'Category', value: item.category },
          { label: 'Seller', value: item.seller }
        ].map((field, idx) => (
          <div key={idx}>
            <p className="text-[#364A15]/60 text-[10px]">{field.label}</p>
            <p className={`text-[11px] ${idx === 0 ? 'font-medium' : ''} text-[#364A15] truncate`}>
              {field.value}
            </p>
          </div>
        ))}
        
        <div>
          <p className="text-[#364A15]/60 text-[10px] mb-1">Ranking trend</p>
          <div className="flex justify-between items-center">
            <LineChart width={60} height={20} data={chartData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#00B42A" 
                strokeWidth={1}
                dot={false}
              />
            </LineChart>
            <div className="bg-[#E8FFEA] text-[#00B42A] text-[10px] px-1.5 py-0.5 rounded">
              +12%
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default ProductCard;
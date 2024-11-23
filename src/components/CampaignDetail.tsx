import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Calendar, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import CampaignItems from './NewCampaign.tsx';

export default function CampaignDetails() {
  const navigate = useNavigate();
  const [selectedBar, setSelectedBar] = useState(null);

  const chartData = [
    { date: '1 Apr', value: 192, opacity: 0.5, orders: 92 },
    { date: '2 Apr', value: 224, opacity: 0.5, orders: 108 },
    { date: '3 Apr', value: 131, opacity: 0.5, orders: 75 },
    { date: '4 Apr', value: 267, opacity: 1, orders: 122 },
    { date: '5 Apr', value: 0, opacity: 0.5, orders: 0 },
    { date: '6 Apr', value: 0, opacity: 0.5, orders: 0 },
    { date: '7 Apr', value: 0, opacity: 0.5, orders: 0 }
  ];

  const lineData = [
    { x: 0, y: 50 },
    { x: 1, y: 30 },
    { x: 2, y: 45 },
    { x: 3, y: 25 },
    { x: 4, y: 55 },
    { x: 5, y: 40 },
    { x: 6, y: 45 }
  ];

  const handleBack = () => {
    navigate('/promotions');
  };

  const handleBarClick = (data, index) => {
    if (data.orders > 0) {
      setSelectedBar(index);
    }
  };

  const handleDownload = () => {
    // Prepare the data for export
    const exportData = chartData.map(item => ({
      Date: item.date,
      Orders: item.orders,
      Value: item.value,
    }));

    // Convert data to CSV format
    const headers = ['Date', 'Orders', 'Value'];
    const csvData = [
      headers.join(','),
      ...exportData.map(row => [row.Date, row.Orders, row.Value].join(','))
    ].join('\n');

    // Create and trigger download
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'campaign_report.csv');
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-8 bg-[#F1F1F1]">
      <h1 className="text-[24px] font-medium text-[#364A15] mb-6 tracking-[0.02em]">Campaign details</h1>

      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleBack}
            className="w-[54px] h-[54px] bg-white rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-[#5E616F] stroke-[2.4px]" />
          </button>
          <div className="h-[54px] bg-white rounded-[32px] px-8 flex items-center justify-between" style={{ width: "700px" }}>
            <span className="text-base text-[#364A15] tracking-[0.02em]">Blue Bird</span>
            <div className="flex items-center bg-[#1AC84B] h-7 px-4 rounded-full">
              <span className="text-white mr-2">Active</span>
              <div className="w-[7px] h-[7px] bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <button 
          onClick={handleDownload}
          className="flex items-center gap-2 h-[42px] px-4 py-2 border border-[#364A15] rounded-full hover:bg-[#F8F8F8] transition-colors"
        >
          <span className="text-sm tracking-[0.02em] text-[#364A15]">Download report</span>
          <Download className="w-5 h-5" />
        </button>
      </div>

      <div className="flex gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Usage Trend Card */}
          <div className="w-[385px] bg-white rounded-[32px] p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[20px] font-medium text-[#364A15] tracking-[0.02em]">Usage trend</h2>
              <button className="flex items-center gap-1 h-[42px] px-4 py-2 border border-[#364A15] rounded-full">
                <span className="text-sm tracking-[0.02em]">Track</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              {/* Orders Tooltip */}
              {selectedBar !== null && chartData[selectedBar].orders > 0 && (
                <div 
                  className="absolute z-10"
                  style={{
                    left: `${(selectedBar * (100 / (chartData.length - 1)))}%`,
                    top: "30px",
                    transform: "translateX(-50%)"
                  }}
                >
                  <div className="relative">
                    <div className="bg-[#F2F2F2] rounded-lg px-4 py-1.5">
                      <span className="text-xs text-[#1F1F1F]">
                        {chartData[selectedBar].orders} orders
                      </span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-t-[#F2F2F2] border-l-transparent border-r-transparent" />
                    </div>
                  </div>
                </div>
              )}

              {/* Bar Chart */}
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} barGap={0}>
                    <defs>
                      <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#40B04A" />
                        <stop offset="100%" stopColor="#1A7E23" />
                      </linearGradient>
                      <linearGradient id="inactiveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E8F5E9" />
                        <stop offset="100%" stopColor="#C8E6C9" />
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="date" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ 
                        fill: '#364A15', 
                        fontSize: 12,
                        dy: 10
                      }}
                    />
                    <Bar 
                      dataKey="value" 
                      radius={[20, 20, 20, 20]}
                      barSize={38}
                      onClick={(data, index) => handleBarClick(data, index)}
                      cursor="pointer"
                    >
                      {chartData.map((entry, index) => (
                        <rect
                          key={`bar-${index}`}
                          fill={entry.opacity === 1 ? 'url(#activeGradient)' : 'url(#inactiveGradient)'}
                          rx={20}
                          ry={20}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Line Chart */}
              <div className="h-16 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <Line 
                      type="monotone" 
                      dataKey="y" 
                      stroke="#1A7E23"
                      strokeWidth={1.5}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Bottom Line Indicator */}
              <div className="mt-2">
                <div className="h-0.5 bg-[#D4D4D4] bg-opacity-50 relative">
                  <div className="absolute left-[119px] w-[49px] h-0.5 bg-[#1A7E23]" />
                </div>
              </div>
            </div>
          </div>

          {/* Related Sales Card */}
          <div className="w-[385px] bg-white rounded-[32px] p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-medium text-[#364A15] tracking-[0.02em]">Related sales amount</h2>
              <button className="flex items-center gap-1 h-[42px] px-4 py-2 border border-[#364A15] rounded-full">
                <span className="text-sm tracking-[0.02em]">Total</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-8">
              <div className="flex items-baseline text-[42px] text-[#364A15] tracking-[-0.02em]">
                <span className="font-medium mr-3">MA</span>
                <span className="font-medium">1,300,420.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Campaign Form */}
        <div className="flex-1 bg-white rounded-[32px] p-6">
          <CampaignItems />
        </div>
      </div>
    </div>
  );
}
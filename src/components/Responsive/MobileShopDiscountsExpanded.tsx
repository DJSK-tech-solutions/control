import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from "lucide-react";

const ShopDiscountsExpanded = () => {
  const navigate = useNavigate();
  const discounts = [
    {
      name: "Fresh potato",
      weight: "3kg",
      creator: "Halal Market ltd.",
      startDate: "02 Apr 2024",
      endDate: "16 Apr 2024",
      discount: "5%",
      image: "/api/placeholder/52/52"
    },
    // ... other discount items
  ];

  return (
    <div className="min-h-screen bg-[#F1F1F1] p-4 md:p-8">
      {/* Filter Buttons */}
      <div className="flex gap-2 md:gap-4 mb-6 md:mb-8 justify-end overflow-x-auto">
        <button className="whitespace-nowrap px-4 md:px-8 py-2 bg-[#D2F4D6] rounded-full text-sm">All</button>
        <button className="whitespace-nowrap px-4 md:px-8 py-2 border border-[#364A15]/20 rounded-full text-sm">Active</button>
        <button className="whitespace-nowrap px-4 md:px-8 py-2 border border-[#364A15]/20 rounded-full text-sm">Draft</button>
      </div>
        
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <button 
          onClick={() => navigate('/promotions')}
          className="flex items-center gap-2 text-[#364A15] mb-4"
        >
          <ArrowLeft size={20} />
          <span className="text-sm md:text-base">list of shop discount</span>
        </button>
        <h1 className="text-3xl md:text-5xl font-medium text-[#364A15]/30">Promotion</h1>
      </div>

      {/* Table Container with Horizontal Scroll */}
      <div className="bg-white rounded-3xl p-4 md:p-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-[#364A15]/10">
                <th className="text-left p-3 md:p-4 text-xs md:text-sm font-medium text-[#364A15]">Item image</th>
                <th className="text-left p-3 md:p-4 text-xs md:text-sm font-medium text-[#364A15]">Item name</th>
                <th className="text-left p-3 md:p-4 text-xs md:text-sm font-medium text-[#364A15]">Creator</th>
                <th className="text-left p-3 md:p-4 text-xs md:text-sm font-medium text-[#364A15]">Start date</th>
                <th className="text-left p-3 md:p-4 text-xs md:text-sm font-medium text-[#364A15]">End date</th>
                <th className="text-left p-3 md:p-4 text-xs md:text-sm font-medium text-[#364A15]">% of discount</th>
              </tr>
            </thead>
            <tbody>
              {discounts.map((item, index) => (
                <tr key={index} className="border-b border-[#364A15]/10">
                  <td className="p-3 md:p-4">
                    <img src={item.image} alt={item.name} className="w-12 h-12 md:w-14 md:h-14 rounded-lg"/>
                  </td>
                  <td className="p-3 md:p-4">
                    <div className="text-xs md:text-sm text-[#364A15]">{item.name}</div>
                    <div className="text-xs md:text-sm text-[#364A15]">{item.weight}</div>
                  </td>
                  <td className="p-3 md:p-4 text-xs md:text-sm text-[#364A15]">{item.creator}</td>
                  <td className="p-3 md:p-4 text-xs md:text-sm text-[#364A15]">{item.startDate}</td>
                  <td className="p-3 md:p-4 text-xs md:text-sm text-[#364A15]">{item.endDate}</td>
                  <td className="p-3 md:p-4 text-xs md:text-sm text-[#364A15]">{item.discount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Alternative */}
        <div className="md:hidden space-y-4 mt-4">
          {discounts.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-4 mb-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg"/>
                <div>
                  <div className="text-sm font-medium text-[#364A15]">{item.name}</div>
                  <div className="text-xs text-[#364A15]">{item.weight}</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-[#364A15]/70">Creator</span>
                  <span className="text-xs text-[#364A15]">{item.creator}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#364A15]/70">Start date</span>
                  <span className="text-xs text-[#364A15]">{item.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#364A15]/70">End date</span>
                  <span className="text-xs text-[#364A15]">{item.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#364A15]/70">Discount</span>
                  <span className="text-xs text-[#364A15]">{item.discount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopDiscountsExpanded;
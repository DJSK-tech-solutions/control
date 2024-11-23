import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter } from "lucide-react";
import CampaignItems from '../components/CampaignItem.tsx';
import DiscountSchedule from '../components/DiscountSchedules.tsx';
import Sidebar from '../components/sidebar.tsx';

const PromotionPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  const products = [
    {
      name: "Fresh potato",
      weight: "3kg",
      discount: "5%",
      image: "/api/placeholder/52/52"
    },  {
        name: "Fresh potato",
        weight: "3kg",
        discount: "5%",
        image: "/api/placeholder/52/52"
      },
      {
        name: "Fresh potato",
        weight: "3kg",
        discount: "5%",
        image: "/api/placeholder/52/52"
      },
      {
        name: "Fresh potato",
        weight: "3kg",
        discount: "5%",
        image: "/api/placeholder/52/52"
      },
      {
        name: "Fresh potato",
        weight: "3kg",
        discount: "5%",
        image: "/api/placeholder/52/52"
      }
    
  ];

  const handleViewAll = () => {
    navigate('/promotions/discounts');
  };

  return (
    
    <div className="bg-[#F1F1F1]  relative">

      {/* Top Navigation */}
      <div className="flex justify-end">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex items-center gap-4">
          <button className="px-8 py-2 bg-[#D2F4D6] rounded-full text-sm">All</button>
          <button className="px-8 py-2 border border-[#364A15]/20 rounded-full text-sm">Active</button>
          <button className="px-8 py-2 border border-[#364A15]/20 rounded-full text-sm">Draft</button>
          <button className="text-sm"><Filter/></button>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 pl-32 pr-96">
          {/* Header */}
          <div className="mb-8">
            <img src="/api/placeholder/121/92" alt="Logo" className="mb-4" />
            <h1 className="text-5xl font-medium text-[#364A15]/30">Promotion</h1>
          </div>

          {/* Campaign Items */}
          <CampaignItems />

          {/* Discount Schedule */}
          <DiscountSchedule />
        </div>

        {/* Right Sidebar */}
        <div className="absolute right-16 top-48">
          <h2 className="text-[#364A15] font-medium text-lg mb-4">Shop discount</h2>
          
          <div className="w-[360px] bg-white rounded-[32px] overflow-hidden p-6">
            {/* Header */}
            <div className="grid grid-cols-[120px_110px_auto] text-[#364A15] mb-4">
              <div className="text-[#364A15] text-xs font-medium">Item image</div>
              <div className="text-[#364A15] text-xs font-medium">Item name</div>
              <div className="text-[#364A15] text-xs font-medium">% of discount</div>
            </div>
            
            {/* Items */}
            <div className="flex flex-col gap-3">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl border border-[#364A15]/5 p-4">
                  <div className="grid grid-cols-[110px_130px_auto] items-center">
                    <div>
                      <img src={product.image} alt={product.name} className="w-14 h-14"/>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#364A15] text-xs">{product.name}</span>
                      <span className="text-[#364A15] text-xs">{product.weight}</span>
                    </div>
                    <span className="text-[#364A15] text-xs">{product.discount}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="mt-4">
              <button 
                onClick={handleViewAll}
                className="w-full py-3 bg-[#D2F4D6] rounded-full text-[#364A15] text-xs"
              >
                View all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionPage;
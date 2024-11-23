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
    {
        name: "Fresh potato",
        weight: "3kg",
        creator: "Halal Market ltd.",
        startDate: "02 Apr 2024",
        endDate: "16 Apr 2024",
        discount: "5%",
        image: "/api/placeholder/52/52"
      }
      ,
      {
          name: "Fresh potato",
          weight: "3kg",
          creator: "Halal Market ltd.",
          startDate: "02 Apr 2024",
          endDate: "16 Apr 2024",
          discount: "5%",
          image: "/api/placeholder/52/52"
        }
        ,
    {
        name: "Fresh potato",
        weight: "3kg",
        creator: "Halal Market ltd.",
        startDate: "02 Apr 2024",
        endDate: "16 Apr 2024",
        discount: "5%",
        image: "/api/placeholder/52/52"
      }
      ,
    {
        name: "Fresh potato",
        weight: "3kg",
        creator: "Halal Market ltd.",
        startDate: "02 Apr 2024",
        endDate: "16 Apr 2024",
        discount: "5%",
        image: "/api/placeholder/52/52"
      }
      ,
    {
        name: "Fresh potato",
        weight: "3kg",
        creator: "Halal Market ltd.",
        startDate: "02 Apr 2024",
        endDate: "16 Apr 2024",
        discount: "5%",
        image: "/api/placeholder/52/52"
      }
  ];

  const handleBack = () => {
    navigate('/promotions');
  };

  return (
    
    <div className="min-h-screen bg-[#F1F1F1] p-8">
           {/* Filter Buttons */}
      <div className="flex gap-4 mb-8 justify-end ">
        <button className="px-8 py-2 bg-[#D2F4D6] rounded-full text-sm">All</button>
        <button className="px-8 py-2 border border-[#364A15]/20 rounded-full text-sm">Active</button>
        <button className="px-8 py-2 border border-[#364A15]/20 rounded-full text-sm">Draft</button>
      </div>
        
      {/* Header */}
      <div className="mb-8">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-[#364A15] mb-4"
        >
          <ArrowLeft size={20} />
          <span>list of shop discount</span>
        </button>
        <h1 className="text-5xl font-medium text-[#364A15]/30">Promotion</h1>
      </div>

   

      {/* Table */}
      <div className="bg-white rounded-3xl p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#364A15]/10">
              <th className="text-left p-4 text-sm font-medium text-[#364A15]">Item image</th>
              <th className="text-left p-4 text-sm font-medium text-[#364A15]">Item name</th>
              <th className="text-left p-4 text-sm font-medium text-[#364A15]">Creator</th>
              <th className="text-left p-4 text-sm font-medium text-[#364A15]">Start date</th>
              <th className="text-left p-4 text-sm font-medium text-[#364A15]">End date</th>
              <th className="text-left p-4 text-sm font-medium text-[#364A15]">% of discount</th>
            </tr>
          </thead>
          <tbody>
            {discounts.map((item, index) => (
              <tr key={index} className="border-b border-[#364A15]/10">
                <td className="p-4">
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg"/>
                </td>
                <td className="p-4">
                  <div className="text-sm text-[#364A15]">{item.name}</div>
                  <div className="text-sm text-[#364A15]">{item.weight}</div>
                </td>
                <td className="p-4 text-sm text-[#364A15]">{item.creator}</td>
                <td className="p-4 text-sm text-[#364A15]">{item.startDate}</td>
                <td className="p-4 text-sm text-[#364A15]">{item.endDate}</td>
                <td className="p-4 text-sm text-[#364A15]">{item.discount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShopDiscountsExpanded;
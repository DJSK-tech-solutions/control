import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CouponDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '100 coupon',
    discountUnit: 'Amount',
    type: 'Coupons',
    status: 'Active',
    startDate: '01/04/2024',
    endDate: '30/04/2024',
    amount: '500',
    quota: '0',
    trigger: {
      type: 'MA',
      amount: '500'
    },
    couponCode: 'PC2024BUY',
    description: ''
  });

  const usageData = [
    { date: '1 Apr', value: 192 },
    { date: '2 Apr', value: 224 },
    { date: '3 Apr', value: 131 },
    { date: '4 Apr', value: 267 }
  ];

  // Calculate max value for scaling
  const maxValue = Math.max(...usageData.map(d => d.value));

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="bg-[#F1F1F1] min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleBackClick}
              className="w-[54px] h-[54px] flex items-center justify-center bg-white rounded-full"
            >
              <ChevronLeft className="w-6 h-6 text-[#5E616F]" />
            </button>
            <div className="flex items-center gap-4 bg-white rounded-3xl px-8 py-4">
              <span className="text-base text-[#364A15]">Blue Bird</span>
              <div className="bg-[#1AC84B] text-white px-3 py-1 rounded-full flex items-center gap-1">
                <span className="text-sm">Active</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
          </div>
          <button className="border border-[#364A15] rounded-full px-6 py-2 flex items-center gap-2">
            <span className="text-sm">Download report</span>
          </button>
        </div>

        {/* Rest of the component remains the same... */}
        {/* Usage Trend Card */}
        <div className="bg-white rounded-[26px] p-6">
          {/* ... */}
        </div>

        {/* Campaign Details Form */}
        <div className="bg-white rounded-[26px] p-8">
          {/* ... */}
        </div>

        {/* Sales Amount Card */}
        <div className="bg-white rounded-[26px] p-8">
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default CouponDetails;
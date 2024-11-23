import React, { useState, useRef } from 'react';
import DatePicker from './DatePickers.tsx';
import CustomDropdown from './CustomDropdown.tsx';

const NewCampaignModalPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const startCalendarRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    discountUnit: 'Percent off',
    type: 'Discount',
    amount: '',
    status: 'Draft',
    quota: '',
    trigger: {
      type: 'MA',
      amount: ''
    },
    couponCode: 'PC2024BUY',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('trigger.')) {
      const triggerField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        trigger: {
          ...prev.trigger,
          [triggerField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-2xl w-full max-w-[800px] max-h-[90vh] overflow-y-auto p-4 md:p-6">
        <h2 className="text-xl font-medium text-[#364A15] mb-6">New campaign</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-4">
          <div>
            <label className="block mb-1 text-xs text-[#364A15]">Campaign name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Summer sales"
              className="w-full h-10 md:h-8 px-3 md:px-2 text-sm md:text-xs border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#D2F4D6]"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-[#364A15]">Discount unit</label>
            <CustomDropdown
              name="discountUnit"
              value={formData.discountUnit}
              onChange={handleInputChange}
              options={['Percent off']}
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-[#364A15]">Type</label>
            <CustomDropdown
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              options={['Discount', 'Coupon']}
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-[#364A15]">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="10"
              className="w-full md:w-[120px] h-10 md:h-8 px-3 md:px-2 text-sm md:text-xs border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#D2F4D6]"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-[#364A15]">Status</label>
            <CustomDropdown
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              options={['Draft', 'Active']}
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-[#364A15]">Quota</label>
            <input
              type="number"
              name="quota"
              value={formData.quota}
              onChange={handleInputChange}
              placeholder="50000"
              className="w-full md:w-[120px] h-10 md:h-8 px-3 md:px-2 text-sm md:text-xs border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#D2F4D6]"
            />
            <p className="text-[10px] text-gray-500 mt-0.5">*Enter '0' if do not have any deal limit</p>
          </div>

          <div>
            <label className="block mb-1 text-xs text-[#364A15]">Start date</label>
            <DatePicker
              label="Start date"
              selectedDate={startDate}
              onSelect={setStartDate}
              maxDate={endDate}
              ref={startCalendarRef}
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-[#364A15]">Trigger</label>
            <div className="flex border rounded-3xl gap-2">
              <select
                name="trigger.type"
                value={formData.trigger.type}
                onChange={handleInputChange}
                className="w-1/4 h-10 md:h-8 px-3 md:px-2 text-sm md:text-xs border border-t-0 border-b-0 border-l-0 appearance-none"
              >
                <option>MA</option>
              </select>
              <input
                type="number"
                name="trigger.amount"
                value={formData.trigger.amount}
                onChange={handleInputChange}
                placeholder="0"
                className="flex-1 h-10 md:h-8 px-3 md:px-2 text-sm md:text-xs border-none focus:outline-none focus:ring-2 focus:ring-[#D2F4D6]"
              />
            </div>
            <p className="text-[10px] text-gray-500 mt-0.5">*The campaign will only be activated when the trigger amount is fulfilled.</p>
          </div>

          <div>
            <label className="block mb-1 text-xs text-[#364A15]">End date</label>
            <DatePicker
              label="End date"
              selectedDate={endDate}
              onSelect={setEndDate}
              minDate={startDate}
              onCalendarOpen={() => {
                if (startCalendarRef.current) {
                  startCalendarRef.current.closeCalendar();
                }
              }}
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-[#364A15]">Coupon code</label>
            <input
              type="text"
              name="couponCode"
              value={formData.couponCode}
              onChange={handleInputChange}
              placeholder="Enter coupon code"
              className="w-full h-10 md:h-8 px-3 md:px-2 text-sm md:text-xs border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#D2F4D6]"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 text-xs text-[#364A15]">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full md:w-[290px] h-20 p-3 md:p-2 text-sm md:text-xs border border-[#D2D2D2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D2F4D6] resize-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button className="px-4 md:px-[25px] py-2 md:py-[5px] bg-[#FBDBD9] rounded-[26px] text-sm text-[#364A15]">
            Dismiss
          </button>
          <button className="px-4 md:px-[30px] py-2 md:py-[5px] border border-[#364A15] rounded-[26px] text-sm text-[#364A15]">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCampaignModalPage;
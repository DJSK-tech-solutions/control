import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this
import DatePicker from './DatePickers.tsx';
import DatePickertwo from './DatePickerstwo.tsx';

const CustomDropdown = ({ label, value, options, name, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-[120px] h-8 px-2 text-xs border border-[#D2D2D2] rounded-[10px] 
          focus:outline-none focus:ring-2  bg-white
          ${isOpen ? 'rounded-b-none border-b-0' : ''}
          transition-all duration-200
        `}
      >
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#364A15]">{value}</span>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20"
            className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path 
              d="M5 8L10 13L15 8" 
              stroke="#364A15" 
              strokeWidth="1.5" 
              fill="none"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="
          absolute w-[120px]
          bg-white
          border border-t-0 border-[#D2D2D2] 
          rounded-b-[10px]
          z-50
        ">
          <div className="px-2 w-[120px]">
            <div className="border-t border-[#D2D2D2]" />
          </div>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onChange({ target: { name, value: option }});
                setIsOpen(false);
              }}
              className={`
                px-2 py-1.5
                text-xs
                w-[110px]
                rounded-xl
                cursor-pointer
                transition-colors duration-150
                ${value === option ? 'bg-gray-50' : ''}
              `}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const isActive = status === 'Active';
  return (
    <div className={`
      inline-flex items-center gap-1 px-2 h-6 rounded-full text-white text-xs
      ${isActive ? 'bg-[#1AC84B]' : 'bg-gray-400/60'}
    `}>
      {status}
      <div className="w-1.5 h-1.5 rounded-full bg-white"/>
    </div>
  );
};

const CampaignItems = () => {
  const navigate = useNavigate(); // Add this
  const [showModal, setShowModal] = useState(false);
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
    description: ''
  });

  const campaigns = [
    {
      name: "Blue Bird coupon",
      type: "Coupon",
      status: "Active",
      startDate: "01/04/2024",
      endDate: "10/04/2024",
      creator: "Pasar Click"
    },
  ];

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
    setShowModal(false);
  };

  // Add this function
  const handleCampaignClick = (campaign) => {
    if (campaign.name === "Blue Bird coupon") {
      navigate('/campaigns/blue-bird');
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4 w-[843px]">
        <h2 className="text-lg font-medium tracking-wide text-[#364A15]">Campaign</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-6 py-2 bg-[#D2F4D6] rounded-full text-sm text-[#364A15]"
        >
          Add
        </button>
      </div>

      <div className="w-full max-w-[843px]">
        <div className="bg-white rounded-[26px] px-[50px] py-3 mb-2.5">
          <div className="flex items-center text-[12px] text-[#364A15]">
            <div className="w-[140px]">Campaign name</div>
            <div className="w-[100px]">Type</div>
            <div className="w-[100px]">Status</div>
            <div className="w-[120px]">
              <DatePickertwo 
                label="Start date"
                selectedDate={startDate}
                onSelect={setStartDate}
                maxDate={endDate}
                ref={startCalendarRef}
              />
            </div>
            <div className="w-[120px]">
              <DatePickertwo 
                label="End date"
                selectedDate={endDate}
                onSelect={setEndDate}
                minDate={startDate}
                onCalendarOpen={() => {
                  if (startCalendarRef.current) {
                    startCalendarRef.current.closeCalendar();
                  }
                }} 
                maxDate={undefined}              
              />
            </div>
            <div className="w-[100px]">Creator</div>
          </div>
        </div>

        <div className="h-[243px] overflow-y-auto pr-1">
          <div className="flex flex-col gap-2.5">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                onClick={() => handleCampaignClick(campaign)}
                className="bg-white rounded-[26px] px-[50px] py-3.5 flex items-center min-h-[54px] cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center text-sm text-[#364A15]">
                  <div className="w-[140px] truncate pr-2">{campaign.name}</div>
                  <div className="w-[100px]">{campaign.type}</div>
                  <div className="w-[100px]"><StatusBadge status={campaign.status} /></div>
                  <div className="w-[120px]">{campaign.startDate}</div>
                  <div className="w-[120px]">{campaign.endDate}</div>
                  <div className="w-[100px]">{campaign.creator}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl w-[800px] h-[650px] p-6">
            <h2 className="text-xl font-medium text-[#364A15] mb-6">New campaign</h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <label className="block mb-1 text-xs text-[#364A15]">Campaign name</label>
                <input
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Summer sales"
                  className="w-[200px] h-8 px-2 text-xs border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#D2F4D6]"
                />
              </div>

              <div>
                <label className="block mb-1 text-xs text-[#364A15]">Discount unit</label>
                <CustomDropdown
                  name="discountUnit"
                  value={formData.discountUnit}
                  onChange={handleInputChange}
                  options={['Percent off']} 
                  label={undefined}                
                />
              </div>

              <div>
                <label className="block mb-1 text-xs text-[#364A15]">Type</label>
                <CustomDropdown
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  options={['Discount', 'Coupon']} 
                  label={undefined}                
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
                  className="w-[120px] h-8 px-2 text-xs border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#D2F4D6]"
                />
              </div>

              <div>
                <label className="block mb-1 text-xs text-[#364A15]">Status</label>
                <CustomDropdown
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  options={['Draft', 'Active']} 
                  label={undefined}                
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
                  className="w-[230px] h-8 px-2 text-xs border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#D2F4D6]"
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
                <div className="flex gap-2">
                  <select 
                    name="trigger.type"
                    value={formData.trigger.type}
                    onChange={handleInputChange}
                    className="w-20 h-8 px-2 text-xs border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#D2F4D6] appearance-none bg-white"
                  >
                    <option>MA</option>
                  </select>
                  <input
                    type="number"
                    name="trigger.amount"
                    value={formData.trigger.amount}
                    onChange={handleInputChange}
                    placeholder="0"
                    className="flex-1 h-8 px-2 text-xs border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#D2F4D6]"
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
                  maxDate={undefined}
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-1 text-xs text-[#364A15]">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-[350px] h-20 p-2 text-xs border border-[#D2D2D2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D2F4D6] resize-none"
                />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-3 py-1 border border-[#364A15] rounded-full text-xs text-[#364A15]"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-3 py-1 bg-[#D2F4D6] rounded-full text-xs text-[#364A15]"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #D4D4D4;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};

export default CampaignItems;
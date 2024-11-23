import React, { useState } from 'react';

const TimeFilterDropdown = ({ selectedTime, onTimeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeOptions = ['Week', 'Month', 'Today'];

  return (
    <div className="relative w-[99px]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full bg-white border border-[#364A15] rounded-3xl
          ${isOpen ? 'rounded-b-none border-b-0' : ''}
          transition-all duration-200
        `}
      >
        <div className="px-2.5 py-2 flex justify-between items-center">
          <span className="text-[14px] leading-6 text-[#364A15] tracking-[0.02em]">
            {selectedTime}
          </span>
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
          absolute w-full
          bg-white
          border border-t-0 border-[#364A15] 
          rounded-b-[15px]
          z-50
        ">
          <div className="px-2.5">
            <div className="border-t border-[#D2D2D2]" />
          </div>
          {timeOptions.map((time) => (
            <div
              key={time}
              onClick={() => {
                onTimeChange(time);
                setIsOpen(false);
              }}
              className={`
                px-2.5 py-2
                text-[14px] leading-6
                text-[#364A15] tracking-[0.02em]
                rounded-2xl
                cursor-pointer
                hover:bg-gray-50
                transition-colors duration-150
                ${selectedTime === time ? 'bg-gray-50' : ''}
              `}
            >
              {time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DiscountSchedule = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(21);
  const [selectedTime, setSelectedTime] = useState('Today');

  const days = [
    { day: 5, label: '' },
    { day: 6, label: '' },
    { day: 7, label: '' },
    { day: 8, label: 'Mon' },
    { day: 9, label: '' },
    { day: 10, label: '' },
    { day: 11, label: '' },
    { day: 12, label: '' },
    { day: 13, label: '' },
    { day: 14, label: '' },
    { day: 15, label: 'Mon' },
    { day: 16, label: '' },
    { day: 17, label: '' },
    { day: 18, label: '' },
    { day: 19, label: '' },
    { day: 20, label: '' },
    { day: 21, label: '' },
    { day: 22, label: 'Mon' },
    { day: 23, label: '' },
    { day: 24, label: '' },
    { day: 25, label: '' },
    { day: 26, label: '' },
    { day: 27, label: '' },
    { day: 28, label: '' },
    { day: 29, label: 'Mon' },
    { day: 30, label: '' },
    { day: 1, label: '' },
    { day: 2, label: '' },
    { day: 3, label: '' },
    { day: 4, label: '' },
    { day: 5, label: '' },
    { day: 6, label: 'Mon' }
  ];

  return (
    <div>
      <div className="px-4 md:px-6 pt-6">
        <h2 className="text-lg font-medium text-[#364A15] mb-4">Discount schedule</h2>
      </div>
      <div className="w-full lg:w-[838px] overflow-x-auto bg-white rounded-3xl">
        <div className="min-w-[838px]">
          <div className="px-4 md:px-6 pb-6 gap-[7px]">
            {/* Time Filter Dropdown */}
            <div className="flex justify-end mb-6 pt-6">
              <TimeFilterDropdown
                selectedTime={selectedTime}
                onTimeChange={setSelectedTime}
              />
            </div>

            {/* Calendar Numbers with Connected Line */}
            <div className="relative">
              <div className="border-black/50">
                <div className="flex w-full">
                  {days.map((day, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center cursor-pointer relative" 
                      style={{ width: 'calc(100% / 32)' }}
                      onClick={() => setActiveDayIndex(index)}
                    >
                      <div className={`
                        w-6 md:w-8 h-6 md:h-8 mb-1 flex items-center justify-center text-xs text-[#364A15]
                        ${index === activeDayIndex ? 'rounded-full bg-[#D2F4D6]' : ''}
                        hover:bg-[#D2F4D6]/50 rounded-full transition-colors relative
                      `}>
                        {day.day}
                        {index === activeDayIndex && (
                          <div className="absolute top-full left-1/2 w-[1px] h-[243px] bg-[#969696] -translate-x-1/2" />
                        )}
                      </div>
                      {day.label && (
                        <span className="text-[10px] text-[#7F7F7F] mb-2">
                          {day.label}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Content */}
              <div className="relative mt-8">
                <div className="relative h-[160px]">
                  {/* Blue Bird Coupon */}
                  <div className="absolute top-0 left-0 right-[30%] h-7">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#ffffff] via-[#D2F4D6] to-[#bbf1c2]">
                      <span className="absolute left-4 md:left-14 top-1/2 -translate-y-1/2 text-xs md:text-[14px] text-[#364A15]">
                        Blue Bird coupon
                      </span>
                    </div>
                  </div>

                  {/* Buy One Get One Free */}
                  <div className="absolute top-[60px] left-[40%] right-0 h-7">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#bef5c4] via-[#D2F4D6] to-transparent">
                      <span className="absolute right-4 md:right-14 top-1/2 -translate-y-1/2 text-xs md:text-[14px] text-[#364A15]">
                        Buy one get one free
                      </span>
                    </div>
                  </div>

                  {/* All Halal Goods */}
                  <div className="absolute top-[120px] left-[25%] right-[25%] h-7">
                    <div className="h-full rounded-full bg-[#D2F4D6]">
                      <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xs md:text-[14px] text-[#364A15]">
                        All Halal goods 50% off
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSchedule;
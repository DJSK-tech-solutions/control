import React, { useState } from "react";
const TimeFilterDropdown = ({ selectedTime, onTimeChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeOptions = ['Week', 'Month', 'Today'];
  
    return (
      <div className="relative w-[99px]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full bg-white border border-[#364A15] rounded-[15px]
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
  export default TimeFilterDropdown;
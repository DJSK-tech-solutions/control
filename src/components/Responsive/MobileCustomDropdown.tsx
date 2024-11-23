import React, { useState } from 'react';

const CustomDropdown = ({ value, options, name, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-[120px] h-8 px-2 text-xs border border-[#D2D2D2] rounded-[10px] 
          focus:outline-none focus:ring-2 bg-white
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

export default CustomDropdown;
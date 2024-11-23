import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const DatePicker = ({ label, selectedDate, onSelect, minDate, maxDate, onCalendarOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        const calendar = document.getElementById('calendar-dropdown');
        if (calendar && !calendar.contains(event.target) && 
            !event.target.closest('button')?.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const handleCalendarToggle = () => {
      if (!isOpen) {
        onCalendarOpen?.();
      }
      setIsOpen(!isOpen);
    };
  
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
  
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();
  
    const formatDate = (date) => {
      if (!date) return '';
      return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    };
  
    const getPreviousMonthDays = () => {
      let days = [];
      const lastDayPrevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate();
      const startingDay = (firstDayOfMonth - 1 + 7) % 7;
      for (let i = 0; i < startingDay; i++) {
        days.push(lastDayPrevMonth - startingDay + i + 1);
      }
      return days;
    };
  
    const getCurrentMonthDays = () => {
      return Array.from({ length: daysInMonth }, (_, i) => i + 1);
    };
  
    const getNextMonthDays = () => {
      const totalDaysShown = 42;
      const daysFromPrevMonth = getPreviousMonthDays().length;
      const daysFromCurrentMonth = daysInMonth;
      const remainingDays = totalDaysShown - (daysFromPrevMonth + daysFromCurrentMonth);
      return Array.from({ length: remainingDays }, (_, i) => i + 1);
    };
  
    return (
      <div className="relative border rounded-xl p-[8px] w-[120px] ">
        <button 
          onClick={handleCalendarToggle}
          className="flex items-center gap-2 text-[12px] text-[#364A15]"
        >
          {selectedDate ? formatDate(selectedDate) : label}
          <Calendar size={16} className="text-[#364A15]/50" />
        </button>
  
        {isOpen && (
          <div id="calendar-dropdown" className="absolute top-full left-0 mt-1 bg-[#F5F5F5] rounded-[6px] p-4 w-[203px] z-50 border border-white">
            <div className="flex items-center justify-between mb-4">
              <button 
                className="w-[22.83px] h-[22.83px] flex items-center justify-center bg-white rounded-full shadow-[0px_1px_1px_rgba(0,14,51,0.05)]"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
                }}
              >
                <ChevronLeft size={12} />
              </button>
  
              <div className="flex gap-2">
                <div className="px-[10px] py-[4px] bg-white rounded-[2px] text-[12.45px] font-medium">
                  {currentMonth.toLocaleString('default', { month: 'short' }).toUpperCase()}
                </div>
                <div className="px-[10px] py-[4px] bg-white rounded-[2px] text-[12.45px] font-medium">
                  {currentMonth.getFullYear()}
                </div>
              </div>
  
              <button 
                className="w-[22.83px] h-[22.83px] flex items-center justify-center bg-white rounded-full shadow-[0px_1px_1px_rgba(0,14,51,0.05)]"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
                }}
              >
                <ChevronRight size={12} />
              </button>
            </div>
  
            <div>
              <div className="grid grid-cols-7 gap-[2px] mb-[2px] text-[#364A15]">
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                  <div key={day} className="h-[23px] flex items-center justify-center text-[9.34px]">
                    {day}
                  </div>
                ))}
              </div>
  
              <div className="grid grid-cols-7 gap-[2px]">
                {getPreviousMonthDays().map((day) => (
                  <div
                    key={`prev-${day}`}
                    className="w-[23px] h-[23px] flex items-center justify-center bg-[#F5F5F5] text-[9.34px] text-[#D0D4DD] rounded-[2px]"
                  >
                    {day}
                  </div>
                ))}
  
                {getCurrentMonthDays().map((day) => {
                  const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                  const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                  const isDisabled = 
                    (minDate && date < new Date(minDate)) ||
                    (maxDate && date > new Date(maxDate));
  
                  return (
                    <button
                      key={`current-${day}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelect(date);
                        setIsOpen(false);
                      }}
                      disabled={isDisabled}
                      className={`
                        w-[23px] h-[23px] flex items-center justify-center rounded-[2px] text-[9.34px]
                        ${isSelected ? 'bg-[#364A15] text-white' : 'bg-white text-[#364A15]'}
                        ${isDisabled ? 'opacity-50' : 'hover:border-[#122e12] border '}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
  
                {getNextMonthDays().map((day) => (
                  <div
                    key={`next-${day}`}
                    className="w-[23px] h-[23px] flex items-center justify-center bg-[#F5F5F5] text-[9.34px] text-[#D0D4DD] rounded-[2px]"
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
export default DatePicker;  
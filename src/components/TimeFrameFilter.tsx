import React, { useState } from 'react';
import { Filter, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover.tsx";

const FilterIcon = () => (
  <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.0999 17.6001C35.1999 17.6001 36.0999 18.5001 36.0999 19.6001V21.8001C36.0999 22.6001 35.5999 23.6001 35.0999 24.1001L30.7999 27.9001C30.1999 28.4001 29.7999 29.4001 29.7999 30.2001V34.5001C29.7999 35.1001 29.3999 35.9001 28.8999 36.2001L27.4999 37.1001C26.1999 37.9001 24.3999 37.0001 24.3999 35.4001V30.1001C24.3999 29.4001 23.9999 28.5001 23.5999 28.0001L19.7999 24.0001C19.2999 23.5001 18.8999 22.6001 18.8999 22.0001V19.7001C18.8999 18.5001 19.7999 17.6001 20.8999 17.6001H29.8999" stroke="#364A15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M26.43 17.6001L21.5 25.5001" stroke="#364A15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const TimeframeFilter = () => {
  const [selectedYear, setSelectedYear] = useState('2023');
  const [selectedQuarter, setSelectedQuarter] = useState('Q1');
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [customDateRange, setCustomDateRange] = useState({
    from: '03/03/2023',
    to: '01/04/2023'
  });

  const years = ['2024', '2023', '2022'];
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Adjust for Monday start
  };

  // Get previous month's days that should be shown
  const getPreviousMonthDays = (year, month) => {
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const daysInPreviousMonth = getDaysInMonth(year, month - 1);
    const days = [];
    
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        day: daysInPreviousMonth - i,
        isCurrentMonth: false
      });
    }
    return days;
  };

  // Get current month's days
  const getCurrentMonthDays = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    return Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      isCurrentMonth: true
    }));
  };

  // Get next month's days that should be shown
  const getNextMonthDays = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const totalCells = 42; // 6 rows * 7 days
    const remainingCells = totalCells - (firstDayOfMonth + daysInMonth);
    
    return Array.from({ length: remainingCells }, (_, i) => ({
      day: i + 1,
      isCurrentMonth: false
    }));
  };

  // Get all days that should be shown in the calendar
  const getAllDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    return [
      ...getPreviousMonthDays(year, month),
      ...getCurrentMonthDays(year, month),
      ...getNextMonthDays(year, month)
    ];
  };

  // Handle month navigation
  const changeMonth = (increment) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + increment);
      return newDate;
    });
  };

  // Check if a date is selected
  const isDateSelected = (day, isCurrentMonth) => {
    if (!isCurrentMonth) return false;
    
    return selectedDate.getDate() === day &&
           selectedDate.getMonth() === currentDate.getMonth() &&
           selectedDate.getFullYear() === currentDate.getFullYear();
  };

  // Handle date selection
  const handleDateSelect = (day, isCurrentMonth) => {
    if (!isCurrentMonth) return;
    const newDate = new Date(currentDate);
    newDate.setDate(day);
    setSelectedDate(newDate);
    setSelectedMonth(months[newDate.getMonth()]);
  };

  const handleConfirm = () => {
    // Handle filter confirmation
  };

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <button className="px-4 py-1.5 rounded-full border border-gray-500 text-sm">
          {selectedYear}
        </button>
        <button className="px-4 py-1.5 rounded-full border border-gray-500 text-sm">
          {selectedMonth}
        </button>
        <Popover>
          <PopoverTrigger asChild>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FilterIcon className="w-4 h-4 text-gray-500" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-[320px] p-4 bg-white" align="start">
            <div className="space-y-4">
              {/* Timeframe Section */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-900">Timeframe</h3>
                <div className="flex gap-2">
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-1.5 rounded-full text-sm ${
                        selectedYear === year 
                          ? 'bg-green-50 text-green-700 ring-1 ring-green-600'
                          : 'border border-gray-500'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quarter Selection */}
              <div className="flex gap-2">
                {quarters.map(quarter => (
                  <button
                    key={quarter}
                    onClick={() => setSelectedQuarter(quarter)}
                    className={`px-4 py-1.5 rounded-full text-sm ${
                      selectedQuarter === quarter
                        ? 'bg-green-50 text-green-700 ring-1 ring-green-600'
                        : 'border border-gray-500'
                    }`}
                  >
                    {quarter}
                  </button>
                ))}
              </div>

              {/* Customize Period */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-900">Customize period</h3>
                <div className="flex gap-2">
                  <div className="relative">
                    <span className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500">
                      from
                    </span>
                    <input
                      type="text"
                      value={customDateRange.from}
                      onChange={(e) => setCustomDateRange(prev => ({ ...prev, from: e.target.value }))}
                      className="w-full px-3 py-1.5 rounded-full text-sm border border-gray-500"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500">
                      to
                    </span>
                    <input
                      type="text"
                      value={customDateRange.to}
                      onChange={(e) => setCustomDateRange(prev => ({ ...prev, to: e.target.value }))}
                      className="w-full px-3 py-1.5 rounded-full text-sm border border-gray-500"
                    />
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <button 
                    onClick={() => changeMonth(-1)}
                    className="p-1 hover:bg-green-100 rounded-full"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      {months[currentDate.getMonth()]}
                    </span>
                    <div className="bg-black text-white px-2 py-1 rounded text-sm">
                      {currentDate.getFullYear()}
                    </div>
                  </div>
                  <button 
                    onClick={() => changeMonth(1)}
                    className="p-1 hover:bg-green-100 rounded-full"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {weekDays.map(day => (
                    <div key={day} className="text-center text-xs py-1">{day}</div>
                  ))}
                  {getAllDays().map((date, index) => (
                    <div
                      key={index}
                      onClick={() => handleDateSelect(date.day, date.isCurrentMonth)}
                      className={`text-center py-1 text-sm cursor-pointer rounded
                        ${date.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
                        ${isDateSelected(date.day, date.isCurrentMonth) 
                          ? 'bg-green-200 text-green-800' 
                          : 'hover:bg-green-100'}
                      `}
                    >
                      {date.day}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleConfirm}
                className="w-full bg-green-100 text-green-700 py-2 rounded-full text-sm font-medium"
              >
                Confirm
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-500 text-sm">
        <Download className="w-4 h-4" />
        Export in CSV
      </button>
    </div>
  );
};

export default TimeframeFilter;
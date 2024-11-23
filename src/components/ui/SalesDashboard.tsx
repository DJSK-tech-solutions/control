import React, { useState } from 'react';
import { 
  ChevronDown,
  Home,
  BarChart2,
  Store,
  Users,
  FileText,
  Settings,
  HelpCircle,
  ArrowUpDown,
  Star,
  ArrowRight,
  
} from 'lucide-react';

const  CheckSquare = () => (
    <div>
      
      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.4" d="M16.625 4.71647L11.3833 1.8915C10.8333 1.5915 10.1667 1.5915 9.60833 1.8915L4.36668 4.71647C3.98335 4.9248 3.75 5.33316 3.75 5.78316C3.75 6.23316 3.98335 6.64146 4.36668 6.8498L9.60833 9.67481C9.88333 9.82481 10.1917 9.89983 10.4917 9.89983C10.7917 9.89983 11.1 9.82481 11.375 9.67481L16.6167 6.8498C17 6.64146 17.2333 6.23316 17.2333 5.78316C17.25 5.33316 17.0083 4.9248 16.625 4.71647Z" fill="#364A15"/>
  <path opacity="0.4" d="M8.74993 10.658L3.87492 8.21633C3.49992 8.02466 3.0666 8.04966 2.70826 8.26633C2.34993 8.48299 2.1416 8.86635 2.1416 9.28302V13.8913C2.1416 14.6913 2.58325 15.408 3.29992 15.7663L8.17493 18.1997C8.34159 18.283 8.52494 18.3247 8.70827 18.3247C8.92494 18.3247 9.14161 18.2664 9.33327 18.1414C9.69161 17.9247 9.89993 17.5413 9.89993 17.1247V12.5164C9.90827 11.733 9.4666 11.0163 8.74993 10.658Z" fill="#364A15"/>
  <path opacity="0.4" d="M18.8582 9.29172V13.1167C18.8499 13.1084 18.8416 13.0917 18.8332 13.0834C18.8332 13.075 18.8249 13.0667 18.8166 13.0583C18.7832 13.0083 18.7416 12.9584 18.6999 12.9167C18.6916 12.9084 18.6832 12.8917 18.6749 12.8834C17.9999 12.1334 17.0082 11.6667 15.9166 11.6667C14.8666 11.6667 13.9082 12.1 13.2249 12.8C12.5666 13.475 12.1666 14.4 12.1666 15.4167C12.1666 16.1167 12.3666 16.7834 12.7082 17.35C12.8499 17.5917 13.0249 17.8083 13.2166 18.0083L12.8249 18.2083C12.6582 18.2917 12.4749 18.3334 12.2916 18.3334C12.0749 18.3334 11.8582 18.2751 11.6582 18.1501C11.3082 17.9334 11.0916 17.55 11.0916 17.1334V12.5333C11.0916 11.7333 11.5332 11.0167 12.2499 10.6583L17.1249 8.22502C17.4999 8.03336 17.9332 8.05002 18.2916 8.27502C18.6416 8.49169 18.8582 8.87505 18.8582 9.29172Z" fill="#364A15"/>
  <path d="M18.8168 13.0586C18.1334 12.2169 17.0917 11.6836 15.9167 11.6836C15.0334 11.6836 14.2168 11.9919 13.5751 12.5086C12.7084 13.1919 12.1667 14.2503 12.1667 15.4336C12.1667 16.1336 12.3667 16.8003 12.7084 17.3669C12.9334 17.7419 13.2168 18.0669 13.5501 18.3336H13.5584C14.2001 18.8669 15.0251 19.1836 15.9167 19.1836C16.8667 19.1836 17.7251 18.8336 18.3834 18.2503C18.6751 18.0003 18.9251 17.7003 19.1251 17.3669C19.4668 16.8003 19.6667 16.1336 19.6667 15.4336C19.6667 14.5336 19.3501 13.7002 18.8168 13.0586ZM17.8001 14.9669L15.8001 16.8169C15.6834 16.9252 15.5251 16.9836 15.3751 16.9836C15.2168 16.9836 15.0584 16.9252 14.9334 16.8002L14.0084 15.8752C13.7667 15.6336 13.7667 15.2336 14.0084 14.9919C14.2501 14.7502 14.6501 14.7502 14.8917 14.9919L15.3917 15.4919L16.9501 14.0502C17.2001 13.8169 17.6001 13.8336 17.8334 14.0836C18.0751 14.3419 18.0584 14.7336 17.8001 14.9669Z" fill="#364A15"/>
  </svg>
  
    </div>
  );
const SalesDashboard = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('This week');
  
    const dates = [
      { day: '27', month: 'May', orders: 35 },
      { day: '28', month: 'May', orders: 42 },
      { day: '29', month: 'May', orders: 50 },
      { day: '30', month: 'May', orders: 38 },
      { day: '01', month: 'Jun', orders: 45 }
    ];
  
    return (
      <div className="ml-4 w-[1220px]"><h1 className="text-xl font-medium text-[#364A15] mb-6">Sales</h1>
      <div className="w-[385px] h-[406px] bg-white rounded-[26px] p-7">
        
        
        {/* Period Selector */}
        <div className="flex gap-2.5 mb-8">
          {[
            { label: 'Today', width: 'w-[100px]' },
            { label: 'This week', width: 'w-[102px]' },
            { label: 'This month', width: 'w-[109px]' }
          ].map(({ label, width }) => (
            <button
              key={label}
              onClick={() => setSelectedPeriod(label)}
              className={`
                ${width} h-10 rounded-[20px] border border-[#364A15]
                flex items-center justify-center gap-1
                ${selectedPeriod === label 
                  ? 'bg-[#D2F4D6]' 
                  : 'bg-white'
                }
              `}
            >
              {selectedPeriod === label && (
                <CheckSquare className="w-5 h-5 text-[#364A15]" />
              )}
              <span className={`
                text-xs leading-4 text-[#364A15]
                ${selectedPeriod === label ? 'font-normal' : 'font-medium'}
              `}>
                {label}
              </span>
            </button>
          ))}
        </div>
  
        {/* Graph Container */}
        <div className="h-[240px] flex items-end">
          <div className="grid grid-cols-5 gap-4 w-full h-full">
            {dates.map((date) => {
              const isActive = date.day === '29';
              const barHeight = isActive ? 'h-[180px]' : 'h-[140px]';
              
              return (
                <div key={date.day} className="flex flex-col">
                  {/* Date Display */}
                  <div className="text-center mb-3">
                    <div className={`
                      text-[20.05px] leading-[26px] font-medium
                      ${isActive ? 'text-black opacity-50' : 'text-[#7E8EAA]'}
                    `}>
                      {date.day}
                    </div>
                    <div className={`
                      text-[12.53px] leading-4 font-medium
                      ${isActive ? 'text-black opacity-50' : 'text-[#7E8EAA]'}
                    `}>
                      {date.month}
                    </div>
                  </div>
                  
                  {/* Bar Container */}
                  <div className="relative flex-1 flex items-end">
                    {isActive ? (
                      <div className="w-full h-[70%] rounded-[6.27px] relative
                                  bg-gradient-to-b from-emerald-50/80 via-mint-100/50 to-cyan-50/30
                                  shadow-[0_25px_25px_rgba(207,236,248,0.6)]">
                        <div className="absolute -bottom-8 left-0 right-0 text-center whitespace-nowrap">
                          <span className="text-[12.53px] leading-4 text-black/50">
                            + 50 Order
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/20 to-transparent rounded-[6.27px]" />
                      </div>
                    ) : (
                      <div className="w-full h-[50%] rounded-[6.27px]
                                  bg-gradient-to-b from-[#F3F5F9] to-[#E3E8F0]" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    );
  };
  export default SalesDashboard;
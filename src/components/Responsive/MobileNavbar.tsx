import React, { useState, useRef, useEffect } from 'react';
import {
    Home,
    Users,
    FileText,
    Settings,
    Mail,
    Bell,
    PieChart,
    Receipt,
    Ticket,
    ShoppingBag,
    MessageSquare,
    ArrowUpRight
  } from 'lucide-react';
  import { useNavigate } from 'react-router-dom';
  const MobileNavbar = () => {
    const scrollRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeTab, setActiveTab] = useState('home');
    const navigate = useNavigate();
    
    const navItems = [
      { icon: Home, label: 'Home', tab: 'home', onClick: () => navigate('/App') },
      { icon: PieChart, label: 'Reports', tab: 'reports', onClick: () => navigate('/Report') },
      { icon: ShoppingBag, label: 'Shop', tab: 'shop', onClick: () => navigate('/Shopownerlist') },
      { icon: Users, label: 'Users', tab: 'users', onClick: () => navigate('/Userownerlist') },
      { icon: Receipt, label: 'Invoice', tab: 'invoice', onClick: () => navigate('/Invoice') },
      { icon: Ticket, label: 'Coupon', tab: 'coupon' },
      { icon: Mail, label: 'Message', tab: 'message' },
      { icon: Bell, label: 'Notifications', tab: 'notifications' }
    ];
  
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const scrollWidth = scrollRef.current.scrollWidth;
        const clientWidth = scrollRef.current.clientWidth;
        const maxScroll = scrollWidth - clientWidth;
        const percentage = (scrollLeft / maxScroll) * 100;
        setScrollPosition(Math.min(percentage, 100));
      }
    };
  
    const handleTabClick = (tab, onClick) => {
      setActiveTab(tab);
      onClick && onClick();
    };
  
    return (
      <div className="fixed bottom-0 left-0 right-0 h-[80.4px] bg-white shadow-lg z-50">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide px-4 py-4 gap-6 relative z-20"
        >
          {navItems.map(({ icon: Icon, tab, onClick }) => (
            <div key={tab} className="relative flex-shrink-0">
              {activeTab === tab && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-transparent w-16 z-0"> 
                  <div className="relative">
                    <svg width="64" height="32" viewBox="0 0 64 32">
                      <path
                        d="M0 32C16 24 48 24 64 32V0H0v32z"
                        fill="white"
                        fillOpacity="0.9"
                      />
                    </svg>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-600 rounded-full" />
                  </div>
                </div>
              )}
  
              <button
                onClick={() => handleTabClick(tab, onClick)}
                className={`flex flex-col items-center justify-center w-12 h-12 transition-colors ${
                  activeTab === tab ? 'text-emerald-600' : 'text-gray-400'
                }`}
              >
                <Icon 
                  className="w-6 h-6" 
                  strokeWidth={activeTab === tab ? 2 : 1.5}
                />
              </button>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[275px]">
          <div className="w-full h-1.5 bg-black/25 rounded-full">
            <div 
              className="w-[101px] h-full bg-emerald-600 border border-[#2F2F2F] rounded-full transition-all duration-300"
              style={{ 
                transform: `translateX(${Math.min(scrollPosition * 1.74, 174)}px)` 
              }}
            />
          </div>
        </div>
      </div>
    );
  };
  export default MobileNavbar;
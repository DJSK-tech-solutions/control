import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  MessageSquare
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const navigate = useNavigate();

  const sidebarItems = [
    { icon: <Home className="w-5 h-5 text-emerald-600" />, label: 'Home', tab: 'home', onClick: () => navigate('/App') },
    { icon: <PieChart className="w-5 h-5 text-emerald-600" />, label: 'Reports', tab: 'reports', onClick: () => navigate('/Report') },
    { icon: <ShoppingBag className="w-5 h-5 text-emerald-600" />, label: 'Shop', tab: 'Shop', onClick: () => navigate('/Shopownerlist') },
    { icon: <Users className="w-5 h-5 text-emerald-600" />, label: 'Users', tab: 'users', onClick: () => navigate('/Userownerlist') },
    { icon: <Receipt className="w-5 h-5 text-emerald-600" />, label: 'Invoice', tab: 'invoice', onClick: () => navigate('/Invoice') },
    { icon: <Ticket className="w-5 h-5 text-emerald-600" />, label: 'Coupon', tab: 'coupon', onClick: () => navigate('/Promotionpage')  },
    { icon: <Mail className="w-5 h-5 text-emerald-600" />, label: 'Message', tab: 'message' },
    { icon: <Bell className="w-5 h-5 text-emerald-600" />, label: 'Notifications', tab: 'notifications' },
  ];

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-sm h-full transition-all duration-300 z-50 ${isSidebarExpanded ? 'w-64 opacity-90' : 'w-20'}`}
        onMouseEnter={() => setIsSidebarExpanded(true)}
        onMouseLeave={() => setIsSidebarExpanded(false)}
      >
        <div className="flex flex-col py-4">
          <div className="flex justify-center mb-9">
            <img src="/images/logo.png" alt="Logo" className="h-12" />
          </div>
          <nav className="flex flex-col space-y-2 px-1">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors rounded-xl ${activeTab === item.tab ? 'bg-emerald-50' : ''}`}
                onClick={() => {
                  setActiveTab(item.tab);
                  if (item.onClick) {
                    item.onClick();
                  }
                }}
              >
                <div className={`p-3 rounded-full flex items-center justify-center ${activeTab === item.tab ? 'bg-emerald-100' : 'bg-white'}`}>
                  {item.icon}
                </div>
                {isSidebarExpanded && <span>{item.label}</span>}
              </button>
            ))}
          </nav>
          <div className="mt-auto px-4">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full ring-2 ring-emerald-100/50 cursor-pointer"
              onClick={() => navigate('/Profile')}
            />
          </div>
        </div>
      </div>
      <div className="mt-16">
        {/* Main content goes here */}
      </div>
    </>
  );
};

export default Sidebar;

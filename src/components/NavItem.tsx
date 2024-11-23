// src/components/NavItem.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  Icon: LucideIcon;
  isActive?: boolean;
  hasNotification?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ Icon, isActive, hasNotification }) => (
  <div className="relative">
    <button 
      className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors
        ${isActive ? 'bg-green-50' : 'hover:bg-gray-50'}`}
    >
      <Icon className={`w-5 h-5 ${isActive ? 'text-green-600' : 'text-gray-400'}`} />
    </button>
    {hasNotification && (
      <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white" />
    )}
  </div>
);
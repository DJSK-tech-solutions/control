// src/components/UserRow.tsx
import React from 'react';
import { Copy, Settings, MoreHorizontal } from 'lucide-react';

interface User {
  name: string;
  email: string;
  role: string;
  gender: string;
  access: string;
  joinedDate: string;
  status: string;
}

interface UserRowProps {
  user: User;
}

export const UserRow: React.FC<UserRowProps> = ({ user }) => (
  <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
    <td className="py-4 px-6">
      <div className="flex items-center gap-3">
        <img src="/api/placeholder/40/40" alt={user.name} className="w-10 h-10 rounded-full" />
        <div>
          <div className="font-medium text-gray-900">{user.name}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>
      </div>
    </td>
    <td className="py-4 px-6">
      <span className={`px-3 py-1 rounded-full text-sm font-medium
        ${user.role === 'Vendor' ? 'bg-green-50 text-green-700' :
          user.role === 'Consumer' ? 'bg-red-50 text-red-700' :
          'bg-blue-50 text-blue-700'}`}>
        {user.role}
      </span>
    </td>
    <td className="py-4 px-6 text-gray-600">{user.gender}</td>
    <td className="py-4 px-6 text-gray-600">{user.access}</td>
    <td className="py-4 px-6 text-gray-600">{user.joinedDate}</td>
    <td className="py-4 px-6">
      <span className={`px-3 py-1 rounded-full text-sm font-medium
        ${user.status === 'Active' 
          ? 'bg-green-50 text-green-700' 
          : 'bg-gray-100 text-gray-600'}`}>
        {user.status}
      </span>
    </td>
    <td className="py-4 px-6">
      <div className="flex gap-2 justify-end">
        {[Copy, Settings, MoreHorizontal].map((Icon, index) => (
          <button 
            key={index}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Icon className="w-4 h-4 text-gray-600" />
          </button>
        ))}
      </div>
    </td>
  </tr>
);
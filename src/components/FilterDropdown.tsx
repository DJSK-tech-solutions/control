import React from 'react';

const FilterDropdown = ({ isOpen, onClose, onFilterChange, activeFilter }) => {
  if (!isOpen) return null;

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'inactive', label: 'Inactive' },
    { id: 'verified', label: 'Verified' },
    { id: 'nonverified', label: 'Nonverified' }
  ];

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-500 z-50">
      <div className="p-4 space-y-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              activeFilter === filter.id
                ? 'bg-green-50 text-green-800'
                : 'text-green-800 hover:bg-gray-50'
            }`}
            onClick={() => {
              onFilterChange(filter.id);
              onClose();
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;
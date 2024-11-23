import React from 'react';
import { X } from 'lucide-react';

const AddItemModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-3xl">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg relative">
        <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none"></div>
        <div className="relative z-10 flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium text-gray-900">Add Item</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>
        {/* Rest of the modal content */}
      </div>
    </div>
  );
};

export default AddItemModal;
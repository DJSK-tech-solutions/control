import React from 'react';

const ConfirmationDialog = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-lg font-medium mb-4">Confirmation of account removal</h2>
        <p className="mb-6">
          Are you sure you want to delete your store owner page? Deleting your page will remove all associated information, including product listings, reviews, and store details. This action cannot be undone. If you're certain you want to proceed, please confirm your decision below.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={onConfirm}
          >
            Confirm and Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
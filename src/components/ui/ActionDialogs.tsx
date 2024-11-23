import React, { useState } from 'react';

const ActionDialog = ({ isOpen, onClose, onConfirm, type }) => {
  const [showRejectionForm, setShowRejectionForm] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  if (!isOpen) return null;

  const content = {
    remove: {
      title: showRejectionForm ? "Write a comment for Rejection" : "Confirmation of account removal",
      text: "Are you sure you want to delete your store owner page? Deleting your page will remove all associated information, including product listings, reviews, and store details. This action cannot be undone. If you're certain you want to proceed, please confirm your decision below.",
      confirmText: "Confirm and Remove",
    },
    verify: {
      title: "Confirmation of account verification", 
      text: "Are you sure you want to verify your store owner page? By verifying your page, you confirm that all provided information is accurate and compliant with our policies. This will make your store eligible for additional features and visibility.",
      confirmText: "Confirm and Verify",
    }
  };

  const dialogContent = content[type];

  const handleConfirm = () => {
    if (type === 'remove') {
      setShowRejectionForm(true);
    } else {
      onConfirm();
      onClose();
    }
  };

  const handleSendRejection = () => {
    if (rejectionReason.trim()) {
      console.log('Rejection reason:', rejectionReason);
      onConfirm();
      onClose();
    }
  };

  const buttonStyles = {
    base: "w-48 h-12 rounded-full hover:bg-opacity-90 transition-colors",
    cancel: "bg-white text-gray-700 border border-gray-200",
    confirm: "bg-green-50 text-green-700",
  };

  const handleClose = () => {
    setShowRejectionForm(false);
    setRejectionReason('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[915px] h-[506px] rounded-3xl">
        {type === 'remove' && showRejectionForm ? (
          <div className="flex flex-col h-full p-12">
            <h2 className="text-2xl font-medium text-[#364A15] text-center mb-12">
              Write a comment for Rejection
            </h2>
            
            <div className="flex-1">
              <div className="text-left text-[#364A15] text-lg mb-2">Reason :</div>
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="Write your reason"
                className="w-full h-48 p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div className="flex gap-16 justify-center mt-12">
              <button onClick={handleClose} className={`${buttonStyles.base} ${buttonStyles.cancel}`}>
                Cancel
              </button>
              <button onClick={handleSendRejection} className={`${buttonStyles.base} ${buttonStyles.confirm}`}>
                Send
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-medium text-[#364A15] mb-8">
              {dialogContent.title}
            </h2>
            
            <p className="text-gray-600 text-base max-w-[850px] mb-16 text-center">
              {dialogContent.text}
            </p>

            <div className="flex gap-16">
              <button onClick={handleClose} className={`${buttonStyles.base} ${buttonStyles.cancel}`}>
                Cancel
              </button>
              <button onClick={handleConfirm} className={`${buttonStyles.base} ${buttonStyles.confirm}`}>
                {dialogContent.confirmText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionDialog;
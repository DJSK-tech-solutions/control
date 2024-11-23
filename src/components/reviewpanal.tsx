import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Sidebar from './sidebar.tsx';

const ReviewPanel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { invoiceData, items } = location.state || {};
  const [activeTab, setActiveTab] = useState('invoice');
  const handleBack = () => {
    navigate('/CreateInvoice');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col h-screen ml-16 ">
        {/* Header */}
        <div className="bg-gray-200 p-6 ">
          <h1 className="text-4xl font-medium text-[#364A154D] mb-6">Review Invoice</h1>
          <button 
            className="flex items-center text-gray-600" 
            onClick={handleBack}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="ml-2">Back to Edit</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 ">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 border border-gray-500">
            {/* Company Info */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex gap-4">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-12"
                />
                <div>
                  <div className="text-sm text-gray-600">www.pasarclick.com</div>
                  <div className="text-sm text-gray-600">pasar.click@gmail.com</div>
                  <div className="text-sm text-gray-600">+91 00000 00000</div>
                </div>
              </div>
              <div className="text-right text-sm text-gray-600">
                <div>Business address</div>
                <div>City, State, IN - 000</div>
                <div>TAX ID 00XXXXX123</div>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
            <div className='grid grid-cols-3 grid-rows-2'>
                          <div>
                            <div className="text-gray-600 mb-6">Billed to</div>
                            <div className="font-medium mt-2">{invoiceData.accountName}</div>
                            <div className="text-xs text-gray-600">
                              JA, 64 street<br />
                              Malaysia, 024055<br />
                              +0 (000) 123-4567
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-6">Invoice number</div>
                            <div className="text-sl font-bold">{invoiceData.invoiceNumber}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-gray-600 mb-6">Invoice amount</div>
                            <div className="text-3xl font-bold text-green-600">$400.00</div>
                          </div>
                          <div></div>
                          <div>
                            <div className="text-gray-600 mb-6">Issue Date</div>
                            <div className="text-sl font-bold">{invoiceData.issueDate}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-gray-600 mb-6">Delivery Date</div>
                            <div className="text-sl font-bold">{invoiceData.deliveryDate}</div>
                          </div>

                        </div>

              {/* Items Table */}
              <table className="w-full text-sm mb-6">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-left">Item Detail</th>
                    <th className="py-2 text-center">QTY</th>
                    <th className="py-2 text-right">Rate</th>
                    <th className="py-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {items?.map((item, index) => (
                    <tr key={index}>
                      <td className="py-3">{item.name}</td>
                      <td className="py-3 text-center">{item.qty}</td>
                      <td className="py-3 text-right">${item.unitPrice.toFixed(2)}</td>
                      <td className="py-3 text-right">${item.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Totals */}
              <div className="flex justify-end mb-8">
                <div className="w-48">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Subtotal</span>
                    <span>$476.00</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Discount</span>
                    <span>-$76.00</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$400.00</span>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="border-t border-gray-300 pt-4">
                <div className="mb-4">Thanks for the business.</div>
                <div className="text-sm">
                  <div className="font-medium mb-1">Terms & Conditions</div>
                  <div className="text-gray-600">
                    Please pay within 15 days of receiving this invoice.
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end mt-8 space-x-4">
              <button 
                className="px-6 py-2 border rounded-full border-black"
                onClick={handleBack}
              >
                Back to Edit
              </button>
              <button className="px-6 py-2 bg-green-100 text-black rounded-full">
                Confirm & Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPanel;
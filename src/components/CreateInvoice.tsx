import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import Sidebar from './sidebar.tsx';

const CreateInvoice = () => {
  const navigate = useNavigate();

  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: '#23542',
    subject: 'Order_invoice_HKIu02',
    accountName: 'Ho Kam Men',
    issueDate: '01 Apr 2024',
    deliveryDate: '02 Apr 2024',
    tag: 'Order invoice',
    status: 'Paid',
    group: 'End user',
    currency: 'MYR',
    billingStreet: 'Monthly invoice',
    billingCode: 'Monthly invoice',
    billingCity: 'Monthly invoice',
    billingCountry: 'Monthly invoice',
    companyInfo: {
      website: 'www.pasarclick.com',
      email: 'pasar.click@gmail.com',
      phone: '+91 00000 00000',
      address: 'Business address',
      cityState: 'City, State, IN - 000',
      taxId: 'TAX ID 00XXXXX123'
    }
  });

  const [items, setItems] = useState([
    { name: 'Halal Meat Hut', qty: 1, unitPrice: 428.00, amount: 428.00 },
    { name: 'Potato Hut', qty: 1, unitPrice: 48.00, amount: 48.00 }
  ]);

  const [activeTab, setActiveTab] = useState('invoice');
  const [showPreview, setShowPreview] = useState(true);

  const handleBack = () => {
    navigate('/');
  };

  const handleSave = () => {
    // Handle save logic here
    navigate('/');
  };

  const handleReviewInvoice = () => {
    navigate('/ReviewPanel', {
      state: {
        invoiceData,
        items
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col h-screen ml-16">
        {/* Header with Logo */}
        <div className="bg-gray-200 p-6">
          <h1 className="text-4xl font-medium text-[#364A154D] mb-6">Invoice</h1>
          <button
            className="flex items-center text-gray-600"
            onClick={handleBack}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="ml-2">Create/Edit invoice</span>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="p-4 flex justify-end space-x-2">
            <button
              className="px-4 py-2 text-sm border-2 rounded-3xl bg-white border-gray-500"
              onClick={() => setShowPreview(!showPreview)}
            >
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
            <button
              className="px-4 py-2 text-sm bg-[#D2F4D6] text-green-600 rounded-full border border-gray-700"
              onClick={handleReviewInvoice}
            >
              Review Invoice
            </button>
          </div>
          <div className="grid grid-cols-2">
            {/* Main Form */}
            <div className={`span-1 bg-white rounded-xl border border-gray-500 ${showPreview ? 'mr-6' : ''} p-6`}>
              {/* Invoice Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Invoice number</label>
                  <input
                    type="text"
                    value={invoiceData.invoiceNumber}
                    className="w-4/5 p-2 border rounded-xl bg-gray-50"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Subject</label>
                  <input
                    type="text"
                    value={invoiceData.subject}
                    className="w-4/5 p-2 border rounded-xl bg-gray-50"
                    readOnly
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm text-gray-600 mb-1">Account name</label>
                  <input
                    type="text"
                    value={invoiceData.accountName}
                    className="w-100 p-2 border rounded-xl bg-gray-50"
                    readOnly
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm text-gray-600 mb-1">Issue date</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={invoiceData.issueDate}
                      className="w-4/5 p-2 pr-8 border rounded-xl bg-gray-50"
                      readOnly
                    />
                    <svg
                      className="absolute right-1/4 top-1/2 -translate-y-1/2 pointer-events-none"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.5 6.75C1.5 5.3355 1.5 4.629 1.9395 4.1895C2.379 3.75 3.0855 3.75 4.5 3.75H13.5C14.9145 3.75 15.621 3.75 16.0605 4.1895C16.5 4.629 16.5 5.3355 16.5 6.75C16.5 7.10325 16.5 7.28025 16.3905 7.3905C16.2802 7.5 16.1025 7.5 15.75 7.5H2.25C1.89675 7.5 1.71975 7.5 1.6095 7.3905C1.5 7.28025 1.5 7.1025 1.5 6.75ZM1.5 13.5C1.5 14.9145 1.5 15.621 1.9395 16.0605C2.379 16.5 3.0855 16.5 4.5 16.5H13.5C14.9145 16.5 15.621 16.5 16.0605 16.0605C16.5 15.621 16.5 14.9145 16.5 13.5V9.75C16.5 9.39675 16.5 9.21975 16.3905 9.1095C16.2802 9 16.1025 9 15.75 9H2.25C1.89675 9 1.71975 9 1.6095 9.1095C1.5 9.21975 1.5 9.3975 1.5 9.75V13.5Z" fill="#364A15" fillOpacity="0.5" />
                      <path d="M5.25 2.25V4.5M12.75 2.25V4.5" stroke="#364A15" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm text-gray-600 mb-1">Delivery date</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={invoiceData.deliveryDate}
                      className="w-4/5  p-2 pr-10 border rounded-xl bg-gray-50"
                      readOnly
                    />
                    <svg
                      className="absolute right-1/4 top-1/2 -translate-y-1/2"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.5 6.75C1.5 5.3355 1.5 4.629 1.9395 4.1895C2.379 3.75 3.0855 3.75 4.5 3.75H13.5C14.9145 3.75 15.621 3.75 16.0605 4.1895C16.5 4.629 16.5 5.3355 16.5 6.75C16.5 7.10325 16.5 7.28025 16.3905 7.3905C16.2802 7.5 16.1025 7.5 15.75 7.5H2.25C1.89675 7.5 1.71975 7.5 1.6095 7.3905C1.5 7.28025 1.5 7.1025 1.5 6.75ZM1.5 13.5C1.5 14.9145 1.5 15.621 1.9395 16.0605C2.379 16.5 3.0855 16.5 4.5 16.5H13.5C14.9145 16.5 15.621 16.5 16.0605 16.0605C16.5 15.621 16.5 14.9145 16.5 13.5V9.75C16.5 9.39675 16.5 9.21975 16.3905 9.1095C16.2802 9 16.1025 9 15.75 9H2.25C1.89675 9 1.71975 9 1.6095 9.1095C1.5 9.21975 1.5 9.3975 1.5 9.75V13.5Z" fill="#364A15" fillOpacity="0.5" />
                      <path d="M5.25 2.25V4.5M12.75 2.25V4.5" stroke="#364A15" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="col-span-2 grid grid-cols-3 gap-4">
                  <div className="relative">
                    <label className="block text-sm text-gray-600 mb-1">Tag</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={invoiceData.tag}
                        className="w-48 p-2 pr-10 border rounded-xl bg-gray-50"
                        readOnly
                      />
                      <ChevronDown className="absolute left-1/2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm text-gray-600 mb-1">Status</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={invoiceData.status}
                        className="w-28 p-2 pr-10 border rounded-xl bg-gray-50"
                        readOnly
                      />
                      <ChevronDown className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm text-gray-600 mb-1">Group</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={invoiceData.group}
                        className="w-32 p-2 pr-10 border rounded-xl bg-gray-50"
                        readOnly
                      />
                      <ChevronDown className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm text-gray-600 mb-1">Currency</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={invoiceData.currency}
                      className="w-28 p-2 pr-10 border rounded-xl bg-gray-50"
                      readOnly
                    />
                    <ChevronDown className="absolute left-20 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Billing Street</label>
                  <input
                    type="text"
                    value={invoiceData.billingStreet}
                    className="w-1/2 p-2 border rounded-xl bg-gray-50"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Billing Code</label>
                  <input
                    type="text"
                    value={invoiceData.billingCode}
                    className="w-1/2 p-2 border rounded-xl bg-gray-50"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Billing City</label>
                  <input
                    type="text"
                    value={invoiceData.billingCity}
                    className="w-1/2 p-2 border rounded-xl bg-gray-50"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Billing Country</label>
                  <input
                    type="text"
                    value={invoiceData.billingCountry}
                    className="w-1/2 p-2 border rounded-xl bg-gray-50"
                    readOnly
                  />
                </div>
              </div>

              {/* Invoiced Items */}
              <div className="mt-8">
                <h3 className="font-bold mb-4">Invoiced Item</h3>
                <div className=" border border-white border-b-black">
                  <div className="grid grid-cols-4 gap-4 bg-green-100 p-3 border-2 rounded-3xl">
                    <div>Name</div>
                    <div>Qty</div>
                    <div>Unit Price</div>
                    <div>Amount</div>
                  </div>
                  <div className="p-3">
                    {items.map((item, index) => (
                      <div key={index} className="grid grid-cols-4 gap-4 py-2">
                        <div>{item.name}</div>
                        <div>{item.qty}</div>
                        <div>${item.unitPrice.toFixed(2)}</div>
                        <div>${item.amount.toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <div className="w-48 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>$476.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount</span>
                      <span>$76.00</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>$400.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  className="px-6 py-2 border rounded-full border-black"
                  onClick={handleBack}
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-2 bg-green-100 text-black-600 rounded-full"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>

            {/* Preview Section */}
            {showPreview && (
              <div className="span-1">
                <div className="bg-gray-200 rounded-2xl border border-gray-200">
                  <div className="p-3 border border-black rounded-2xl">
                    <div className="p-6 bg-white rounded-xl">
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex gap-4">
                          <img
                            src="/images/logo.png"
                            alt="Logo"
                            className=" h-12 rounded"
                          />
                          <div>
                            <div className="text-xs text-gray-600">{invoiceData.companyInfo.website}</div>
                            <div className="text-xs text-gray-600">{invoiceData.companyInfo.email}</div>
                            <div className="text-xs text-gray-600">{invoiceData.companyInfo.phone}</div>
                          </div>
                        </div>
                        <div className="text-right text-xs text-gray-600">
                          <div>{invoiceData.companyInfo.address}</div>
                          <div>{invoiceData.companyInfo.cityState}</div>
                          <div>{invoiceData.companyInfo.taxId}</div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-400">
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
                            {items.map((item, index) => (
                              <tr key={index}>
                                <td className="py-3">{item.name}</td>
                                <td className="py-3 text-center">{item.qty}</td>
                                <td className="py-3 text-right">${item.unitPrice.toFixed(2)}</td>
                                <td className="py-3 text-right">${item.amount.toFixed(2)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

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
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
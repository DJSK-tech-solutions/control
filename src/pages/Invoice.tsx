import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import Sidebar from '../components/sidebar.tsx';
import TimeframeFilterInvoice from '../components/TimeFramefilterinvoice.tsx';

interface Invoice {
  id: string;
  date: string;
  account: string;
  total: string;
  subject: string;
  tag: string;
  status: string;
  month?: string;
}

const InvoicePage = () => {
  const navigate = useNavigate();
  const [activeGroup, setActiveGroup] = useState('Vendors');
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterYear, setFilterYear] = useState('2023');
  const [filterCustomizePeriod, setFilterCustomizePeriod] = useState({ from: '03/03/2023', to: '01/04/2023' });
  const [filterStatus, setFilterStatus] = useState('Paid');
  const [filterTag, setFilterTag] = useState('Order invoice');
  const [selectedMonth, setSelectedMonth] = useState('Month 2024');
  const [activeTab, setActiveTab] = useState('invoice');

  const vendorData: Invoice[] = [
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Halal supermarket ltd.",
      total: "$8400.00",
      subject: "Mar invoice_HSL",
      tag: "Monthly invoice",
      status: "Draft",
      month: "March, 2024"
    },
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Halal supermarket ltd.",
      total: "$8400.00",
      subject: "Mar invoice_HSL",
      tag: "Monthly invoice",
      status: "Paid"
    },
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Halal supermarket ltd.",
      total: "$8400.00",
      subject: "Mar invoice_HSL",
      tag: "Monthly invoice",
      status: "Paid"
    },
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Halal supermarket ltd.",
      total: "$8400.00",
      subject: "Mar invoice_HSL",
      tag: "Monthly invoice",
      status: "Paid",
      month: "February, 2024"
    },
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Halal supermarket ltd.",
      total: "$8400.00",
      subject: "Mar invoice_HSL",
      tag: "Monthly invoice",
      status: "Paid"
    },
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Halal supermarket ltd.",
      total: "$8400.00",
      subject: "Mar invoice_HSL",
      tag: "Monthly invoice",
      status: "Paid"
    },
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Halal supermarket ltd.",
      total: "$8400.00",
      subject: "Mar invoice_HSL",
      tag: "Monthly invoice",
      status: "Paid"
    }
  ];

  const endUserData: Invoice[] = [
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Peter Andrew",
      total: "$8400.00",
      subject: "Invoice_PA",
      tag: "Order Invoice",
      status: "Paid",
      month: "March, 2024"
    },
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Ho Kim Wei",
      total: "$8400.00",
      subject: "Invoice_HKW2022",
      tag: "Order Invoice",
      status: "Paid"
    },
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Max Ho",
      total: "$8400.00",
      subject: "Invoice_MaxoH",
      tag: "Order Invoice",
      status: "Paid"
    },
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Will Gate",
      total: "$8400.00",
      subject: "Invoice_WGat12",
      tag: "Order Invoice",
      status: "Paid",
      month: "February, 2024"
    },
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Ho Kim Wei",
      total: "$8400.00",
      subject: "Invoice_HKW2021",
      tag: "Order Invoice",
      status: "Paid"
    },
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Chuah Vetea",
      total: "$8400.00",
      subject: "Invoice_ChVt87",
      tag: "Order Invoice",
      status: "Paid"
    },
    {
      id: "#23542",
      date: "04 Mar 2024",
      account: "Battas",
      total: "$8400.00",
      subject: "Invoice_bGT1",
      tag: "Order Invoice",
      status: "Paid"
    }
  ];

  const months = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleFilterToggle = () => {
    setShowFilterModal(!showFilterModal);
  };

  const handleFilterYear = (year: string) => {
    setFilterYear(year);
  };

  const handleFilterCustomizePeriod = (from: string, to: string) => {
    setFilterCustomizePeriod({ from, to });
  };

  const handleFilterStatus = (status: string) => {
    setFilterStatus(status);
  };

  const handleFilterTag = (tag: string) => {
    setFilterTag(tag);
  };

  const handleApplyFilter = () => {
    setShowFilterModal(false);
  };

  const handleCreateNew = () => {
    navigate('/CreateInvoice');
  };

  const currentData = activeGroup === 'Vendors' ? vendorData : endUserData;

  function handleDownload(id: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-8 mt-16">
            <h1 className="text-4xl font-medium text-[#364A154D] mb-6">Invoice</h1>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-medium text-[#364A15] mb-6">Group</div>
                <div className="flex gap-3 items-center">
                  <button
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border ${activeGroup === 'Vendors'
                      ? 'bg-green-50 text-green-600 border-green-600'
                      : 'bg-white text-gray-600 border-[#364A15]'
                      }`}
                    onClick={() => setActiveGroup('Vendors')}
                  >
                    Vendors
                  </button>
                  <button
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border ${activeGroup === 'End Users'
                      ? 'bg-green-50 text-green-600 border-green-600'
                      : 'bg-white text-gray-600 border-[#364A15]'
                      }`}
                    onClick={() => setActiveGroup('End Users')}
                  >
                    EndUsers
                  </button>
                  <TimeframeFilterInvoice />
                </div>
              </div>

              <button
                className="px-4 py-1.5 rounded-full bg-[#D2F4D6] text-[#364A15]-600 hover:bg-green-100 text-sm mr-[83px]"
                onClick={handleCreateNew}
              >
                Create New
              </button>
            </div>
          </header>

          {/* Updated Table */}
          <div className="bg-white rounded-lg w-[1214px] h-[62px]">
            {/* Updated Table Header */}
            <div className="grid grid-cols-8 gap-4 px-6 py-4 border-b border-gray-200 bg-gray-50 text-[#2F2F2F]">
              <div className="text-sm font-medium">Invoice ID</div>
              <div className="text-sm font-medium">Issue date</div>
              <div className="text-sm font-medium">Account name</div>
              <div className="text-sm font-medium">Grand total</div>
              <div className="text-sm font-medium">Subject</div>
              <div className="text-sm font-medium">Tag</div>
              <div className="text-sm font-medium">Status</div>
              <div className="text-sm font-medium"></div>
            </div>

            {/* Updated Table Body */}
            <div className=" w-[1214px] h-[296px]">
              {currentData.map((invoice, index) => (
                <div
                  key={invoice.id + index}
                  className={`bg-gray-50 p-4 text-[#2F2F2F] ${selectedInvoice === invoice.id ? '' : ''}`}
                  onClick={() => setSelectedInvoice(invoice.id)}
                >
                  {invoice.month && (
                    <div className="px-6 py-3 bg-gray-50 text-[#2F2F2F] font-medium text-sm mb-4">
                      {invoice.month}
                    </div>
                  )}
                  <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="grid grid-cols-8 gap-4 items-center">
                      <div className="text-sm">{invoice.id}</div>
                      <div className="text-sm">{invoice.date}</div>
                      <div className="text-sm">{invoice.account}</div>
                      <div className="text-sm">{invoice.total}</div>
                      <div className="text-sm">{invoice.subject}</div>
                      <div className="text-sm">{invoice.tag}</div>
                      <div className="text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${invoice.status === 'Paid'
                              ? 'bg-green-100 text-green-600'
                              : 'bg-yellow-100 text-yellow-600'
                            }`}
                        >
                          {invoice.status}
                        </span>
                      </div>
                      <div className="text-sm">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(invoice.id);
                          }}
                          className="p-2 hover:bg-gray-100 rounded-full"
                        >
                          <Download className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-30" onClick={handleFilterToggle} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg p-6 w-[380px] h-[600px] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Filter</h2>
              <button onClick={handleFilterToggle} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Input */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by keyword"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-2xl pl-10"
                />
                <svg
                  className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Year Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <div className="flex gap-2">
                {['2024', '2023', '2022'].map((year) => (
                  <button
                    key={year}
                    onClick={() => handleFilterYear(year)}
                    className={`flex-1 px-4 py-1.5 rounded-full text-sm ${filterYear === year
                      ? 'bg-green-50 text-green-600 border-2 border-green-600'
                      : 'bg-white text-gray-600 border-2 border-gray-300'
                      }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Customize Period */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Customize period</label>
              <div className="flex gap-2">
                <div className="flex-1">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">From </span>
                    <input
                      type="text"
                      value={filterCustomizePeriod.from}
                      onChange={(e) => handleFilterCustomizePeriod(e.target.value, filterCustomizePeriod.to)}
                      className="w-full pl-16 pr-4 py-2 border border-gray-600 rounded-3xl border-1 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">To </span>
                    <input
                      type="text"
                      value={filterCustomizePeriod.to}
                      onChange={(e) => handleFilterCustomizePeriod(filterCustomizePeriod.from, e.target.value)}
                      className="w-full pl-16 pr-4 py-2 border border-gray-600 rounded-3xl border-1 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200"
                      placeholder="to"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="mb-6 bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <ChevronLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
                <span className="text-sm font-medium">{selectedMonth}</span>
                <ChevronRight className="w-5 h-5 text-gray-600 cursor-pointer" />
              </div>

              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {months.map((day) => (
                  <div key={day} className="text-xs text-gray-500">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {days.map((day) => (
                  <button
                    key={day}
                    className="p-1 text-sm hover:bg-green-100 rounded-full"
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <div className="flex space-x-1">
                {['Draft', 'Paid'].map((status) => (
                  <button
                    key={status}
                    onClick={() => handleFilterStatus(status)}
                    className={`w-32 px-4 py-1.5 rounded-full text-sm border-2 border-gray-500 rounded-3xl ${filterStatus === status
                      ? 'bg-green-200 text-green-600'
                      : 'bg-white text-gray-600'
                      }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Tag Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Tag</label>
              <select
                value={filterTag}
                onChange={(e) => handleFilterTag(e.target.value)}
                className="w-40 pr-4 py-2 border border-gray-200 rounded-3xl border-1 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200"
              >
                <option value="Order invoice">Order invoice</option>
                <option value="Monthly invoice">Monthly invoice</option>
              </select>
            </div>

            {/* Confirm Button */}
            <div className="flex justify-center">
              <button
                onClick={handleApplyFilter}
                className="w-32 py-2 bg-green-200 text-green-600 rounded-3xl hover:bg-green-100 font-medium mx-auto flex items-center justify-center border-2"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoicePage;
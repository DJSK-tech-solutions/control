import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/card.tsx';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Tooltip } from 'recharts';
import { ArrowUpRight, Bell, ChevronRight, ChevronLeft, Link2, Package, Users, ChevronDown } from 'lucide-react';
import Sidebar from './components/sidebar.tsx';
import './globals.css';

const chartData = [
  { name: 'jan', value: 200000, secondValue: 150000 },
  { name: 'feb', value: 310000, secondValue: 250000 },
  { name: 'mar', value: 245000, secondValue: 220000 },
  { name: 'apr', value: 250000, secondValue: 210000 },
  { name: 'may', value: 206550.35, secondValue: 166550.35 },
  { name: 'jun', value: 221550.35, secondValue: 201550.35 },
  { name: 'jul', value: 250000, secondValue: 300000 },
  { name: 'aug', value: 280000, secondValue: 230000 },
  { name: 'sep', value: 300000, secondValue: 200000 },
  { name: 'oct', value: 300000, secondValue: 200000 },
  { name: 'nov', value: 300000, secondValue: 200000 },
  { name: 'dec', value: 300000, secondValue: 200000 }
];

const ChartBackground = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 737 469" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 0 }}>
    <g clipPath="url(#clip0_1_6111)">
      <g filter="url(#filter0_f_1_6111)">
        <path d="M291 46.7861C291 72.4674 101.675 238.786 65.5 238.786C29.3253 238.786 0 72.4674 0 46.7861C0 21.1049 29.3253 0.286133 65.5 0.286133C101.675 0.286133 291 21.1049 291 46.7861Z" fill="#D2F4D6" fillOpacity="0.5" />
      </g>
      <g filter="url(#filter1_f_1_6111)">
        <path d="M348 220.786C348 246.467 318.675 267.286 282.5 267.286C246.325 267.286 217 246.467 217 220.786C217 195.105 408.825 36.7861 445 36.7861C481.175 36.7861 348 195.105 348 220.786Z" fill="#ECC4B7" fillOpacity="0.5" />
      </g>
      <g filter="url(#filter2_f_1_6111)">
        <path d="M727 48.2861C727 73.6912 697.675 94.2861 661.5 94.2861C625.325 94.2861 445 283.691 445 258.286C445 232.881 625.325 2.28613 661.5 2.28613C697.675 2.28613 727 22.881 727 48.2861Z" fill="#F9BC89" fillOpacity="0.5" />
      </g>
    </g>
    <defs>
      <filter id="filter0_f_1_6111" x="-102.2" y="-101.914" width="495.4" height="442.9" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="51.1" result="effect1_foregroundBlur_1_6111" />
      </filter>
      <filter id="filter1_f_1_6111" x="114.8" y="-65.4139" width="438.63" height="434.9" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="51.1" result="effect1_foregroundBlur_1_6111" />
      </filter>
      <filter id="filter2_f_1_6111" x="342.8" y="-99.9139" width="486.4" height="462.745" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="51.1" result="effect1_foregroundBlur_1_6111" />
      </filter>
      <clipPath id="clip0_1_6111">
        <rect width="737" height="468.722" fill="white" transform="translate(0 0.286133)" />
      </clipPath>
    </defs>
  </svg>
);

const StatusCard = ({ title, count, status, subtitle }) => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg rounded-[26px] shadow-lg h-[173px] w-[210px] relative overflow-hidden border border-0">

      <CardContent className="p-6 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-center">
          <h3 className="font-normal text-[14px] text-[#364A15] tracking-[0.02em] leading-6">
            {title}
          </h3>
          <div className="flex items-center justify-center w-[35px] h-[35px] bg-white/50 rounded-full border border-black/10">
            <ArrowUpRight className="w-4 h-4 text-[#364A15]" strokeWidth={0.96} />
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-end">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-medium text-[#364A15] tracking-[0.02em]">{count}</span>
            <span className="text-base text-[#364A15] tracking-[0.02em]">{status}</span>
          </div>

          <p className="mt-1 text-xs text-[#364A15]/50 tracking-[0.02em]">
            {subtitle}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};


const NotificationItem = () => {
  return (
    <div className="w-[229px] h-[545px] bg-white/5 backdrop-blur-lg rounded-[26px] border border-[#1B181980] shadow-lg">
      <div className="relative p-2">
        <div className="flex justify-between items-center">
          <span className="text-[#364A15] text-[14px] font-normal">Notification's</span>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200" />
      </div>

      <div className="p-3 space-y-3">
        <div className="bg-[#D2F4D6] w-[209px] h-[238px] rounded-[26px] p-4 relative">
          <div className="flex gap-2">
            <img src="/api/placeholder/40/40" alt="" className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[#364A15] text-sm">Leng wan shi</span>
                <Link2 className="w-4 h-4 text-[#364A15]" />
              </div>
              <h4 className="text-[#364A15] text-[16px] font-medium mt-1">Product Missing !</h4>
            </div>
          </div>
          <div className="border-t border-black/10 my-3" />
          <p className="text-[#364A15] text-sm leading-relaxed">
            Unfortunately, the product was missing upon arrival
          </p>
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/50 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-[#F2EBD9] w-[209px] h-[72px] rounded-[26px] p-4">
          <div className="flex gap-2">
            <img src="/api/placeholder/40/40" alt="" className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[#364A15] text-sm">Wan ma china</span>
                <Link2 className="w-4 h-4 text-[#364A15]" />
              </div>
              <h4 className="text-[#364A15] text-[16px] font-medium mt-1">Delivery Review</h4>
            </div>
          </div>
        </div>

        <div className="bg-[#D2F4D6] w-[209px] h-[72px] rounded-[26px] p-4">
          <div className="flex gap-2">
            <img src="/api/placeholder/40/40" alt="" className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[#364A15] text-sm">Shin mu zanb</span>
                <Link2 className="w-4 h-4 text-[#364A15]" />
              </div>
              <h4 className="text-[#364A15] text-[16px] font-medium mt-1">Late Delivery !</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-6">
        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

const ChartSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const getVisibleData = (start) => {
    const result = [];
    for (let i = 0; i < 7; i++) {
      const index = (start + i) % chartData.length;
      result.push(chartData[index]);
    }
    return result;
  };

  const visibleData = getVisibleData(startIndex);
  const middleIndex = Math.floor(visibleData.length / 2);
  const middleMonth = visibleData[middleIndex]?.name;

  const getDisplayValues = () => {
    const middleData = visibleData[middleIndex];
    return {
      currentValue: middleData?.value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }),
      previousValue: middleData?.secondValue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    };
  };

  const { currentValue, previousValue } = getDisplayValues();

  return (
    <Card className="bg-white chart rounded-3xl shadow-sm h-[472px] w-[739px] relative overflow-hidden border-[#16192E1A]">
      <ChartBackground />
      <CardContent className="p-4 relative z-10">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">Your Scale this year</h3>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
            <ArrowUpRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="mb-2">
          <div className="flex space-x-4 ml-[225px]">
            <div className="px-4 py-2 rounded-full border border-gray-200 text-gray-600">
              {currentValue}
            </div>
            <div className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700">
              {previousValue}
            </div>
          </div>

          <div className="relative">
            <ResponsiveContainer width="100%" height={230}>
              <LineChart data={visibleData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={({ x, y, payload }) => (
                    <g>
                      <rect
                        x={x - 25}
                        y={y + 5}
                        width="74"
                        height="23"
                        rx="12"
                        ry="12"
                        fill="white"
                        stroke="#364A15"
                        strokeWidth="1"
                        
                      />
                      <text
                        x={x + 11}
                        y={y + 19}
                        fill="#92400E"
                        stroke="#364A15"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                          fontSize: '12px',
                          fontWeight: '300',
                          textTransform: 'capitalize'
                          
                        }}
                      >
                        {payload.value}
                      </text>
                    </g>
                  )}
                />
                <YAxis hide />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="secondValue"
                  stroke="#E5E7EB"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                />
                <ReferenceLine x={middleMonth} stroke="#E5E7EB" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 transform flex justify-between w-[87px]">
              <button
                className="p-1.5 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setStartIndex(prev => prev === 0 ? chartData.length - 1 : prev - 1)}
              >
                <div className="flex">
                  <ChevronLeft className="w-4 h-4 text-gray-400" style={{ marginRight: '-8px' }} />
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                </div>
              </button>
              <button
                className="p-1.5 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setStartIndex(prev => (prev + 1) % chartData.length)}
              >
                <div className="flex">
                  <ChevronRight className="w-4 h-4 text-gray-400" style={{ marginRight: '-8px' }} />
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 w-[1000px] ">
          <div>
            <h4 className="text-gray-600">Average Scale Value</h4>
            <div className="flex items-center space-x-2 mt-2">
              <div className="text-2xl font-bold">$7,457,365.50</div>
              <p className="text-sm text-gray-500">
                <span className="block">$155,852.25 less than</span>
                <span className="block">last year</span>
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-gray-600">Average Item per Scale</h4>
            <div className="flex items-center space-x-2 mt-2">
              <div className="text-2xl font-bold">22.5 M</div>
              <p className="text-sm text-gray-500">
                <span className="block">155,852 less than</span>
                <span className="block">last year</span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatusSection = () => {
  return (
    <div className="flex gap-3">
      <div className="space-y-3">
        <StatusCard
          title="Transfer"
          count="2"
          status="transfer"
          subtitle="waiting to be received"
        />
        <StatusCard
          title="Purchase Order"
          count="3"
          status="dispatched"
          subtitle="Orders waiting to be received"
        />
        <StatusCard
          title="Purchase Order"
          count="5"
          status="Send"
          subtitle="Orders waiting to be received"
        />
      </div>
      <NotificationItem />
    </div>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 ml-20 p-8">
        <div className="flex justify-between items-center mb-8 mr-[166px]">
          <div></div>
          <div className="flex space-x-3">
            {['Overall', 'Today', 'This week', 'This month', 'This year'].map((period) => (
              <button
                key={period}
                className={`px-6 py-2 rounded-full border border-gray-500
                  ${period === 'This month'
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-50'}
                  transition-colors`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <Card className="col-span-4 relative text-white rounded-3xl shadow-sm h-[293px] w-[452px] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: 'url("/welcomebg.png") no-repeat center center',
                backgroundSize: 'cover'
              }}
            />
            <CardContent className="p-8 relative z-10">
              <h2 className="text-2xl leading-tight">
                Hi Leng, here's what happening in your company.
              </h2>
              <div className="mt-6">
                <div className="text-4xl font-bold">$ 352,225.58</div>
                <p className="text-sm mt-2 text-emerald-100/80">
                  That's $135,584.12 more than the last month
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-8 ml-[25px] bg-[#FAFAFA] rounded-[26px] shadow-lg relative overflow-hidden h-[293px] w-[737px]">
            <CardContent className="p-8">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <span className="absolute text-[120px] font-medium text-black/10">TOTAL USERS</span>
              </div>
              {/* Watermark */}
              <div className="absolute inset-0 flex justify-center items-center opacity-5 text-[10rem] font-bold text-gray-900 pointer-events-none">
                Total Users
              </div>
              <div className="flex z-10 relative">
                <div className="flex-1 grid grid-cols-6 gap-4 justify-items-center">
                  {[...Array(18)].map((_, i) => (
                    <div key={i} className="relative hover:scale-105 transition-transform duration-200">
                      <img
                        key={i}
                        src={`/api/placeholder/64/64`}
                        alt={`User ${i + 1}`}
                        className="w-16 h-16 rounded-full ring-2 ring-white shadow-lg object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="w-px border-l border-black/20 bg-gradient-to-b from-black via-transparent to-black/20 mx-8" />

                <div className="w-[106px] h-[51px]">
                  <h3 className="text-[#364A15] text-[13px] font-medium italic">Total User's</h3>
                  <div className="space-y-4 mt-6">
                    <div className="flex items-center gap-3 bg-[#D2F4D6] rounded-2xl px-4 py-3">
                      <Link2 className="w-5 h-5 text-[#364A15]" />
                      <span className="text-[#364A15] font-medium">3,565</span>
                    </div>
                    <div className="flex items-center gap-3 bg-[#D2F4D6] rounded-2xl px-4 py-3">
                      <Users className="w-5 h-5 text-[#364A15]" />
                      <span className="text-[#364A15] font-medium">15,000</span>
                    </div>
                    <div className="flex items-center gap-3 bg-[#D2F4D6] rounded-2xl px-4 py-3">
                      <Package className="w-5 h-5 text-[#364A15]" />
                      <span className="text-[#364A15] font-medium">2,500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-6 top-6 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-[#364A15]" />
              </div>
            </CardContent>
          </Card>

          <div className="col-span-12 flex gap-3">
            <ChartSection />
            <StatusSection />
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = `

  .chart {
    background-color: white;
  }

  .chevron-button {
    position: relative;
    display: flex;
    align-items: center;
    padding: 6px;
    border: 1px solid #E5E7EB;
    border-radius: 0.75rem;
    background-color: white;
    transition: all 0.2s;
  }

  .chevron-button:hover {
    background-color: #F9FAFB;
  }

  .chevron-button .chevron-icon {
    width: 16px;
    height: 16px;
    color: #9CA3AF;
  }

  .chevron-button .chevron-icon + .chevron-icon {
    margin-left: -8px;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Dashboard;
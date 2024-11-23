import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '../ui/card.tsx';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Bell,ArrowUpRight} from 'lucide-react';
import MobileNavbar from './MobileNavbar.tsx';

const chartData = [
  { name: 'Jan', value: 200000, secondValue: 150000 },
  { name: 'Feb', value: 310000, secondValue: 250000 },
  { name: 'Mar', value: 245000, secondValue: 220000 },
  { name: 'Apr', value: 250000, secondValue: 210000 },
  { name: 'May', value: 206550.35, secondValue: 166550.35 },
  { name: 'Jun', value: 221550.35, secondValue: 201550.35 },
  { name: 'Jul', value: 250000, secondValue: 300000 },
  { name: 'Aug', value: 280000, secondValue: 230000 },
  { name: 'Sep', value: 300000, secondValue: 200000 },
  { name: 'Oct', value: 300000, secondValue: 200000 },
  { name: 'Nov', value: 300000, secondValue: 200000 },
  { name: 'Dec', value: 300000, secondValue: 200000 }
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

// Icons
const ChartSquareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 25 25" fill="none">
    <rect x="2.08" y="2.08" width="20.8" height="20.8" rx="2" stroke="#364A15" strokeWidth="1.56"/>
    <path d="M6.58 12.48H8.53V17.36H6.58V12.48Z" stroke="#364A15" strokeWidth="1.56"/>
    <path d="M10.52 8.32H12.47V17.36H10.52V8.32Z" stroke="#364A15" strokeWidth="1.56"/>
    <path d="M14.46 13.76H16.41V17.36H14.46V13.76Z" stroke="#364A15" strokeWidth="1.56"/>
  </svg>
);

// Components
const MobileWelcomeCard = () => (
  <Card className="mx-4 h-[170px] mb-6 relative overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: 'url("/welcomebg.png") no-repeat center center',
        backgroundSize: 'cover'
      }}
    />
    <CardContent className="p-4 relative z-10 text-white">
      <div className="text-xs mb-1">Hi Leng, here's what</div>
      <div className="text-xs mb-3">happening in your company.</div>
      <div className="text-[10px] text-white/70 mb-1">
        This month your store item have sold for:
      </div>
      <div className="text-2xl font-medium mb-1">$ 352,225.58</div>
      <div className="text-[10px] text-white/70">That's $135,584.12 more than the last month</div>
    </CardContent>
  </Card>
);

const MobileChartSection = () => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-[#364A15] ml-4 text-lg font-semibold">Your Scale this year</h2>
      <div className="bg-white mr-4 rounded-full w-[30px] h-[30px] flex items-center justify-center">
        <ArrowUpRight className="w-4 h-4 text-[#364A15]" />
      </div>
    </div>
    
    <Card className="mx-4 mb-4 relative border-none shadow-xl overflow-hidden">
      <ChartBackground />
      <CardContent className="p-3 relative z-10">
        <div className="flex justify-between gap-2 mb-2">
          <button className="px-2 py-1 text-[10px] border border-[#364A15] rounded-full">
            1 Jan - 1 Sep 2023
          </button>
          <button className="px-2 py-1 text-[10px] border border-[#364A15] rounded-full">
            This month
          </button>
        </div>

        <div className="bg-[#FAFAFA]/50 rounded-xl p-2">
          <div className="flex justify-between mb-2">
            <div className="px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-sm">
              $ 356,550.35
            </div>
            <div className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm">
              $ 251,550.35
            </div>
          </div>

          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={chartData.slice(0, 6)} margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={false} />
              <YAxis hide />
              <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="secondValue" stroke="#E5E7EB" strokeWidth={2} dot={false} strokeDasharray="5 5" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div>
              <h4 className="text-gray-600 text-[10px]">Average Scale Value</h4>
              <div className="flex items-center mt-1">
                <div className="text-base font-bold">$7.4M</div>
                <p className="text-xs text-gray-500 ml-2">
                  <span className="block">$155K less than last year</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-gray-600 text-[10px] whitespace-nowrap overflow-hidden text-ellipsis">Average Item per Scale</h4>
              <div className="flex items-center mt-1">
                <div className="text-base font-bold">22.5M</div>
                <p className="text-xs text-gray-500 ml-2">
                  <span className="block">155K less than last year</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const MobileStatusCard = ({ title, count, status, subtitle }) => (
  <div className="status-card p-3 flex justify-between items-center bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl mb-2">
    <div className="flex flex-col">
      <span className="text-[#364A15]/50 text-xs mb-1">{title}</span>
      <div className="flex items-center gap-1 mb-1">
        <span className="text-[#364A15] text-base font-bold">{count}</span>
        <span className="text-[#364A15] text-[10px]">{status}</span>
      </div>
      <p className="text-[#364A15]/50 text-[10px]">{subtitle}</p>
    </div>
    <div className="chart-icon w-12 h-12 flex justify-center items-center bg-[#D2F4D6] rounded-xl p-1 shrink-0">
      <ChartSquareIcon />
    </div>
  </div>
);

const MobileStatusSection = () => (
  <div className="px-4 mb-6">
    <div className="flex gap-2 mb-2">
      <MobileStatusCard
        title="Transfer"
        count="2"
        subtitle="waiting to be received"
        status="transfer"
      />
      <MobileStatusCard
        title="Purchase"
        count="2"
        subtitle="waiting to be received"
        status="dispatched"
      />
    </div>
    <MobileStatusCard
      title="Purchase"
      count="5"
      subtitle="waiting to be received"
      status="Send"
    />
  </div>
);

const ScrollableRow = ({ users, onScroll, rowIndex }) => {
  const rowRef = useRef(null);

  const handleScroll = () => {
    if (rowRef.current) {
      const container = rowRef.current;
      const scrollPercentage = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
      onScroll(rowIndex, scrollPercentage);
    }
  };

  return (
    <div 
      ref={rowRef}
      onScroll={handleScroll}
      className="overflow-x-auto scrollbar-hide pb-4"
    >
      <div className="flex gap-6 w-max px-4">
        {users.map((user) => (
          <div key={user.id} className="flex-shrink-0">
            <img
              src={`/api/placeholder/56/56`}
              alt={user.alt}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#D2F4D6]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileUsersSection = () => {
  const [activeRow, setActiveRow] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(Array(3).fill(0));
  const [lastScrollTime, setLastScrollTime] = useState(0);

  const generateUsers = (startId, count) => 
    Array.from({ length: count }, (_, i) => ({
      id: startId + i,
      alt: `User avatar ${startId + i}`
    }));

  const rows = [
    generateUsers(1, 10),
    generateUsers(11, 10),
    generateUsers(21, 10)
  ];

  const handleRowScroll = (rowIndex, progress) => {
    const currentTime = Date.now();
    if (currentTime - lastScrollTime > 150) {
      setActiveRow(rowIndex);
      setLastScrollTime(currentTime);
    }
    setScrollProgress(prev => {
      const newProgress = [...prev];
      newProgress[rowIndex] = progress;
      return newProgress;
    });
  };

  const averageProgress = scrollProgress.reduce((acc, curr) => acc + curr, 0) / scrollProgress.length;

  return (
    <div className="w-full px-4 mb-6 relative min-h-[400px] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute w-[700px] h-[167px] left-[-1px] top-[15px] select-none text-[128px] font-semibold italic text-[#364A15]/10">
            Total
        </div>
        <div className="absolute w-[700px] h-[167px] left-[-1px] top-[133px] text-start select-none text-[128px] font-semibold italic text-[#364A15]/10">
            User's
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[#364A15] ml-4 text-lg font-semibold">User</h2>
          <div className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-[#364A15]" />
          </div>
        </div>

        <div className="space-y-6 mb-12">
          {rows.map((users, index) => (
            <ScrollableRow 
              key={index} 
              users={users}
              rowIndex={index}
              onScroll={handleRowScroll}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <div className="w-[275px] h-1.5 bg-black/25 rounded-full">
            <div 
              className="w-[101px] h-full bg-[#D2F4D6] border border-[#2F2F2F] rounded-full transition-all duration-300 ease-out"
              style={{ marginLeft: `${(averageProgress * 174) / 100}px` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const MobileDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] pt-8 pb-16">
      <MobileNavbar />
      <div className="flex justify-between items-center mb-6 px-4">
        <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full" />
        <button className="w-6 h-6 flex items-center justify-center">
          <Bell className="w-5 h-5 text-[#364A15]" />
        </button>  
      </div>

      <h1 className="text-[#364A15]/10 text-3xl font-medium mb-4 px-4">Dashboard</h1>
      
      <MobileWelcomeCard />
      <MobileChartSection />
      <MobileStatusSection /> 
      <MobileUsersSection />
    </div>
  );
};

const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default MobileDashboard;
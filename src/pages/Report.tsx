import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card.tsx';
import { ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight, DollarSign, Package, Users } from 'lucide-react';
import QuarterlyBarChart from '../components/QuarterRevenue.tsx';
import Sidebar from '../components/sidebar.tsx';
import ChartDetails from '../components/chartdetail.tsx';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, ReferenceLine } from 'recharts';
import AnnualRevenue from '../components/AnnualRevenue.tsx';
import { useNavigate } from 'react-router-dom';

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

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('reports');
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const [selectedDateRange, setSelectedDateRange] = useState('1 Jan - 1 Mar 2023');
    const [selectedPeriod, setSelectedPeriod] = useState('month');
    const [selectedYear, setSelectedYear] = useState('2023');
    const [selectedQuarter, setSelectedQuarter] = useState('Q1');
    const [selectedStat, setSelectedStat] = useState(null);
    const navigate = useNavigate();

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
                <div className="flex gap-4 mb-6">
                                    <div className="relative">
                                        <select
                                            className="appearance-none border border-gray-200 rounded-full px-4 py-2 pr-10 bg-white text-sm text-gray-600"
                                            value={selectedDateRange}
                                            onChange={(e) => setSelectedDateRange(e.target.value)}
                                        >
                                            <option>1 Jan - 1 Mar 2023</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
    
                                    <div className="relative">
                                        <select
                                            className="appearance-none border border-gray-200 rounded-full px-4 py-2 pr-10 bg-white text-sm text-gray-600"
                                            value={selectedPeriod}
                                            onChange={(e) => setSelectedPeriod(e.target.value)}
                                        >
                                            <option value="time">Per hour</option>
                                            <option value="day">Per day</option>
                                            <option value="week">Per week</option>
                                            <option value="month">Per month</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
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

    const salesData = {
        title: 'Sales',
        data: [
            { time: '01:00', day: 'Mon', week: 'Week 1', month: 'Jan', current: 45000, previous: 35000 },
            { time: '02:00', day: 'Tue', week: 'Week 1', month: 'Feb', current: 42000, previous: 38000 },
            { time: '03:00', day: 'Wed', week: 'Week 2', month: 'Mar', current: 48000, previous: 40000 },
            { time: '04:00', day: 'Thu', week: 'Week 2', month: 'Apr', current: 52000, previous: 42000 },
            { time: '05:00', day: 'Fri', week: 'Week 3', month: 'May', current: 50000, previous: 38000 },
            { time: '06:00', day: 'Sat', week: 'Week 3', month: 'Jun', current: 55000, previous: 41000 },
            { time: '07:00', day: 'Sun', week: 'Week 4', month: 'Jul', current: 58000, previous: 40000 },
            { time: '08:00', week: 'Week 4', month: 'Aug', current: 60000, previous: 42000 },
            { time: '09:00', month: 'Sep', current: 61000, previous: 44000 },
            { time: '10:00', month: 'Oct', current: 62000, previous: 46000 },
            { time: '11:00', month: 'Nov', current: 63000, previous: 48000 },
            { time: '12:00', month: 'Dec', current: 65000, previous: 50000 },
        ]
    };

    const metrics = [
        {
            id: 'Report',
            title: 'Current Revenue',
            icon: <DollarSign className="w-5 h-5 text-gray-700" />,
            value: '$134,930.00',
            growth: '+12%',
            isPositive: false,
            isSelected: true
        },
        {
            id: 'OrderDetailsPage',
            title: 'Total Order Number',
            icon: <Package className="w-5 h-5 text-gray-700" />,
            value: '93,431',
            growth: '11.2%',
            isPositive: true
        },
        {
            id: 'Rating',
            title: 'Rating',
            icon: <Users className="w-5 h-5 text-gray-700" />,
            value: '204,450',
            growth: '+8.8%',
            isPositive: true
        }
    ];

    const monthlyStats = [
        { month: 'Jan', value: '1,027', trending: '+4.5%' },
        { month: 'Feb', value: '943', trending: '-2.1%' },
        { month: 'Mar', value: '1,239', trending: '+5.5%' },
        { month: 'Apr', value: '742', trending: '-4.2%' },
        { month: 'May', value: '840', trending: '+5.9%' },
        { month: 'Jun', value: '992', trending: '+8.7%' },
        { month: 'Jul', value: '2,304', trending: '+3.5%' },
        { month: 'Aug', value: '4,690', trending: '-2.5%' },
        { month: 'Sep', value: '5,120', trending: '-1.5%' },
        { month: 'Oct', value: '5,350', trending: '+0.2%' },
        { month: 'Nov', value: '5,690', trending: '+2.5%' },
        { month: 'Dec', value: '5,990', trending: '+3.5%' }
    ];

    const revenueData = {
        pieData: [
            { name: 'Commissions', value: 30, color: '#4ADE80' },
            { name: 'Delivery fees', value: 25, color: '#FDA4AF' },
            { name: 'Advertisement', value: 25, color: '#FFB98A' },
            { name: 'Payment fees', value: 20, color: '#E4E4FC' }
        ],
        quarterlyData: [
            { quarter: '1st Quarter', value: '120.03', trend: '↓ 2.8%', isDown: true },
            { quarter: '2nd Quarter', value: '83.30', trend: '↓ 2.8%', isDown: true },
            { quarter: '3rd Quarter', value: '145.00', trend: '↓ 2.8%', isDown: true },
            { quarter: '4th Quarter', value: '178.00', trend: '↑ 2.8%', isDown: false }
        ]
    };

    const quarterlyBarData = [
        { month: 'Feb', value: 25 },
        { month: 'Mar', value: 15 },
        { month: 'Apr', value: 32 }
    ];

    const handleMetricClick = (id) => {
        navigate(`/${id}`);
    };

    const handleRevenueClick = () => {
        navigate('/revenue');
    };

    const renderQuarterRevenue = () => (
        <div className="bg-white rounded-xl p-6 border border-gray-500">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-base font-medium">Quarter Revenue</h3>
                <select
                    className="appearance-none border border-gray-500 rounded-full px-4 py-1.5 pr-8 bg-white text-sm text-gray-600"
                    value={selectedQuarter}
                    onChange={(e) => setSelectedQuarter(e.target.value)}
                >
                    <option>Q1</option>
                    <option>Q2</option>
                    <option>Q3</option>
                    <option>Q4</option>
                </select>
            </div>

            <QuarterlyBarChart data={quarterlyBarData} />
        </div>
    );

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className={`flex-1 ${isSidebarExpanded ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
                <div className="p-8">
                    <h1 className="text-4xl font-medium text-[#364A154D] mb-6">Report</h1>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Category</h1>

                    {/* Category Cards */}
                    <div className="grid grid-cols-3 gap-9 mb-10 w-[895px] h-[126px] ">
                        {metrics.map((metric) => (
                            <button
                                key={metric.id}
                                className={`bg-white rounded-xl p-6 ${metric.isSelected ? 'ring-2 ring-green-100 bg-green-50' : 'border border-gray-500'}`}
                                onClick={() => handleMetricClick(metric.id)}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        {metric.icon}
                                        <span className="text-gray-700 font-medium">{metric.title}</span>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold">{metric.value}</span>
                                    <div className={`flex items-center gap-1 ${metric.isPositive ? 'text-green-500 bg-green-50' : 'text-red-500 bg-red-50'
                                        } px-2 py-1 rounded-full text-sm`}>
                                        {metric.isPositive ? (
                                            <ArrowUpRight className="w-3 h-3" />
                                        ) : (
                                            <ArrowDownRight className="w-3 h-3" />
                                        )}
                                        {metric.growth}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Sales Dynamic Section */}
                    <Card className="mb-8 w-[1174px] h-[514px] mt-0 border-0 bg-[]">
                        <div className="p-1 ">
                            <div className="flex justify-between mb-1">
                                <h2 className="text-lg font-semibold">Sales dynamic</h2>
                                <button className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-full text-sm text-gray-600">
                                    <ArrowUpRight className="w-4 h-4" />
                                    Export to CSV
                                </button>
                            </div>

                            <div className="col-span-12 flex gap-3">
                                <div><ChartSection /></div>
                                
                                <div className="bg-white rounded-xl w-[426px] h-[473px]  border border-gray-200">
                                    <div className=" ml-1 mr-1 flex justify-between items-center mb-4 text-sm text-gray-600 gap-[130px] ">
                                        <span>Month</span>
                                        <span>$Value (k)</span>
                                        <span>Trending</span>
                                    </div>
                                    <div className="space-y-4 ml-1 mr-1">
                                        {monthlyStats.map((stat, index) => (
                                            <div key={index} className="flex justify-between items-center text-sm">
                                                <span className="text-gray-600">{stat.month}</span>
                                                <span className="font-medium">{stat.value}</span>
                                                <span className={`${stat.trending.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                                    {stat.trending}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Revenue Section */}
                    <Card className="mb-8 border border-0 bg-[]  w-[1172px] h-[592px]">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg font-semibold">Revenue</h2>
                                <button className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-full text-sm text-gray-600">
                                    <ArrowUpRight className="w-4 h-4" />
                                    Export to CSV
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {/* Annual Revenue */}
                                <AnnualRevenue
                                    selectedYear={selectedYear}
                                    setSelectedYear={setSelectedYear}
                                    pieData={revenueData.pieData}
                                    quarterlyData={revenueData.quarterlyData}
                                />

                                {/* Quarter Revenue */}
                                {renderQuarterRevenue()}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
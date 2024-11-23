import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card.tsx';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, ReferenceLine } from 'recharts';
import { DollarSign, Package, Users, ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';
import ChartDetails from '../components/chartdetail.tsx';
import TimeframeFilter from '../components/TimeFrameFilter.tsx';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar.tsx';


const OrderDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('reports');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState({ year: '2023', month: 'March' });
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('hour');
  const [selectedStat, setSelectedStat] = useState(null);
  const navigate = useNavigate();

  const metrics = [
    {
      id: 'Report',
      title: 'Current Revenue',
      icon: <DollarSign className="w-5 h-5 text-gray-700" />,
      value: '$134,930.00',
      growth: '+12%',
      isPositive: true
    },
    {
      id: 'OrderDetailsPage',
      title: 'Total Order Number',
      icon: <Package className="w-5 h-5 text-gray-700" />,
      value: '93,431',
      growth: '11.2%',
      isPositive: false,
      isSelected: true
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


  const hourlyData = [
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
    // Add more data points with unique month labels
  ];

  const categoryData = [
    { name: 'Total', halal: 20, vegetables: 15, grocery: 25 },
    { name: 'Q1', halal: 15, vegetables: 25, grocery: 20 },
    { name: 'Q2', halal: 10, vegetables: 20, grocery: 30 },
    { name: 'Q3', halal: 8, vegetables: 35, grocery: 7 },
    { name: 'Q4', halal: 25, vegetables: 15, grocery: 10 },
  ];

  const deliveryData = [
    {
      name: 'Delivery',
      value: 60,
      amount: '810,930',
      color: '#f63535',
      barColor: '#f63535'
    },
    {
      name: 'Self Pick-up',
      value: 40,
      amount: '23,334',
      color: '#58be73',
      barColor: '#58be73'
    }
  ];

  const paymentData = [
    { type: 'Credit / debit card', share: '70%', color: 'text-green-500' },
    { type: 'Net Banking', share: '12%', color: 'text-gray-700' },
    { type: 'Check payment', share: '10%', color: 'text-gray-700' },
    { type: 'Cash on delivery', share: '2%', color: 'text-red-500' },
    { type: 'Paypal', share: '8%', color: 'text-gray-700' }
  ];

  const handleMetricClick = (id) => {
    navigate(`/${id}`);
  };

  const handleRevenueClick = () => {
    navigate('/revenue');
  };

  return (
    <div className="flex min-h-screen bg-gray-50 ml-3 mr-3 mb-3">
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
        </div>

        {/* Track Order Section */}
        <div className="space-y-3 w-[1174px] h-[514px] ml-8">
          {/* Header */}
          <div className="text-xl font-semibold">Track order</div>

          {/* Time Filter */}
          <TimeframeFilter />

          {/* Charts Grid */}
          <div className="grid grid-cols-4 gap-4">
            {/* Main Chart */}
            <div className="col-span-3">
              <div className="bg-white rounded-xl p-6 shadow-sm  border border-gray-500 w-[889px] h-[373px]">
                <div className="space-y-6 ">
                  {/* Stats Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Order numbers</h3>
                      <div className="flex flex-col">
                        <span className="text-3xl font-bold">93,431</span>
                        <span className="text-sm text-red-500">
                          ▼ 11.2% compare with last day
                        </span>
                      </div>
                    </div>
                    <select
                      className="px-6 py-2 rounded-lg border border-gray-200 text-sm"
                      value={selectedTimeFrame}
                      onChange={(e) => setSelectedTimeFrame(e.target.value)}
                    >
                      <option value="hour">Per hour</option>
                      <option value="day">Per day</option>
                      <option value="week">Per week</option>
                      <option value="month">Per month</option>
                    </select>
                  </div>

                  {/* Chart */}
                  <div className="w-full overflow-x-auto ">
                    <div className="w-[800px]">
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={hourlyData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis
                            dataKey={selectedTimeFrame === 'hour' ? 'time' : selectedTimeFrame}
                            axisLine={false}
                            tickLine={false}
                          />
                          <YAxis
                            axisLine={false}
                            tickLine={false}
                            domain={[0, 80000]}
                            ticks={[0, 20000, 40000, 60000, 80000]}
                          />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="current"
                            stroke="#000"
                            strokeWidth={2}
                            dot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="previous"
                            stroke="#ddd"
                            strokeDasharray="5 5"
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Goal Progress Card */}
            <Card className="shadow-sm w-[282px] h-[371px]">
              <CardContent className="p-3">
                <h3 className="text-2xl font-medium mb-8">Goal Progress</h3>
                <div className="space-y-1">
                  <div className="h-[300px]">
                    <div className="text-gray-500 mb-1">
                      <div>Order</div>
                      <div>(K)</div>
                    </div>
                    <ResponsiveContainer width="100%" height="60%">
                      <BarChart
                        data={[{ name: 'Total order number', actual: 700, target: 800 }]}
                      >
                        <XAxis
                          dataKey="name"
                          axisLine={{ stroke: '#E5E7EB' }}
                          tickLine={false}
                        />
                        <YAxis
                          type="number"
                          domain={[0, 800]}
                          ticks={[0, 200, 400, 600, 800]}
                          axisLine={false}
                          tickLine={false}
                          stroke="#9CA3AF"
                        />
                        <CartesianGrid
                          strokeDasharray="3 3"
                          vertical={false}
                          stroke="#E5E7EB"
                        />
                        <ReferenceLine
                          y={800}
                          stroke="#FCA5A5"
                          strokeWidth={2}
                        />
                        <Bar
                          dataKey="actual"
                          fill="#4ADE80"
                          radius={[4, 4, 4, 4]}
                          barSize={40}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="flex items-center gap-6 justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded"></div>
                      <span className="text-sm text-gray-600">Actual No.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-200 rounded"></div>
                      <span className="text-sm text-gray-600">Targeted No.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Segment Data Section */}
        <div className="space-y-4 w-[1174px] h-[514px] ml-8">
          <div className="text-xl font-semibold">Segment data</div>

          <TimeframeFilter />

          <div className="grid grid-cols-3 gap-6">
            {/* Category Share Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-4">Category Share</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={categoryData}>
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Bar dataKey="halal" stackId="a" fill="#f63535" />
                      <Bar dataKey="vegetables" stackId="a" fill="#58be73" />
                      <Bar dataKey="grocery" stackId="a" fill="#fc8b3f" />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-4 bg-[#f63535]"></div>
                        <span className="text-sm">Halal Food</span>
                      </div>
                      <div className="text-sm">19%</div>
                      <div className="text-sm font-medium">810,930</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-4 bg-[#58be73]"></div>
                        <span className="text-sm">Vegetables</span>
                      </div>
                      <div className="text-sm">47%</div>
                      <div className="text-sm font-medium">23,334</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-4 bg-[#fc8b3f]"></div>
                        <span className="text-sm">Grocery</span>
                      </div>
                      <div className="text-sm">34%</div>
                      <div className="text-sm font-medium">3,904</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Types Card */}
            <Card className="bg-white rounded-xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-base font-medium text-gray-800 mb-6">Delivery types</h3>
                <div>
                  <div className="h-[200px] mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={deliveryData}
                          cx="50%"
                          cy="50%"
                          startAngle={90}
                          endAngle={-270}
                          innerRadius={0}
                          outerRadius="85%"
                          paddingAngle={0}
                          dataKey="value"
                        >
                          {deliveryData.map((entry) => (
                            <Cell
                              key={entry.name}
                              fill={entry.color}
                              stroke="none"
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-4">
                    {deliveryData.map((item) => (
                      <div key={item.name} className="flex items-center">
                        <div className="flex items-center gap-3 flex-1">
                          <div
                            className="w-1 h-4"
                            style={{ backgroundColor: item.barColor }}
                          />
                          <span className="text-sm text-gray-600">{item.name}</span>
                          <span className="text-sm text-gray-400">- {item.value}%</span>
                        </div>
                        <span className="text-sm text-gray-600">
                          {item.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-8">Payment method</h3>
                <div className="space-y-9">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Type</span>
                    <span>% Share</span>
                  </div>
                  {paymentData.map((item) => (
                    <div key={item.type} className="flex justify-between items-center">
                      <span className="text-sm">{item.type}</span>
                      <span className={`text-sm font-medium ${item.color}`}>
                        {item.share}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
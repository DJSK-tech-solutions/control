import React, { useState } from 'react';
import { Card, CardContent } from "../components/ui/card.tsx";
import { Button } from "../components/ui/button.tsx";
import UserAdd from '../components/InviteCustomerForm.tsx';
import Sidebar from '../components/sidebar.tsx';
import {
  BarChart,
  Clock,
  User,
  Edit,
  Trash as DeleteIcon,
  Check,
  Trash2,
  Plus,
} from 'lucide-react';

const Dashboard = () => { 
  const [activeTab, setActiveTab] = useState('profile');
  const [showUserForm, setShowUserForm] = useState(false);
  const [teamMembers, setTeamMembers] = useState([
    { name: "David Patel", role: "Manager", permission: "Share Dashboard , Edit Data", status: "Active" },
    { name: "Sarah Lee", role: "Executive", permission: "Edit Data", status: "Active" },
    { name: "Michael Nguyen", role: "Analyst", permission: "View Only", status: "Active" },
    { name: "Aisha Garcia", role: "Data Provider", permission: "View Only", status: "Active" },
    { name: "Emily Jones", role: "Roles", permission: "View Only", status: "Active" },
    { name: "Edwin", role: "Roles", permission: "View Only", status: "Active" }
  ]);

  const handleUserSubmit = (userData) => {
    setTeamMembers([
      ...teamMembers,
      {
        name: userData.name,
        role: userData.role,
        permission: "View Only",
        status: "Active"
      }
    ]);
  };

  return (
    <div className="flex min-h-screen ml-14 bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 ml-20 p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Profile</h1>

        {/* Profile Section */}
        <div className="flex gap-10 grid-cols-1 md:grid-cols-2 mb-8">
          <Card className="w-[339px] h-[272px] border-0 overflow-hidden bg-cover bg-center relative" style={{backgroundImage: "url('profile.png')"}}>
            <div className="absolute bottom-0 left-0 right-0">
              <svg width="339" height="86" viewBox="0 0 339 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1_16180333)">
                  <path d="M0 53C0 34.1438 0 24.7157 5.85786 18.8579C11.7157 13 21.1438 13 40 13H84.75H112.038C121.973 13 131.784 10.8009 140.769 6.56041C158.961 -2.02572 180.039 -2.02572 198.231 6.56041C207.216 10.8009 217.027 13 226.962 13H254.25H299C317.856 13 327.284 13 333.142 18.8579C339 24.7157 339 34.1438 339 53V191C339 209.856 339 219.284 333.142 225.142C327.284 231 317.856 231 299 231H40C21.1438 231 11.7157 231 5.85786 225.142C0 219.284 0 209.856 0 191L0 53Z" fill="#FFEDED" fillOpacity="0.37"/>
                </g>
                <defs>
                  <filter id="filter0_b_1_16180333" x="-55" y="-54.8789" width="449" height="340.879" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="100"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_16180"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_16180" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </div>
            <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-[#0e330a]">
              <h2 className="text-lg font-medium">Jhene lee</h2>
              <p className="text-sm">Jhenelee1955@gmail.com</p>
            </CardContent>
          </Card>

          <div className="w-full max-w-lg p-6">
            <div className="flex justify-between mb-2 items-center">
              <h1 className="text-1xl font-normal">Your Profile</h1>
              <button className="bg-[#D2F4D6] text-[#364A15] px-5 py-[1px] rounded-full text-sm">
                Edit
              </button>
            </div>
            
            <Card className="bg-white/90 backdrop-blur-sm border border-[#D9D9D9] shadow-md rounded-2xl">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-5">
                  <span className="w-24 text-[#25532B] text-sm">Full name :</span>
                  <div className="flex-1">
                    <div className="border border-[#D4D4D4]/50 rounded-lg px-3 py-3">
                      <span className="text-[#25532B] text-sm font-light">Jhene lee</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <span className="w-24 text-[#25532B] text-sm">Role :</span>
                  <div className="flex-1">
                    <div className="border border-[#D4D4D4]/50 rounded-lg px-3 py-3">
                      <span className="text-[#25532B] text-sm font-light">Administrator</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <span className="w-24 text-[#25532B] text-sm">Mobile no :</span>
                  <div className="flex flex-1 items-center gap-4">
                    <div className="border flex-1 border-[#D4D4D4]/50 rounded-lg px-3 py-3">
                      <span className="text-[#364A15] text-sm font-light">+60(000) 0000 0000</span>
                    </div>
                    <div className="flex gap-0.5">
                      <Check size={16} className="text-[#364A15]/50" />
                      <Check size={16} className="text-[#364A15]/50" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <span className="w-24 text-[#25532B] text-sm">Email</span>
                  <div className="flex flex-1 items-center gap-4">
                    <div className="border flex-1 border-[#D4D4D4]/50 rounded-lg px-3 py-3">
                      <span className="text-[#25532B] text-sm font-light">Jhenelee1955@gmail.com</span>
                    </div>
                    <div className="flex gap-0.5">
                      <Check size={16} className="text-[#364A15]/50" />
                      <Check size={16} className="text-[#364A15]/50" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Permissions Section */}
        <div className="flex justify-between w-[1171px] items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Permission</h2>
          <Button
            variant="outline"
            className="px-4 py-2 text-lime-950 rounded-full bg-green-100 hover:bg-green-200"
            onClick={() => setShowUserForm(true)}
          >
            Add
          </Button>
        </div>
        <Card className="mb-8 w-[1171px] zoom-out-100 border-none rounded-3xl bg-white shadow-sm">
          <CardContent className="">
            <div className="overflow-x-auto">
              <table className="w-[1171px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-medium text-black">SI no</th>
                    <th className="text-left py-4 px-4 font-medium text-black">Profile</th>
                    <th className="text-left py-4 px-4 font-medium text-black">Name</th>
                    <th className="text-left py-4 px-4 font-medium text-black">Role</th>
                    <th className="text-left py-4 px-4 font-medium text-black">Permission</th>
                    <th className="text-left py-4 px-4 font-medium text-black">Status & Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-4 px-4">{index + 1}</td>
                      <td className="py-4 px-4">
                        <div className="w-[56.97px] h-[54.07px] overflow-hidden">
                          <img
                            src="Profile.png"
                            alt={member.name}
                            className="w-56 h-full rounded-xl object-cover"
                          />
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium">{member.name}</td>
                      <td className="py-4 px-4 text-gray-600">{member.role}</td>
                      <td className="py-4 px-4 text-gray-600">{member.permission}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-600">
                            {member.status}
                          </span>
                          <button className="bg-black rounded-full p-2 text-white hover:bg-gray-800 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <div className="w-px h-6 bg-gray-300" />
                          <button className="bg-black rounded-full p-2 text-white hover:bg-gray-800 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <div className="w-px h-6 bg-gray-300" />
                          <button className="bg-black rounded-full p-2 text-white hover:bg-gray-800 transition-colors">
                            <User className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="flex ">


  {/* Payment Section */}
  <div className="space-y-4 flex-1 max-w-[515px] px-2">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold text-[#25532B]">Your payment</h2>
      <button className="bg-[#D2F4D6] text-[#364A15] px-5 py-1 rounded-full text-sm">
        Edit
      </button>
    </div>

    <Card className="shadow-md rounded-3xl bg-white/90 backdrop-blur-[3.5px] border-none">
      <CardContent className="p-6 space-y-4">
        {/* Active Card */}
        <div className="bg-[#D2F4D6] border border-[rgba(54,74,21,0.18)] p-4 rounded-lg">
          <div className="flex flex-col gap-2">
            <span className="text-[#364A15] text-base">Master Card</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-[18px] bg-[#2D2D2D] rounded-[3.6px]">
                  <div className="absolute left-[15.19%] right-[41.77%] top-[16.13%] bottom-[16.14%] bg-[#FF5023]" />
                  <div className="absolute left-[49.99%] right-[15.19%] top-[16.13%] bottom-[16.14%] bg-[#FFCD00]" />
                </div>
                <span className="text-[#32343E]/50 font-['Sen']">****</span>
              </div>
              <span className="text-[#32343E] font-['Sen']">119</span>
            </div>
          </div>
        </div>

        {/* Inactive Card */}
        <div className="bg-[#F4F5F7] p-4 rounded-lg">
          <div className="flex flex-col gap-2">
            <span className="text-[#364A15] text-base">Master Card</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-[18px] bg-[#2D2D2D] rounded-[3.6px]">
                  <div className="absolute left-[15.19%] right-[41.77%] top-[16.13%] bottom-[16.14%] bg-[#FF5023]" />
                  <div className="absolute left-[49.99%] right-[15.19%] top-[16.13%] bottom-[16.14%] bg-[#FFCD00]" />
                </div>
                <span className="text-[#32343E]/50 font-['Sen']">****</span>
              </div>
              <span className="text-[#32343E] font-['Sen']">119</span>
            </div>
          </div>
        </div>

        {/* Add New Card Button */}
        <button className="w-full h-[58px] border border-[#D4D4D4]/50 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
          <Plus className="w-6 h-6 text-[#25532B]" />
          <span className="text-[#25532B] text-sm">Add new card</span>
        </button>
      </CardContent>
    </Card>
  </div>

  {/* Summary Section */}
  <div className="space-y-4 ml-[50px] flex-1 max-w-[595px] px-2">
    <h2 className="text-2xl font-normal text-[#364A15]">Summary</h2>
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        {/* This Week Earning Card */}
        <div className="flex-1 p-4 flex justify-between items-center h-[148px] bg-white/50 border border-[rgba(54,74,21,0.22)] backdrop-blur-[17.5px] shadow-[0px_74px_80px_rgba(22,25,46,0.1)] rounded-xl">
          <div className="flex flex-col justify-between h-[88px]">
            <p className="text-[14px]  text-black/50">
              this week<br />earning
            </p>
            <p className="text-[20px] font-bold  text-black">
              $1,42,285.00
            </p>
          </div>
          <div className="w-[62px] h-[116px] bg-black rounded-[16px] flex items-center justify-center">
            <BarChart className="w-6 h-6 text-[#D2F4D6]" />
          </div>
        </div>

        {/* Live Order Card */}
        <div className="flex-1 p-4 flex justify-between items-center h-[148px] bg-white/50 border border-[rgba(54,74,21,0.22)] backdrop-blur-[17.5px] shadow-[0px_74px_80px_rgba(22,25,46,0.1)] rounded-xl">
          <div className="flex flex-col justify-between h-[88px]">
            <p className="text-[14px]  text-black/50">
              Live Order
            </p>
            <p className="text-[20px] font-bold  text-black">
              122 &gt; &gt;
            </p>
          </div>
          <div className="w-[62px] h-[116px] bg-black rounded-[16px] flex items-center justify-center">
            <Clock className="w-6 h-6 text-[#D2F4D6]" />
          </div>
        </div>
      </div>

      {/* Total User Card */}
      <div className="w-full  p-4 flex justify-between items-center h-[160px] bg-white/50 border border-[rgba(54,74,21,0.22)] backdrop-blur-[17.5px] shadow-[0px_74px_80px_rgba(22,25,46,0.1)] rounded-xl">
        <div className="flex flex-col justify-between h-[88px]">
          <p className="text-[24px] font-['Lufga'] font-light text-black/50">
            Total User
          </p>
          <p className="text-[20px] font-bold font-['Manrope'] text-[#364A15]">
            35,24,812
          </p>
        </div>
        <div className="w-[62px] h-[116px] bg-black rounded-[16px] flex items-center justify-center">
          <User className="w-6 h-6 text-[#D2F4D6]" />
        </div>
      </div>
    </div>
  </div>
</div>

        {showUserForm && (
          <UserAdd
            onClose={() => setShowUserForm(false)}
            onSubmit={handleUserSubmit}
          />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
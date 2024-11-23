import React, { useState } from 'react';
import { User, Mail, Phone } from 'lucide-react';

const UploadImageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.24059 9.61248C8.54059 10.8739 7.23538 10.9833 6.33121 9.85311L6.17079 9.64894C5.23017 8.46769 3.90309 8.61352 3.22496 9.96248L1.97079 12.4781C1.09579 14.2281 2.37184 16.2916 4.326 16.2916H13.6302C15.5187 16.2916 16.7948 14.3594 16.051 12.6166L13.7687 7.28644C12.9958 5.47811 11.5739 5.40519 10.6187 7.12602" stroke="#364A15" stroke-width="1.09375" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.51953 3.89575C7.51953 5.10617 6.54245 6.08325 5.33203 6.08325C4.12161 6.08325 3.14453 5.10617 3.14453 3.89575C3.14453 2.68534 4.12161 1.70825 5.33203 1.70825C5.59453 1.70825 5.84245 1.752 6.06849 1.8395" stroke="#364A15" stroke-width="1.09375" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);


const InviteCustomerForm = ({ onClose, onSubmit }) => {
  const [name, setName] = useState('Ariane McCoy');
  const [email, setEmail] = useState('ArianeMcCoy@email.co');
  const [mobile, setMobile] = useState('00000 00000');
  const [gender, setGender] = useState('Female');
  const [role, setRole] = useState('Vendor');
  const [storeName, setStoreName] = useState('Summer Salome');
  const [pageLink, setPageLink] = useState('HTTPS://pasarbela/Summer-Salome.com');

  const handleSubmit = () => {
    onSubmit({ name, email, mobile, gender, role, storeName, pageLink });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white/20 backdrop-blur-sm flex items-start justify-start">
      <div className="bg-white w-[1062px] h-[620px] mt-[80px] ml-[197px] rounded-[20px] shadow-lg border border-gray-200 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        <div className="max-w-[800px] mx-auto pt-8 px-8">
          {/* Profile Section */}
          <div className="flex items-center gap-7 mb-10">
            <img 
              src="/images/profile.jpg" 
              alt="Profile" 
              className="w-15 h-12 rounded-full"
            />
            <button
                className="px-3 py-2 rounded-full border  bg-[#D2F4D6] text-gray-700 flex items-center gap-2"
              >
                <UploadImageIcon className="h-4 w-4" />
                Upload Image
              </button>
            <button className="px-3 py-2 rounded-full border  bg-white text-gray-700 flex items-center gap-2">
              Remove
            </button>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-x-40 gap-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-500 text-gray-600"
                />
                <User className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Access</label>
              <select
                value="Multi/b store"
                className="w-full px-4 py-2 rounded-full border border-gray-500 text-gray-600 bg-white appearance-none"
              >
                <option>Modify store</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Mail</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-500 text-gray-600"
                />
                <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-500 text-gray-600 bg-white appearance-none"
              >
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Mobile number</label>
              <div className="relative">
                <input
                  type="tel"
                  value={"+ " + mobile}
                  onChange={(e) => setMobile(e.target.value.replace("+ ", ""))}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-500 text-gray-600"
                />
                <Phone className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Store Name</label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-500 text-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-500 text-gray-600 bg-white appearance-none"
              >
                <option>Vendor</option>
                <option>Customer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Page link</label>
              <input
                type="text"
                value={pageLink}
                onChange={(e) => setPageLink(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-500 text-gray-600"
              />
              <p className="mt-1.5 text-xs text-gray-400">*This is your website path by using it you can see your store</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-12">
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-500 border border-gray-500 rounded-full text-sm"
            >
              Edit
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 text-black border border-gray-500 bg-[#acefaf] rounded-full text-sm"
            >
              Verify and Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteCustomerForm;
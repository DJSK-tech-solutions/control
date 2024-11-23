
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import SalesDashboards from '../components/ui/SalesDashboard.tsx';
import Reviews from '../components/ui/Review.tsx';
import ProductCard from '../components/ui/ProductCards.tsx';
import ShopDiscountCard from '../components/ui/ShopDiscountCards.tsx';
import ProductList from '../components/ui/ProductLists.tsx';
import ActionDialog from '../components/ui/ActionDialogs.tsx'
import Sidebar from '../components/sidebar.tsx';

const RemoveIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 6.47998C18.17 6.14998 14.82 5.97998 11.48 5.97998C9.5 5.97998 7.52 6.07998 5.54 6.27998L3.5 6.47998" stroke="#364A15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 5.47L9.22 4.16C9.38 3.21 9.5 2.5 11.19 2.5H13.81C15.5 2.5 15.63 3.25 15.78 4.17L16 5.47" stroke="#364A15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.7099 22.5001H9.2899C6.4999 22.5001 6.4099 21.2801 6.2999 19.7101L5.6499 9.64014" stroke="#364A15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.35 9.64014L18.7 19.7101" stroke="#364A15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.8301 17H14.1601" stroke="#364A15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3201 13H15.0001" stroke="#364A15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 13H10.83" stroke="#364A15" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VerifiedIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.87988 12.5001L11.2899 14.9201L16.1199 10.0801" stroke="#364A15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.73988 6.70008C4.73988 5.64008 5.60988 4.77008 6.66988 4.77008H8.39988C8.79988 4.77008 9.35988 4.56008 9.65988 4.31008L11.2399 2.96008C11.9399 2.37008 13.0699 2.37008 13.7499 2.96008L15.3299 4.31008C15.6299 4.56008 16.1999 4.77008 16.5999 4.77008H18.2999C19.3599 4.77008 20.2299 5.64008 20.2299 6.70008V8.40008C20.2299 8.80008 20.4399 9.36008 20.6899 9.66008L22.0399 11.2401C22.6299 11.9401 22.6299 13.0701 22.0399 13.7501L20.6899 15.3301C20.4399 15.6301 20.2299 16.1901 20.2299 16.5901V18.2901C20.2299 19.3501 19.3599 20.2201 18.2999 20.2201H16.5999C16.1999 20.2201 15.6399 20.4301 15.3399 20.6801L13.7599 22.0301C13.0599 22.6201 11.9299 22.6201 11.2499 22.0301L9.66988 20.6801C9.36988 20.4301 8.79988 20.2201 8.40988 20.2201H6.66988C5.60988 20.2201 4.73988 19.3501 4.73988 18.2901V16.5801C4.73988 16.1901 4.53988 15.6201 4.28988 15.3301L2.93988 13.7401C2.35988 13.0501 2.35988 11.9301 2.93988 11.2401L3.49988 10.5801" stroke="#364A15" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VisitWebsiteIcon = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="35" height="35" rx="17.5" fill="white" fillOpacity="0.5"/>
    <rect x="0.35" y="0.35" width="34.3" height="34.3" rx="17.15" stroke="black" strokeOpacity="0.1" strokeWidth="0.7"/>
    <path d="M20.197 18.6553L20.197 14.8034L16.345 14.8034" stroke="#364A15" strokeWidth="0.673077" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 17.5005L20.1431 14.8574" stroke="#364A15" strokeWidth="0.673077" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.8029 20.1971L16.2402 18.7598" stroke="#364A15" strokeWidth="0.673077" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RatingStars = () => (
  <div className="flex gap-1 mt-2">
    {[1,2,3,4].map(i => (
      <svg key={i} className="w-6 h-6 text-[#1AC84B]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
    <svg className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  </div>
);


const Button = ({ children, icon, endIcon, variant = 'default', onClick }) => {
  const variants = {
    default: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50",
    primary: "bg-green-50 text-green-700 hover:bg-green-100 border-0",
  };

  return (
    <button 
      onClick={onClick}
      className={`
        h-10 px-4 rounded-full
        transition-colors duration-150 
        flex items-center gap-2
        text-sm font-medium
        ${variants[variant]}
      `}
    >
      {icon && <span className="text-gray-700">{icon}</span>}
      <span>{children}</span>
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

const Mains = () => {
  const [dialogState, setDialogState] = useState({ isOpen: false, type: null });
  const [activeTab, setActiveTab] = useState('Shop');
  
  const products = [
    {
      image: "/api/placeholder/200/200",
      label: "Top 1",
      title: "Korean fresh potato",
      category: "Vegetable",
      seller: "Halal market international ltd."
    },
    {
      image: "/api/placeholder/200/200",
      label: "No.2",
      title: "Halal Chicken",
      category: "Vegetable",
      seller: "Halal market international ltd."
    },
    {
      image: "/api/placeholder/200/200",
      label: "No.3",
      title: "Halal Lamb",
      category: "Vegetable",
      seller: "Halal market international ltd."
    }
  ];

  const handleAction = (actionType) => {
    console.log(`${actionType} action completed`);
    setDialogState({ isOpen: false, type: null });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-[1200px] mx-auto">
        <header className="flex justify-between items-center mb-8">
        <div></div>
          <div className="flex items-center gap-3">
            <Button 
              icon={<RemoveIcon />}
              onClick={() => setDialogState({ isOpen: true, type: 'remove' })}
            >
              Remove
            </Button>
            <Button 
              icon={<VerifiedIcon />}
              onClick={() => setDialogState({ isOpen: true, type: 'verify' })}
            >
              Verified
            </Button>
            <Button 
              variant="primary"
              endIcon={<VisitWebsiteIcon />}
            >
              Visit the website
            </Button>
          </div>
        </header>

        <section className="flex gap-6 mb-8">
          <div className="w-40 h-40 bg-white rounded-2xl p-4 flex flex-col items-center justify-center">
            <img src="vege.png" alt="Vegan Mart Logo" className="mb-2" />
            <h1 className="font-extrabold text-gray-500">Vegan Mart</h1>
          </div>

          <div className="flex-1">
            <div className="flex justify-between">
              <dl className="space-y-2">
                <div className="flex gap-2">
                  <dt className="text-gray-500 w-24">Owner:</dt>
                  <dd>
                    <a href="#" className="text-gray-900 underline underline-offset-2">
                      Ariene McCoy
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-gray-500 w-24">Description:</dt>
                  <dd className="text-[15px] leading-6 text-gray-500 max-w-2xl">
                    Welcome to Vegan Mart, your ultimate destination for all things plant-based! 
                    Step into our vibrant marketplace and discover a cornucopia of cruelty-free delights.
                  </dd>
                </div>
              </dl>

              <div className="flex flex-col items-end">
                <div className="bg-gray-900 px-3 py-1.5 rounded-xl flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-xs text-white">Active</span>
                </div>
                <span className="text-[10px] text-gray-500 mt-1">Currently Active</span>
              </div>
            </div>
          </div>
        </section>
        <ProductList />
        <div className="mt-8 ml-4 w-[1220px]">
          <div className="flex gap-8">
            <div className="flex-1">
              <h2 className="text-xl font-medium text-[#364A15] mb-8">Best Selling</h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="flex gap-8">
                  <div className="w-72">
                    <div className="mb-6">
                      <h3 className="text-[#364A15]/60 text-lg font-normal mb-4">Platform</h3>
                      <button className="flex items-center gap-2 text-[#364A15] text-xl font-medium"><span>Mobile App</span>
                        <ChevronDown className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="bg-[#E8FFEA] rounded-2xl p-6 space-y-6">
                      <div>
                        <p className="text-[#364A15]/60 text-base">Total Rated items</p>
                        <p className="text-[#364A15] text-2xl font-medium mt-2">134,495</p>
                      </div>

                      <div>
                        <p className="text-[#364A15]/60 text-base">Average rating</p>
                        <RatingStars />
                      </div>

                      <div>
                        <p className="text-[#364A15]/60 text-base">Most rated category</p>
                        <p className="text-[#364A15] text-2xl font-medium mt-2">Halal chicken</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-[#364A15]/60 text-lg">Most sold items (Top3)</h3>
                      <select className="border rounded-full px-6 py-1.5 text-sm text-[#364A15] bg-white">
                        <option>Overall</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      {products.map((item, idx) => (
                        <ProductCard key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ShopDiscountCard />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex gap-8">
            <SalesDashboards />
            <Reviews />
          </div>
        </div>

        <ActionDialog
          isOpen={dialogState.isOpen}
          onClose={() => setDialogState({ isOpen: false, type: null })}
          onConfirm={() => handleAction(dialogState.type)}
          type={dialogState.type}
        />
      </main>
    </div>
  );
};

export default Mains;
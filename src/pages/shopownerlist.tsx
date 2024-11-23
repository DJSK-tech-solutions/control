import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar.tsx';
import { Star } from 'lucide-react';

interface DashboardProps {
  onVisit: (id: number) => void;
}

const App: React.FC<DashboardProps> = ({ onVisit }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStatus, setActiveStatus] = useState('active');
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Shop');

  const categories = [
    { id: 'all', label: 'View All' },
    { id: 'new', label: 'New' },
    { id: 'veg', label: 'Veg' },
    { id: 'meat', label: 'Meat' },
    { id: 'grocery', label: 'Grocery' },
  ];

  const shops = [
    {
      id: 1,
      name: 'HALAL Meat',
      logo: '/api/placeholder/100/100',
      owner: 'Brookly Simson',
      rating: 4,
      reviews: 285,
      category: 'Non - Veg',
      status: 'active',
    },
    {
      id: 2,
      name: 'Organic Veggies',
      logo: '/api/placeholder/100/100',
      owner: 'Sarah Johnson',
      rating: 4.5,
      reviews: 192,
      category: 'Veg',
      status: 'active',
    },
    {
      id: 3,
      name: 'Grocery Galore',
      logo: '/api/placeholder/100/100',
      owner: 'Michael Lee',
      rating: 3.8,
      reviews: 126,
      category: 'Grocery',
      status: 'active',
    },
    {
      id: 4,
      name: 'Meat Lovers',
      logo: '/api/placeholder/100/100',
      owner: 'Emily Chen',
      rating: 4.2,
      reviews: 215,
      category: 'Non - Veg',
      status: 'active',
    },
    {
      id: 5,
      name: 'Fresh Produce',
      logo: '/api/placeholder/100/100',
      owner: 'David Patel',
      rating: 4.1,
      reviews: 189,
      category: 'Veg',
      status: 'active',
    },
  ];

  const filteredShops = shops.filter((shop) => {
    if (activeStatus !== 'all' && shop.status !== activeStatus) return false;
    if (activeCategory === 'all') return true;
    if (activeCategory === 'veg' && shop.category === 'Veg') return true;
    if (activeCategory === 'meat' && shop.category === 'Non - Veg') return true;
    if (activeCategory === 'grocery' && shop.category === 'Grocery') return true;
    return false;
  });

  const handleRemove = (id: number) => {
    console.log('Removing shop:', id);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
            <div></div>
          <nav className="flex gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full transition-colors text-sm ${
                  activeCategory === category.id
                    ? 'bg-green-100 text-green-800'
                    : 'border border-gray-500 hover:bg-gray-50'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </nav>
        </header>

        <main className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Shop List</h2>
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors text-sm ${
                  activeStatus === 'active'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white border border-gray-500 hover:bg-gray-50'
                }`}
                onClick={() => setActiveStatus('active')}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeStatus === 'active' ? 'bg-white' : 'bg-gray-300'
                  }`}
                ></span>
                Active
              </button>
              <button
                className={`px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm ${
                  activeStatus === 'inactive'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white border border-gray-500 hover:bg-gray-50'
                }`}
                onClick={() => setActiveStatus('inactive')}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeStatus === 'inactive' ? 'bg-white' : 'bg-gray-300'
                  }`}
                ></span>
                In - Active
              </button>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="grid grid-cols-[repeat(auto-fill,236px)] gap-10 w-full justify-center ">
              {filteredShops.map((shop) => (
                <div
                  key={shop.id}
                  className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow w-[236px] border border-gray-500"
                >
                  <div className="rounded-xl overflow-hidden mb-3 relative group h-[160px]">
                    <img
                      src={shop.logo}
                      alt={shop.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
                  </div>
                  <div className="space-y-2.5 px-0.5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-xs">{shop.name}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                        {shop.category}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Owner: {shop.owner}</p>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < shop.rating
                              ? 'fill-green-500 text-green-500'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        {shop.reviews} Review
                      </span>
                    </div>
                    <div className="flex gap-2 pt-2">
      <button
        onClick={() => handleRemove(shop.id)}
        className="flex-1 px-2 py-1.5 text-xs bg-green-50 text-green-700 rounded-full hover:bg-green-100 transition-colors"
      >
        Remove
      </button>
      <button
        onClick={() => navigate('/Mains')}
        className="flex-1 px-2 py-1.5 text-xs bg-green-50 text-green-700 rounded-full hover:bg-green-100 transition-colors"
      >
        Visit
      </button>
    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const MergedShopComponent = () => {
  const [activeView, setActiveView] = useState('list');
  const [selectedShop, setSelectedShop] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTimeFilter, setActiveTimeFilter] = useState('This week');
  const dropdownRef = useRef(null);

  const categories = [
    { id: 'all', label: 'View All' },
    { id: 'new', label: 'New'},
    { id: 'veg', label: 'Veg' },
    { id: 'meat', label: 'Meat'},
    { id: 'grocery', label: 'Grocery'},
  ];

  const shops = [
    {
      id: 1,
      name: 'HALAL Meat',
      logo: '/api/placeholder/100/100',
      owner: 'Brookly Simson',
      rating: 4,
      reviews: 285,
      category: 'meat',
      status: 'active',
    },
    {
      id: 2,
      name: 'Health Veg',
      logo: '/api/placeholder/100/100',
      owner: 'Brookly Simson',
      rating: 4,
      reviews: 285,
      category: 'veg',
      status: 'active',
    },
    {
      id: 3,
      name: 'Organic Store',
      logo: '/api/placeholder/100/100',
      owner: 'Brookly Simson',
      rating: 4,
      reviews: 285,
      category: 'grocery',
      status: 'active',
    },
    {
      id: 4,
      name: 'Fresh Market',
      logo: '/api/placeholder/100/100',
      owner: 'Brookly Simson',
      rating: 4,
      reviews: 285,
      category: 'new',
      status: 'active',
    },
    {
      id: 5,
      name: 'Green Grocer',
      logo: '/api/placeholder/100/100',
      owner: 'Brookly Simson',
      rating: 4,
      reviews: 285,
      category: 'grocery',
      status: 'active',
    }
  ];

  const salesData = [
    { date: '27 May', value: 70 },
    { date: '28 May', value: 85 },
    { date: '29 May', value: 100 },
    { date: '30 May', value: 75 },
    { date: '01 Jun', value: 60 }
  ];
  const productsData = [
    {
      id: 1,
      image: "/api/placeholder/160/100",
      rank: "Top 1",
      name: "Halal market international ltd.",
      rating: 5,
      trend: "+12%"
    },
    {
      id: 2,
      image: "/api/placeholder/160/100",
      rank: "No.2",
      name: "Halal market international ltd.",
      rating: 5,
      trend: "+12%"
    }
  ];

  const discountItems = [
    { 
      image: "/api/placeholder/80/80", 
      name: "Fresh potato",
      weight: "3kg", 
      discount: "5%" 
    },
    { 
      image: "/api/placeholder/80/80", 
      name: "Fresh tomato",
      weight: "3kg", 
      discount: "5%" 
    },
    { 
      image: "/api/placeholder/80/80", 
      name: "Fresh tomato",
      weight: "3kg", 
      discount: "5%" 
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setIsDropdownOpen(false);
    setVisibleCount(4);
  };

  const filteredShops = shops.filter(shop => {
    const matchesCategory = activeCategory === 'all' || shop.category === activeCategory;
    const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shop.owner.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visibleShops = filteredShops.slice(0, visibleCount);
  const hasMore = visibleCount < filteredShops.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleVisit = (shopId) => {
    const shop = shops.find(s => s.id === shopId);
    setSelectedShop(shop);
    setActiveView('detail');
  };

  const handleBackToList = () => {
    setActiveView('list');
    setSelectedShop(null);
  };

  const renderBottomNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-between px-12 py-4">
        <button className="text-gray-400">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
            <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
          </svg>
        </button>
        <button className="text-gray-400">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 20V10M18 20V4M6 20v-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
          </svg>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#1AC84B] relative">
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#1AC84B] rounded-full"/>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
          </svg>
        </button>
        <button className="text-gray-400">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
          </svg>
        </button>
        <button className="text-gray-400">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
          </svg>
        </button>
      </div>
    </div>
  );

  if (activeView === 'detail') {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Top Background with Profile and Notification */}
        <div className="bg-gray-100 px-5 py-4">
          <div className="flex justify-between items-center">
            <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden">
              <img 
                src="/api/placeholder/56/56" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content Card with Curved Edges */}
  <div className="flex-1 bg-white rounded-t-[32px] overflow-hidden">
          {/* Header */}
    <div className="px-5 pt-8">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-medium text-[#364A15]">Vegan Mart</h1>
          <button className="p-2" onClick={() => console.log('Back to list')}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="#364A15" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-[120px] h-[110px] bg-white mb-[0px] rounded-lg overflow-hidden border border-gray-100">
          <img src="Vegan.png" alt="Vegan Mart" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col items-end mb-4">
          <div className="bg-[#2F2F2F] px-4 py-2 rounded-lg flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D2F4D6]" />
            <span className="text-xs text-white">Active</span>
          </div>
          <span className="text-[10px] text-gray-500 mt-1">Currently Active</span>
        </div>
      </div>

      <div className="flex items-center justify-end mb-8">
        <button className="flex mb-[40px] items-center justify-between h-8 px-5 bg-[#D2F4D6] rounded-full text-[7px] text-[#364A15]">
          Visit the website
          <div className="w-4 h-4 bg-white/50 rounded-full flex items-center justify-center ml-2">
            <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
              <path d="M3 9L9 3M9 3H3M9 3V9" stroke="#364A15" strokeWidth="1.5" />
            </svg>
          </div>
        </button>
      </div>
    

            {/* Content Section */}
            <div className="space-y-6">
              <div className="flex items-start gap-2">
                <span className="text-[#364A15] font-medium min-w-[70px]">Owner :</span>
                <span className="text-[#364A15] underline">{selectedShop.owner}</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#364A15] font-medium min-w-[70px] shrink-0">Description :</span>
                <p className="text-[#364A15] text-sm">
                  Welcome to {selectedShop.name}, your ultimate destination for all things plant-based! Step into our vibrant marketplace and discover a cornucopia of cruelty-free delights. From fresh, organic produce to pantry essentials and gourmet specialties, we have everything you need to nourish your body and soul.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#364A15] font-medium min-w-[70px]">Created :</span>
                <span className="text-[#364A15]">15/7/2023</span>
              </div>
            </div>

            {/* Products List Section */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[15px] font-medium text-[#364A15]">Products List</h2>
                <button className="flex items-center gap-1.5 text-xs px-3 py-1.5 border border-[#364A15] rounded-lg">
                  Best Selling
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="#364A15" strokeWidth="1.2"/>
                  </svg>
                </button>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5">
                {productsData.map((product) => (
                  <div key={product.id} className="min-w-[200px] bg-[#E8FFEA] p-4 rounded-xl">
                    <div className="relative mb-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-24 rounded-lg object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-[#FF943B] text-white text-xs px-3 py-1 rounded-l-md">
                        {product.rank}
                      </div>
                    </div>
                    <div className="space-y-2">
                    <p className="text-sm text-[#364A15]">{product.name}</p>
                      <div className="flex gap-1">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} size={14} className="text-[#1AC84B] fill-[#1AC84B]"/>
                        ))}
                      </div>
                      <div className="text-xs text-[#00B42A]">{product.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shop Discount Section */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-[#364A15] mb-4">Shop discount</h2>
              <div className="space-y-4">
                {discountItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 border-b border-gray-100 pb-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <span className="text-sm text-[#364A15]">{item.name}</span>
                      <p className="text-xs text-[#364A15] opacity-60">{item.weight}</p>
                    </div>
                    <span className="text-sm text-[#364A15]">{item.discount}</span>
                  </div>
                ))}
                <button className="w-full py-2 bg-[#D2F4D6] rounded-full text-sm text-[#364A15]">
                  View all
                </button>
              </div>
            </div>

            {/* Sales Chart */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-[#364A15] mb-4">Sales</h2>
              <div className="bg-white rounded-xl p-4">
                <div className="flex gap-2 mb-6">
                  {['Today', 'This week', 'This month'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveTimeFilter(filter)}
                      className={`px-4 py-2 rounded-full text-sm border ${
                        activeTimeFilter === filter 
                          ? 'bg-[#D2F4D6] border-[#364A15]' 
                          : 'border-[#364A15]'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                
                <div className="h-40 flex items-end gap-4">
                  {salesData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gray-100 rounded-t"
                        style={{ height: `${data.value}%` }}
                      />
                      <div className="text-center">
                        <p className="text-xs text-gray-600">{data.date.split(' ')[0]}</p>
                        <p className="text-xs text-gray-500">{data.date.split(' ')[1]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-8 mb-24">
              <h2 className="text-lg font-medium text-[#364A15] mb-4">Reviews</h2>
              <div className="bg-white rounded-xl p-4">
                <select className="w-full border rounded-lg px-4 py-2 mb-4 text-sm">
                  <option>Hot reviews</option>
                </select>
                
                <div className="space-y-4">
                  {[1, 2].map((review) => (
                    <div key={review} className="bg-[#E8FFEA] rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <img src="/api/placeholder/40/40" alt="User" className="w-8 h-8 rounded-full"/>
                        <span className="text-sm text-[#364A15]">Leng wan shi</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} size={14} className="text-[#1AC84B] fill-[#1AC84B]"/>
                          ))}
                        </div>
                        <p className="text-sm text-[#364A15]">
                          Good product Good service! I will also try other Halal product now!!
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {renderBottomNavigation()}
      </div>
    );
  }

  // List View
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="px-5 py-4">
        <div className="flex justify-between items-center mb-4">
          <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden">
            <img 
              src="/api/placeholder/56/56" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>

        <div className="relative mb-4">
          <div className="relative w-[290px] h-[50px] mx-auto">
            <input
              type="text"
              placeholder="Enter name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-full pl-12 pr-12 rounded-[223.529px] bg-[#E5FAE6] border border-[#364A15] text-sm font-light focus:outline-none"
              style={{ fontFamily: 'FONTSPRING DEMO - Lufga Light' }}
            />
            <div className="absolute left-4 top-[15px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#364A15" strokeWidth="0.735294"/>
                <path d="M15 15L19 19" stroke="#364A15" strokeWidth="0.735294"/>
              </svg>
            </div>
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-4 w-[17.65px] h-[17.65px]"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="#364A15" strokeWidth="0.735294"/>
                </svg>
              </button>
            )}
            {searchTerm && (
              <div className="absolute left-[60.29px] top-[33.35px] w-[188.97px] border-t border-[#364A15] opacity-50"></div>
            )}
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-200 mb-6">Shop list</h1>

        {/* Categories and Status */}
        <div className="flex justify-between items-center mb-6">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-evenly w-[101px] h-[39px] bg-[#D2F4D6] rounded-3xl px-2 py-1.5 hover:bg-[#c0edc6] transition-colors"
            >
              <span className="text-[10px] text-[#364A15]">
                {categories.find(cat => cat.id === activeCategory)?.label || 'View All'}
              </span>
              <svg 
                width="8" 
                height="5" 
                viewBox="0 0 8 5" 
                fill="none" 
                className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1 1L4 4L7 1" stroke="#364A15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute w-[101px] bg-white border border-[#364A15] rounded-3xl -mt-[1px] z-10 overflow-hidden">
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`
                      w-full h-[39px] flex items-center justify-center
                      text-[10px] text-[#364A15] hover:bg-[#f8f8f8]
                      transition-colors border-b border-[#364A15] border-opacity-10
                      ${index === categories.length - 1 ? 'border-b-0' : ''}
                      ${category.id === activeCategory ? 'bg-[#D2F4D6]' : ''}
                    `}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="flex items-center justify-center px-6 py-3 bg-[#2F2F2F] rounded-md">
            <div className="w-3 h-3 bg-[#D2F4D6] border border-[#F1F1F1] rounded-full mr-2.5" />
            <span className="text-xs font-medium text-[#F1F1F1]">Active</span>
          </button>
        </div>
      </div>

      {/* Shop Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {visibleShops.map((shop) => (
          <div key={shop.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <img 
                    src={shop.logo}
                    alt={shop.name}
                    className="w-[109px] h-[67px] rounded-[14.5px] object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base leading-[21px] text-[#364A15]">
                      {shop.name}
                    </h3>
                    <span className="text-xs leading-[17px] tracking-[0.02em] text-[#364A15]">
                      {categories.find(cat => cat.id === shop.category)?.label || shop.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <button className="w-[50px] h-[50px] rounded-[24px] border border-[#364A15] flex items-center justify-center hover:bg-gray-50">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#364A15">
                      <path d="M7.5 8.5v6M12.5 8.5v6M3.5 5.5h13M5 5.5V16a2 2 0 002 2h6a2 2 0 002-2V5.5M8 3.5h4" strokeWidth="1"/>
                    </svg>
                  </button>
                  <button className="w-[50px] h-[50px] rounded-[24px] border border-[#364A15] flex items-center justify-center hover:bg-gray-50">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#364A15">
                      <path d="M9.5 10l2 2 4-4M3 11a8 8 0 1016 0 8 8 0 00-16 0z" strokeWidth="1"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center text-xs text-[#364A15] gap-4">
                <span className="min-w-[46px]">Owner :</span>
                <span>{shop.owner}</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-[#364A15] min-w-[48px]">Review :</span>
                <div className="flex items-end gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${i < shop.rating ? 'fill-[#1AC84B] text-[#1AC84B]' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] leading-[13px] tracking-[0.02em] text-[#364A15]/50">
                    {shop.reviews} Review</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-[#364A15] min-w-[44px]">Status :</span>
                <div className="flex items-center justify-center px-6 py-3 bg-[#2F2F2F] rounded-md">
                  <div className="w-3 h-3 bg-[#D2F4D6] border border-[#F1F1F1] rounded-full mr-2.5" />
                  <span className="text-xs font-medium text-[#F1F1F1]">
                    {shop.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              <div className="flex justify-between gap-4 mt-2">
                <button 
                  onClick={() => handleVisit(shop.id)}
                  className="flex-1 h-9 bg-[#DEF9EC] rounded-lg text-xs text-[#364A15] hover:bg-[#cceeda]"
                >
                  Visit
                </button>
                <button 
                  className="flex-1 h-9 bg-[#DEF9EC] rounded-lg text-xs text-[#364A15] hover:bg-[#cceeda]"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center p-4 mb-20">
          <button 
            onClick={handleLoadMore}
            className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-full hover:bg-gray-50"
          >
            <span className="text-sm text-gray-600">Load more</span>
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {/* Bottom Navigation */}
      {renderBottomNavigation()}
    </div>
  );
};

export default MergedShopComponent;
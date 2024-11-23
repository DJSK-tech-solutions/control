import React, { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import TimeFilterDropdown from './TimeFilterDropdowns.tsx';
// SVG Components
const ArrowUpDowns = () => (
  <svg width="18" height="31" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 20.125L9 24.625L4.5 20.125H13.5Z" fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M4.5 10.875L9 6.375L13.5 10.875L4.5 10.875Z" fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const ExportCSVIcon = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_6989)">
      <path d="M2.19678 6.79313V4.78164C2.19678 4.35485 2.36632 3.94555 2.6681 3.64376C2.96988 3.34198 3.37919 3.17244 3.80597 3.17244H6.9439C7.21303 3.1698 7.47852 3.23471 7.71608 3.36122C7.95363 3.48772 8.15566 3.67179 8.30367 3.89658L8.9554 4.8621C9.10192 5.08459 9.3014 5.26723 9.53592 5.39362C9.77044 5.52 10.0327 5.58619 10.2991 5.58623H16.6795C17.1063 5.58623 17.5156 5.75577 17.8174 6.05756C18.1192 6.35934 18.2887 6.76864 18.2887 7.19543V15.2414C18.2887 15.6682 18.1192 16.0775 17.8174 16.3793C17.5156 16.6811 17.1063 16.8506 16.6795 16.8506H3.80597C3.44054 16.8622 3.08206 16.7489 2.78956 16.5296C2.49707 16.3102 2.288 15.9978 2.19678 15.6437M2.19678 11.2184H10.2428" stroke="#364A15" strokeWidth="1.6092" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.61057 8.8042L2.19678 11.218L4.61057 13.6318" stroke="#364A15" strokeWidth="1.6092" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_1_6989">
        <rect width="19.3103" height="19.3103" fill="white" transform="translate(0.586914 0.758789)"/>
      </clipPath>
    </defs>
  </svg>
);

// Button Component
const Button = ({ children, icon, endIcon, variant = 'default', onClick }) => {
  const variants = {
    default: "bg-white border border-gray-500 text-gray-700 hover:bg-gray-50",
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

// Rating Component
const Rating = ({ value }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < value ? 'text-green-500 fill-green-500' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>
  );
};

const TrendChart = ({ value }) => (
  <div className="flex items-center gap-2">
    <svg className="w-full h-6" viewBox="0 0 100 24">
              {/* Background line */}
              <path
                d="M0 20 L10 18 L20 19 L30 17 L40 18 L50 16 L60 17 L70 15 L80 16 L90 10 L100 8"
                fill="none"
                stroke="#E8FFEA"
                strokeWidth="2"
              />
              {/* Animated foreground line */}
              <path
                d="M0 20 L10 18 L20 19 L30 17 L40 18 L50 16 L60 17 L70 15 L80 16 L90 10 L100 8"
                fill="none"
                stroke="#1AC84B"
                strokeWidth="1"
                strokeDasharray="200"
                strokeDashoffset="200"
                className="animate-draw-line"
              />
              {/* Animated end dot */}
              <circle 
                cx="100" 
                cy="8" 
                r="2" 
                fill="#1AC84B"
                className="animate-fade-in"
              />
            </svg>
    <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
      <ArrowRight size={12} className="text-green-600" />
      <span className="text-green-600 text-sm">{value}</span>
    </div>
  </div>
);

// Main ProductList Component
const ProductList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'ranking', direction: 'asc' });
  const [selectedTime, setSelectedTime] = useState('Week');
  const [currentPage] = useState(1);
  const itemsPerPage = 5;

  const products = [
    {
      id: 1,
      ranking: 1,
      name: "Korean fresh potato 3kg",
      category: "Vegetable",
      owner: "Vegan Mart",
      verified: true,
      rating: 5,
      trend: "+12%",
      image: "/api/placeholder/40/40"
    },
    {
      id: 2,
      name: "Halal Chicken",
      category: "Halal Meat",
      owner: "Vegan Mart", 
      verified: true,
      rating: 5,
      trend: "+12%",
      ranking: 2,
      image: "/api/placeholder/40/40"
    },
    {
      id: 3,
      name: "Halal Lamb",
      category: "Halal Meat", 
      owner: "Vegan Mart",
      verified: true,
      rating: 5,
      trend: "+12%",
      ranking: 3,
      image: "/api/placeholder/40/40"
    },
    {
      id: 4,
      name: "Fresh Vegetables",
      category: "Vegetable",
      owner: "Vegan Mart", 
      verified: true,
      rating: 5,
      trend: "+12%",
      ranking: 4,
      image: "/api/placeholder/40/40"
    },
    {
      id: 5,
      name: "Organic Rice",
      category: "Grains",
      owner: "Vegan Mart", 
      verified: true,
      rating: 5,
      trend: "+12%",
      ranking: 5,
      image: "/api/placeholder/40/40"
    },
    {
      id: 6,
      name: "Organic Rice",
      category: "Grains",
      owner: "Vegan Mart", 
      verified: true,
      rating: 5,
      trend: "+12%",
      ranking: 6,
      image: "/api/placeholder/40/40"
    },
    {
      id: 7,
      name: "Organic Rice",
      category: "Grains",
      owner: "Vegan Mart", 
      verified: true,
      rating: 5,
      trend: "+12%",
      ranking: 7,
      image: "/api/placeholder/40/40"
    },
    {
      id: 8,
      name: "Organic Rice",
      category: "Grains",
      owner: "Vegan Mart", 
      verified: true,
      rating: 5,
      trend: "+12%",
      ranking: 8,
      image: "/api/placeholder/40/40"
    },
    {
      id: 9,
      name: "Organic Rice",
      category: "Grains",
      owner: "Vegan Mart", 
      verified: true,
      rating: 5,
      trend: "+12%",
      ranking: 9,
      image: "/api/placeholder/40/40"
    }
  ];

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: 
        prevConfig.key === key && prevConfig.direction === 'asc' 
          ? 'desc' 
          : 'asc',
    }));
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortConfig.direction === 'asc') {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    }
    return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  });

  const handleExportCSV = () => {
    const headers = ['Ranking', 'Name', 'Category', 'Owner', 'Rating', 'Trend'];
    const csvData = sortedProducts.map(product => [
      product.ranking,
      product.name,
      product.category,
      product.owner,
      product.rating,
      product.trend
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'product_list.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculate pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="w-[1230px] h-[514px]">
      <div className="px-6 py-5 ml-1 mt-0">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Details of rating</h2>
        <div className="flex justify-between items-center ">
          <TimeFilterDropdown 
            selectedTime={selectedTime}
            onTimeChange={setSelectedTime}
          />
          <Button 
            endIcon={<ExportCSVIcon />}
            onClick={handleExportCSV}
          >
            Export in CSV
          </Button>
        </div>
      </div>

      <div className="overflow-y-auto bg-white rounded-3xl border border-gray-500  ml-6">
        <table className="w-full">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th 
                className="px-6 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
                onClick={() => handleSort('ranking')}
              >
                <div className="flex items-center gap-2">
                  Ranking
                  <ArrowUpDowns />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Image</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Item</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Owner</th>
            
              <th 
                className="px-6 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
                onClick={() => handleSort('rating')}
              >
                <div className="flex items-center gap-2">
                  Rating
                  <ArrowUpDowns />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
                onClick={() => handleSort('trend')}
              >
                <div className="flex items-center gap-2">
                  Sales trend
                  <ArrowUpDowns />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium text-gray-500">
                    {product.ranking}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="w-8 h-8 rounded" />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-700">{product.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{product.category}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{product.owner}</td>
                {/* <td className="px-6 py-4">
                 
                </td> */}
                <td className="px-6 py-4">
                  <Rating value={product.rating} />
                </td>
                <td className="px-6 py-4">
                  <TrendChart value={product.trend} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
    </div>
  );
};

export default ProductList;
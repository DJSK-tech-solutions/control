import React, { useState } from 'react';
import { Package, User, ChevronDown, ArrowUpRight, Users, ArrowDownRight, DollarSign } from 'lucide-react';
import ProductList from '../components/ui/ProductLists.tsx';
import Sidebar from '../components/sidebar.tsx';
import { useNavigate } from 'react-router-dom';

// SVG Components remain exactly the same
const UpArrowButton = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="white" fillOpacity="0.5" />
        <rect x="0.32" y="0.32" width="31.36" height="31.36" rx="15.68" stroke="black" strokeOpacity="0.1" strokeWidth="0.64" />
        <path d="M18.466 17.0541L18.466 13.5324L14.9442 13.5324" stroke="#222222" strokeWidth="0.615385" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 15.9966L18.4165 13.5801" stroke="#222222" strokeWidth="0.615385" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.534 18.4626L14.8481 17.1484" stroke="#222222" strokeWidth="0.615385" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


const NextButton = () => (
    <svg width="38" height="38" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_14228)">
            <g filter="url(#filter0_bd_1_14228)">
                <circle cx="38" cy="38" r="38" fill="white" fillOpacity="0.8" shapeRendering="crispEdges" />
            </g>
            <g clipPath="url(#clip1_1_14228)">
                <path fillRule="evenodd" clipRule="evenodd" d="M42.6334 37.1155C42.8678 37.3499 42.9994 37.6678 42.9994 37.9992C42.9994 38.3307 42.8678 38.6486 42.6334 38.883L35.5622 45.9542C35.4469 46.0736 35.309 46.1689 35.1565 46.2344C35.0039 46.2999 34.8399 46.3344 34.6739 46.3358C34.508 46.3373 34.3434 46.3056 34.1898 46.2428C34.0361 46.1799 33.8966 46.0871 33.7792 45.9697C33.6618 45.8524 33.569 45.7128 33.5062 45.5592C33.4433 45.4056 33.4117 45.241 33.4131 45.075C33.4146 44.909 33.4491 44.745 33.5146 44.5925C33.5801 44.44 33.6753 44.3021 33.7947 44.1867L39.9822 37.9992L33.7947 31.8117C33.567 31.576 33.441 31.2602 33.4439 30.9325C33.4467 30.6048 33.5782 30.2912 33.8099 30.0595C34.0417 29.8277 34.3552 29.6963 34.6829 29.6934C35.0107 29.6906 35.3264 29.8166 35.5622 30.0442L42.6334 37.1155Z" fill="#364A15" />
            </g>
        </g>
        <defs>
            <filter id="filter0_bd_1_14228" x="-10" y="-10" width="96" height="98" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_14228" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect1_backgroundBlur_1_14228" result="effect2_dropShadow_1_14228" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_14228" result="shape" />
            </filter>
            <clipPath id="clip0_1_14228">
                <rect width="76" height="76" fill="white" />
            </clipPath>
            <clipPath id="clip1_1_14228">
                <rect width="30" height="30" fill="white" transform="translate(23 23)" />
            </clipPath>
        </defs>
    </svg>
);

// Rating Components remain exactly the same
const RatingStars = () => (
    <div className="flex gap-0.5 mt-1">
        {[1, 2, 3, 4].map(i => (
            <svg key={i} className="w-4 h-4 text-[#1AC84B]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
        <svg className="w-4 h-4 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    </div>
);

const ReviewStars = () => (
    <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
            <svg key={i} className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
    </div>
);

// Card Components
const MetricCard = ({ title, value, change, icon: Icon, variant = 'default', showArrow = true }) => {
    const getCardStyles = () => {
        switch (variant) {
            case 'success':
                return 'bg-[#E8FFEA] border border-[#364A15]';
            case 'danger':
                return 'bg-white';
            default:
                return 'bg-white';
        }
    };

    const getTrendStyles = () => {
        if (change > 0) {
            return change === 8.8
                ? 'bg-[#364A15] text-white'
                : 'bg-[#E8FFEA] text-[#364A15]';
        }
        return 'bg-[#FFECE8] text-[#F53F3F]';
    };

    return (
        <div className={`flex flex-col p-4 rounded-2xl ${getCardStyles()} ${variant === 'success' ? 'border-2' : ''
            }`}>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <Icon className="w-6 h-6 text-[#364A15]" strokeWidth={1.5} />
                    <span className="text-[#364A15] text-lg font-normal">
                        {title}
                    </span>
                </div>
                {showArrow && <UpArrowButton />}
            </div>

            <div className="flex justify-between items-end">
                <div className="text-[#364A15] text-[28px] font-bold">
                    {title === 'Current Revenue' ? (
                        <span className="text-[#364A15]">
                            ${Number(value).toLocaleString()}.00
                        </span>
                    ) : (
                        <span className="text-[#364A15]">
                            {Number(value).toLocaleString()}
                        </span>
                    )}
                </div>
                <div className={`px-3 py-0.5 rounded-full flex items-center gap-1 ${getTrendStyles()}`}>
                    {change > 0 ? '↑' : '↓'} {Math.abs(change)}%
                </div>
            </div>
        </div>
    );
};

// Modified ProductCard with border
const ProductCard = ({ item = {} }) => {
    // Default values and type checking
    const rankingStyles = {
        'Top 1': 'bg-[#FFA940] text-white',
        'No.2': 'bg-gray-200 text-gray-700',
        'No.3': 'bg-gray-200 text-gray-700'
    };

    const getLabelStyle = (label: string | number) => {
        return rankingStyles[label] || 'bg-gray-200 text-gray-700';
    };

    return (
        <div className="bg-white rounded-3xl p-3 border border-gray-200 hover:border-[#143820] transition-colors duration-200 relative ">
            {/* Ranking Label - Only show if label exists */}
            {item.label && (
                <div className={`absolute right-2 top-2 px-2 py-0.5 rounded-full text-xs font-medium ${getLabelStyle(item.label)}`}>
                    {item.label}
                </div>
            )}

            <img
                src={item.image || "/api/placeholder/200/200"}
                alt={item.title || "Product"}
                className="w-full h-24 object-cover rounded-lg mb-2"
            />
            <div className="space-y-1">
                <h3 className="text-sm font-medium text-[#364A15]">
                    {item.title || "Product Title"}
                </h3>
                <p className="text-xs text-gray-500">
                    {item.category || "Category"}
                </p>
                <p className="text-[10px] text-gray-400">
                    {item.seller || "Seller"}
                </p>

                {/* Trend Section */}
                <div className="mt-2">
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Ranking trend</span>
                        <span className="text-xs text-green-500">+12%</span>
                    </div>
                    <div className="relative w-full h-6 mt-1">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes drawLine {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-draw-line {
    animation: drawLine 1.5s ease-out forwards;
  }

  .animate-fade-in {
    opacity: 0;
    animation: fadeIn 0.3s ease-out forwards;
    animation-delay: 1.2s;
  }
`;
document.head.appendChild(style);

const ReviewCard = ({ review }) => (
    <div className="relative bg-[#E8FFEA] w-[229px] h-[297px] rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
            <img
                src={review.avatar}
                alt={review.name}
                className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-[#364A15] font-medium">{review.name}</span>
        </div>

        <div className="space-y-2">
            <div className="flex justify-between text-xs text-[#364A15]/60">
                <span>Item</span>
                <span>Owner</span>
            </div>

            <div className="flex justify-between text-sm text-[#364A15] font-medium">
                <span>{review.item}</span>
                <span>{review.owner}</span>
            </div>

            <div className="pt-4 border-t border-[#364A15]/10">
                <div className="text-xs text-[#364A15]/60 mb-0.5">Rating</div>
                <ReviewStars />
            </div>

            <div>
                <div className="text-xs text-[#364A15]/60 mb-0.5">Reviews</div>
                <p className="text-xs text-[#364A15] line-clamp-2">{review.text}</p>
            </div>
        </div>

        <button className="absolute left-1/2 bottom-4 -translate-x-1/2 p-1.5 rounded-full bg-white">
            <ArrowUpRight className="w-4 h-4 text-[#364A15]" />
        </button>
    </div>
);

// Main Dashboard Component remains the same
const Dashboard = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('reports');
    const navigate = useNavigate();
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

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
            isPositive: true
        },
        {
            id: 'Rating',
            title: 'Rating',
            icon: <Users className="w-5 h-5 text-gray-700" />,
            value: '204,450',
            growth: '+8.8%',
            isPositive: false,
            isSelected: true
        }
    ];

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

    const reviews = [
        {
            avatar: "/api/placeholder/40/40",
            name: "Leng wan shi",
            item: "Halal Lamb",
            owner: "Halal market inter...",
            text: "Good product Good service ! I will also try other Halal product now !! Do you guys have other ..."
        },
        {
            avatar: "/api/placeholder/40/40",
            name: "Ahmad Hassan",
            item: "Fresh Vegetables",
            owner: "Halal market inter...",
            text: "Excellent quality and fast delivery. The vegetables were fresh and properly packed. Will order again!"
        }
    ];


    const handleMetricClick = (id) => {
        navigate(`/${id}`);
      };

    const handleNextReview = () => {
        setCurrentReviewIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex min-h-screen bg-gray-50 ml-3 mr-3 mb-3">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className={`flex-1 ${isSidebarExpanded ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
                <div className="p-8">
                    <h1 className="text-4xl font-medium text-[#364A154D] mb-6">Report</h1>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Category</h1>

                    {/* Category Cards */}
                    <div className="grid grid-cols-3 gap-9 mb-1 w-[895px] h-[126px] ">
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

                {/* Ranking and Reviews Section */}
                <div className="flex justify-between mb-4 mt-0 w-[1174px] ml-8">
                    <h2 className="text-lg font-medium text-[#364A15]">Ranking</h2>
                </div>

                <div className="flex gap-4 w-[1174px] ml-8">
                    {/* Ranking Section */}
                    <div className=" ">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-500 w-[841px] h-[385px]">
                            <div className="flex gap-4 p-14">
                                <div className="w-60">
                                    <div className="mb-4">
                                        <h3 className="text-[#364A15]/60 text-sm font-normal mb-2">Platform</h3>
                                        <button className="flex items-center gap-1 text-[#364A15] text-base font-medium">
                                            <span>Mobile App</span>
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="bg-[#E8FFEA] rounded-xl p-4 space-y-4">
                                        <div>
                                            <p className="text-[#364A15]/60 text-sm">Total Rated items</p>
                                            <p className="text-[#364A15] text-lg font-medium mt-1">134,495</p>
                                        </div>

                                        <div>
                                            <p className="text-[#364A15]/60 text-sm">Average rating</p>
                                            <RatingStars />
                                        </div>

                                        <div>
                                            <p className="text-[#364A15]/60 text-sm">Most rated category</p>
                                            <p className="text-[#364A15] text-lg font-medium mt-1">Halal chicken</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-[#364A15]/60 text-sm">Most sold items (Top3)</h3>
                                        <select className="border rounded-full px-6 py-1 text-xs text-[#364A15] bg-white">
                                            <option>Overall</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3">
                                        {products.map((item, idx) => (
                                            <ProductCard key={idx} item={item} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="w-[339px] h-[386px]">
                        <div className="bg-white h-[386px] border rounded-3xl shadow-sm  border border-gray-500">
                            <div className="p-6">
                                <h2 className="text-lg font-medium text-[#9A9EA4] mb-4">Hot reviews</h2>
                                <div className="relative w-full overflow-visible">
                                    <div
                                        className="flex transition-transform duration-300 ease-in-out"
                                        style={{
                                            transform: `translateX(-${currentReviewIndex * 229}px)`
                                        }}
                                    >
                                        {reviews.map((review, idx) => (
                                            <div
                                                key={idx}
                                                className={`transition-opacity duration-300 ease-in-out mr-4 ${idx === currentReviewIndex ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                            >
                                                <ReviewCard review={review} />
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={handleNextReview}
                                        className="absolute top-1/2 -right-[38px] -translate-y-1/2 cursor-pointer"
                                        style={{ zIndex: 10 }}
                                    >
                                        <NextButton />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductList />
            </div>
        </div>
    );
};

export default Dashboard;
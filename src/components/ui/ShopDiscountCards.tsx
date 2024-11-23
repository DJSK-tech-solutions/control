import React from "react";

const ShopDiscountCard = () => {
    const products = [
      { image: "/api/placeholder/52/52", name: "Fresh potato 3kg", discount: "5%" },
      { image: "/api/placeholder/52/52", name: "Fresh tomato 3kg", discount: "5%" },
      { image: "/api/placeholder/52/52", name: "Fresh cucumber 2kg", discount: "5%" }
    ];
  
    return (
      <div className="relative">
        <h2 className="text-[#364A15] text-xl mb-4 font-['Lufga']">Shop discount</h2>
        <div className="relative w-[296px] h-[392px] bg-white rounded-[26px] shadow-sm">
          <div className="absolute w-full px-4 top-8">
            <div className="grid grid-cols-3 text-[#364A15] font-['Lufga'] text-xs">
              <span className="pl-[8px]">Item image</span>
              <span>Item name</span>
              <span className="text-right pr-4">% of discount</span>
            </div>
          </div>
          <div className="absolute left-[10px] top-[60px] flex flex-col gap-4 w-[275px]">
            {products.map((product, index) => (
              <div key={index} className="box-border w-[275px] h-[66px] border border-[rgba(54,74,21,0.18)] rounded-[10px] relative bg-white grid grid-cols-3 items-center">
                <div className="pl-3">
                  <img src={product.image} alt={product.name} className="w-[52px] h-[52px] rounded-[1.75px]" />
                </div>
                <div>
                  <span className="font-normal text-xs leading-4 text-[#364A15] font-['Lufga']">
                    {product.name}
                  </span>
                </div>
                <div className="text-right pr-4">
                  <span className="font-normal text-xs leading-4 text-[#364A15] font-['Lufga']">
                    {product.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-5 w-[93px]">
            <button className="w-full h-[37px] bg-[#D2F4D6] rounded-[26px] flex items-center justify-center">
              <span className="text-sm text-[#364A15] font-['Lufga']">View all</span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default ShopDiscountCard ;
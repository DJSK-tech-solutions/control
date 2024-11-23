import React, { useState } from 'react';
const ReviewCard = ({ avatar, name, item, owner, rating, review }) => (
  <div className="bg-[#E8FFEA] rounded-[26px] w-[229px] h-[297px] p-4 relative">
    <div className="flex items-center gap-2 mb-4">
      <img src={avatar} alt="Avatar" className="rounded-full border border-[#D2F4D6] w-[30px] h-[30px]" />
      <div>
        <div className="text-xs text-[#364A15]">{name}</div>
        <div className="text-xs text-[#364A15] flex items-center gap-1">
          <span>{item}</span>
          <svg className="w-4 h-4 text-[#364A15]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M7.5 4v4M16.5 4v4M4 8.5h16M4 13h16M4 17.5h16" />
          </svg>
        </div>
      </div>
    </div>
    <div className="border-t border-[rgba(34,34,34,0.1)] my-4" />
    <div className="flex justify-between mt-2">
      <div>
        <div className="text-[10px] text-[rgba(54,74,21,0.5)]">Item</div>
        <div className="text-xs text-[#364A15]">{item}</div>
      </div>
      <div>
        <div className="text-[10px] text-[rgba(54,74,21,0.5)]">Owner</div>
        <div className="text-xs text-[#364A15]">{owner}</div>
      </div>
    </div>
    <div className="mt-4">
      <div className="text-[10px] text-[rgba(54,74,21,0.5)] mb-1">Rating</div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-[14px] h-[14px] ${i < rating ? 'fill-[#1AC84B]' : 'fill-none stroke-[rgba(54,74,21,0.2)]'}`} viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        ))}
      </div>
    </div>
    <div className="mt-4">
      <div className="text-[10px] text-[rgba(54,74,21,0.5)] mb-1">Reviews</div>
      <div className="text-xs text-[#364A15] leading-6 mb-4">{review}</div>
      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[32px] h-[32px] bg-[rgba(255,255,255,0.5)] border border-[rgba(0,0,0,0.1)] rounded-full flex justify-center items-center rotate-45">
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>
);

const Reviews = () => {
    const reviews = [
      {
        avatar: '/api/placeholder/30/30',
        name: 'Leng wan shi',
        item: 'Halal Lamb', 
        owner: 'Halal market inter...',
        rating: 5,
        review: 'Good product Good service ! I will also try other Halal product now',
      },
      {
        avatar: '/api/placeholder/30/30',
        name: 'Leng wan shi',
        item: 'Halal Lamb',
        owner: 'Halal market inter...',
        rating: 4,
        review: 'Good product Good service ! I will also try other Halal product now',
      },
      {
        avatar: '/api/placeholder/30/30',
        name: 'Leng wan shi',
        item: 'Halal Lamb',
        owner: 'Halal market inter...',
        rating: 3,
        review: 'Good product Good service ! I will also try other Halal product now',
      },
    ];
  
    return (
      <div>
        <h2 className="text-xl font-medium text-[#364A15] mb-8">Reviews</h2>
        <div className="bg-[rgba(255,255,255,0.5)] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] rounded-[16px] p-4 w-[764px] h-[406px] relative">
          <div className="border border-[#D2D2D2] rounded-3xl px-4 py-2 flex justify-between items-center w-[188px] mb-4">
            <div className="text-xl text-[#364A15]">Hot reviews</div>
            <svg className="w-5 h-5 text-[#364A15]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <div className="flex gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
          <button className="absolute top-0 right-0 w-[50px] h-[50px] bg-[rgba(255,255,255,0.5)] border border-[rgba(0,0,0,0.1)] rounded-[32px] flex justify-center items-center rotate-45">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>  
          </button>
        </div>
      </div>
    );
  };
  export default Reviews;
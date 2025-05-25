import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart, FaUser } from "react-icons/fa";
import { CgArrowsExchange } from "react-icons/cg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdPhotoLibrary } from "react-icons/md";

const PropertyCard = ({ property }) => {
    const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="min-w-[280px] max-w-[280px] bg-white rounded-xl shadow-md overflow-hidden relative">
      <div className="relative w-full h-44">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: `.next-${property.id}`,
            prevEl: `.prev-${property.id}`,
          }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {(property.images.length > 0
            ? property.images
            : ["/placeholder.jpg"]
          ).map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Slide ${idx}`}
                className="w-full h-44 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {property.verified && (
          <span className="absolute top-4 bg-green-600 text-white text-xs px-4 py-0.5 rounded-br-2xl z-20">
            Verified
          </span>
        )}
        {property.images.length > 1 && (
          <span className="absolute top-4 right-2 z-20 bg-gray-800/80 text-white p-1 rounded-md text-sm">
            <MdPhotoLibrary className="text-base" />
          </span>
        )}

        <button
          className={`prev-${property.id} absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 p-1 rounded-full`}
        >
          <FiChevronLeft />
        </button>
        <button
          className={`next-${property.id} absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 p-1 rounded-full`}
        >
          <FiChevronRight />
        </button>
      </div>

<div className="p-4 pb-3 ">
  {/* Title */}
  <h3 className="text-sm font-semibold truncate mb-1">{property.title}</h3>

  <div className="flex justify-between items-start text-sm">
    <div>
      <span className="text-blue-700 font-bold">
        AED {property.price.toLocaleString()}
      </span>
      <div className="text-[10px] text-gray-500">AED 5/sqft</div>
    </div>
    <div className="w-px h-8 bg-gray-300 mx-3"></div>
    <div className="text-left">
      <span className="text-black font-medium">{property.sqft} sq.ft</span>
      <div className="text-[10px] text-gray-500">Super Built up Area</div>
    </div>
  </div>

  <ul className="flex flex-wrap gap-2 text-[11px] text-gray-600 mt-3 list-disc list-inside">
    <li>{property.condition}</li>
    <li>{property.type}</li>
    <li>{property.bedrooms}Bhk</li>
  </ul>

  <div className="flex items-start text-[10px] text-gray-600 mt-3">
    <div className="w-6 h-6 rounded-sm bg-gray-400 flex items-center my-1 justify-center text-black text-[10px] mr-2">
      <FaUser />
    </div>
    <div>
      <p>
        Dealer.{" "}
        {(() => {
          const postedDate = new Date(property.posted);
          const now = new Date();
          const diffInWeeks = Math.floor((now - postedDate) / (1000 * 60 * 60 * 24 * 7));
          return `${diffInWeeks}w ago`;
        })()}
      </p>
      <p className="font-semibold text-black">{property.seller?.name}</p>
    </div>
  </div>
</div>

<div className="border-t border-gray-200 my-1 mx-4" />

<div className="flex justify-between items-center px-4 py-2 text-sm">
  <div className="flex items-center text-gray-700 truncate">
    <span className="text-lg mr-1">
        <IoLocationSharp />
    </span>
    <span className="truncate text-[10px]">{property.address}</span>
  </div>
  <div className="flex gap-1">
  {wishlisted ? (
  <FaHeart
    className="text-red-600 text-sm cursor-pointer transition"
    onClick={() => setWishlisted(false)}
  />
) : (
  <FiHeart
    className="text-gray-600 text-sm cursor-pointer transition"
    onClick={() => setWishlisted(true)}
  />
)}

  <CgArrowsExchange className="text-xl text-gray-600 cursor-pointer" />
  </div>
</div>

      </div>
    
  );
};

export default PropertyCard;

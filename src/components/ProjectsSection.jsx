import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import noresult from "../assets/no-result.png";
import PropertyCard from "./PropertyCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

const cities = ["Abhu Dhabi", "Dubai", "Sharjah", "Ajman", "Ras Al Khaima"];

const ProjectsSection = ({ searchQuery = "", propertyType = "" }) => {
  const [activeCity, setActiveCity] = useState("");
  const [properties, setProperties] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const swiperRef = useRef(null);

  useEffect(() => {
   const fetchProperties = async () => {
  try {
    setIsLoading(true);

    const url = "https://staging.thunderscript.com/api/properties";
    const proxy = "http://localhost:8080/";
    const res = await axios.get(proxy + url);
    let result = res.data || [];

    const keyword = searchQuery?.trim().toLowerCase();
    const city = activeCity?.trim().toLowerCase();

    // 🔍 Filter by search keyword
    if (keyword) {
      result = result.filter(
        (prop) =>
          prop.title?.toLowerCase().includes(keyword) ||
          prop.address?.toLowerCase().includes(keyword) ||
          prop.description?.toLowerCase().includes(keyword)
      );
    }

    // 🌆 Filter by selected city
    if (activeCity) {
      result = result.filter(
        (prop) => prop.address?.toLowerCase().includes(city)
      );
    }

    // 🏡 Filter by property type
    if (propertyType && propertyType.toLowerCase() !== "all") {
      result = result.filter(
        (prop) =>
          prop?.type?.toLowerCase() === propertyType.toLowerCase()
      );
    }

    setProperties(result);
  } catch (err) {
    console.error("Error fetching properties:", err);
    setProperties([]);
  } finally {
    setIsLoading(false);
  }
};


    fetchProperties();
  }, [searchQuery, activeCity, propertyType]);

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto relative">
      <h2 className="text-center text-2xl md:text-5xl font-light mb-6">
        Browse New Projects in the UAE
      </h2>

      {/* City Tabs */}
      <div className="w-full flex justify-center mb-8">
        <div className="inline-flex flex-wrap items-center justify-center rounded-md border border-gray-300 overflow-hidden gap-px">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-4 py-2 text-sm sm:text-base transition rounded-md ${
                activeCity === city
                  ? "bg-[#003366] text-white"
                  : "bg-white text-black"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Property Cards */}
      {properties.length > 0 ? (
        <div className="relative pb-12">
          {showLeftArrow && (
            <button
              className="absolute z-30 top-1/2 left-0 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FiChevronLeft className="text-xl" />
            </button>
          )}

          <button
            className="absolute z-30 top-1/2 right-0 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
            onClick={() => {
              swiperRef.current?.slideNext();
              setShowLeftArrow(true);
            }}
          >
            <FiChevronRight className="text-xl" />
          </button>

          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setShowLeftArrow(swiper.activeIndex > 0)}
            spaceBetween={16}
            grabCursor={true}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4.2 },
            }}
            className="pb-4"
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id} className="h-auto pb-8">
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center py-12">
          <img src={noresult} alt="No results" className="w-32 h-32 mb-4" />
          <p className="text-sm text-gray-600">
            No properties were found matching your criteria.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;

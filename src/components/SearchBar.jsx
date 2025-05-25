import React, { useEffect, useState } from "react";
import { FiSearch, FiMic } from "react-icons/fi";
import { MdMyLocation } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";

const SearchBar = ({ onSearch, onTabChange, onPropertyTypeChange }) => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  // ⏳ Debounce input
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onSearch(query.trim());
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedType(value);
    onPropertyTypeChange(value);
  };

  return (
    <div className="w-full flex justify-center mt-8 px-4 relative">
      <div className="w-full max-w-4xl relative">
        {/* Buy/Rent Tabs */}
        <div className="absolute -top-8 md:-top-10 sm:left-0 z-0 flex gap-[3px]">
          {["Buy", "Rent"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-6 md:px-10 py-2 md:py-3 text-sm font-medium rounded-l rounded-tr-[6px] backdrop-blur-sm transition ${
                activeTab === tab
                  ? "bg-white text-black shadow"
                  : "bg-white/10 text-white/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Container */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full bg-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow px-4 sm:pl-12 py-4 gap-4 sm:gap-6 z-10 relative">
          
          {/* Property Type */}
          <div className="flex items-center text-gray-700 space-x-2">
            <GoHomeFill className="text-xl" />
            <select
              value={selectedType}
              onChange={handleTypeChange}
              className="bg-transparent outline-none text-sm sm:text-base pr-6 text-gray-700"
            >
              <option value="All">Property type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
              <option value="Townhouse">Townhouse</option>
            </select>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-gray-300" />

          {/* Input */}
          <input
            type="text"
            placeholder="Search by location or Property ID..."
            className="flex-1 outline-none bg-transparent text-sm sm:text-base text-gray-800"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch(query.trim());
            }}
          />

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-gray-300" />

          {/* Icons */}
          <div className="flex items-center justify-between space-x-3 text-gray-500">
            <FiMic className="text-xl cursor-pointer" />
            <MdMyLocation className="text-xl cursor-pointer" />
            <button
              className="bg-[#003366] hover:bg-blue-900 text-white p-2 rounded-md"
              onClick={() => onSearch(query.trim())}
            >
              <FiSearch className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

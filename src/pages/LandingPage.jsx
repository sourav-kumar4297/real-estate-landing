import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProjectsSection from "../components/ProjectsSection";
import FeatureCards from "../components/FeatureCards";
import heroBg from "../assets/hero.jpg";

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("All");
  const [activeTab, setActiveTab] = useState("Buy");

  return (
    <main>
      <section
        className="relative bg-cover bg-no-repeat bg-center h-[95vh] text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-light mb-4">
            Find Real Estate and Get Your Dream Space
          </h1>
          <p className="text-base sm:text-lg mb-10 max-w-2xl font-light">
            We help you find the perfect place. Let's get started on your dream home.
          </p>

          <SearchBar
            onSearch={setSearchQuery}
            onPropertyTypeChange={setPropertyType}
            onTabChange={setActiveTab}
          />
        </div>
      </section>

      <FeatureCards />
      <ProjectsSection
        searchQuery={searchQuery}
        propertyType={propertyType}
      />
    </main>
  );
};

export default LandingPage;

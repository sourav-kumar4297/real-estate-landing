import React from 'react';

const regions = ["Abhu Dhabi", "Dubai", "Sharjah", "Ajman", "Ras Al Khaima"];

const RegionTabs = ({ activeRegion, onChangeRegion }) => {
  return (
    <div className="region-tabs">
      {regions.map((region) => (
        <button
          key={region}
          className={region === activeRegion ? "active-tab" : ""}
          onClick={() => onChangeRegion(region)}
        >
          {region}
        </button>
      ))}
    </div>
  );
};

export default RegionTabs;

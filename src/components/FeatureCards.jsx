import React from "react";
import search from "../assets/search1.png";
import TruEstimate from "../assets/truestate.png";
import Mapview from "../assets/mapview.png";

const features = [
  {
    title: "TruEstimate",
    desc: "Find out how much your property is worth",
    image: `${TruEstimate}`,
  },
  {
    title: "Search 2.0",
    desc: "Find homes by drive time",
    image: `${search}`,
  },
  {
    title: "Map View",
    desc: "Search for properties in preferred area using map",
    image: `${Mapview}`,
  },
];

const FeatureCards = () => {
  return (
    <section className="w-full px-4 py-12 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden h-56 md:h-64 lg:h-72 bg-contain bg-center shadow-md hover:shadow-lg transition"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-black/20" />{" "}
            <div className="relative z-10 p-6 text-black">
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm w-[125px]">{item.desc} &rsaquo;</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;

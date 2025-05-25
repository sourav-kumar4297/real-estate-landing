import React from 'react';

const PropertyCard = ({ data }) => {
  return (
    <div className="property-card">
      <img src={data.image || "/placeholder.jpg"} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.price}</p>
      <p>{data.location}</p>
    </div>
  );
};

export default PropertyCard;

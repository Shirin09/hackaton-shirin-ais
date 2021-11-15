import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <h3>{item.artistsName}</h3>
      <h3>{item.price}</h3>
    </div>
  );
};

export default ProductCard;

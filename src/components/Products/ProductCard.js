import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <>
    <Link to={`product/${item.id}`}>
      <div class="product-card">
        <div class="product-img">
          <img src={item.image} height="420" width="327" />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>{item.artistsName}</h1>
            <p>{item.name}</p>
          </div>
          <div class="product-price-btn">
            <p>
              <span>{item.price}</span>$
            </p>
            <button type="button">buy now</button>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
};

export default ProductCard;

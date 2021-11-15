import React, { useContext, useEffect } from "react";
import { productsContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const { getPaintings, paintings } = useContext(productsContext);

  useEffect(() => {
    getPaintings();
  }, []);

  return (
    <div>
      {paintings.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;

import React, { useState, useContext } from "react";
import { productsContext } from "../../context/ProductContext";
import axios from "axios";

const AddProduct = () => {
  const { addPaintings } = useContext(productsContext);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [artistsName, setArtistsName] = useState("");
  const [price, setPrice] = useState("");

  function handleAdd() {
    const product = {
      image,
      name,
      artistsName,
      price,
    };
    addPaintings(product);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="image"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="paintings name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="artist name"
        onChange={(e) => setArtistsName(e.target.value)}
      />
      <input
        type="text"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddProduct;

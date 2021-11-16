import React, { useContext, useState } from 'react';
import { productsContext } from '../../../context/ProductContext';

const EditProducts = () => {

    const {data, editPaintingDetails} = useContext(productsContext);

    

    const [image, setImage] = useState(data.image);
    const [name, setName] = useState(data.name);
    const [artistsName, setArtistsName] = useState(data.artistsName);
    const [price, setPrice] = useState(data.price);
    const [description, setDescription] = useState(data.description)




    function handleEdit(){
        const editedProduct ={
            image,
            name,
            artistsName: artistsName,
            price,
            description
        }
        editPaintingDetails(editedProduct)
    }
    

    return (
        <div>
            <form action="">
        <input
          type="text"
          value={image}
          placeholder="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          value= {name}
          placeholder="paintings name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value= {artistsName}
          placeholder="artist name"
          onChange={(e) => setArtistsName(e.target.value)}
        />
        <input
          type="text"
          placeholder="price"
          value= {price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value= {description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleEdit}>save</button>
      </form>
        </div>
    );
};

export default EditProducts;
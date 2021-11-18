import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { productsContext } from "../../context/ProductContext";
import "./ProductCard.css";

const ProductDetails = () => {
  const { getPaintingDetails, paintingDetails, getData, deletePainting } =
    useContext(productsContext);

  let params = useParams().id;
  useEffect(() => {
    getPaintingDetails(params);
  }, []);

  function handleSave() {
    getData(paintingDetails, params);
  }
  function handleDelete() {
    deletePainting(params);
  }

  const {
    handleLogout,
    user: { email },
    admin,
  } = useAuth();
  console.log({ email });
  console.log(admin);

  return (
    <div>
      {paintingDetails.name ? (
        <div className="details-wrapper">
          <div className="container">
            <div className="content">
              <div className="content-left">
                <img src={paintingDetails.image} />
              </div>
              <div className="content-right">
                <div>
                  <h1>{paintingDetails.artistsName}</h1>
                </div>
                <p>{paintingDetails.name}</p>
                <div>{paintingDetails.description}</div>
                <div>{paintingDetails.price}</div>
                {admin ? (
                  <>
                    <Link to="/">
                      <button onClick={handleDelete}>delete</button>
                    </Link>
                    <Link to="/edit">
                      <button onClick={handleSave}>edit</button>
                    </Link>{" "}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default ProductDetails;

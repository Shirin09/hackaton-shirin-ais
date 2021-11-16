import React, { createContext, useReducer, useState } from "react";
import axios from "axios";
export const productsContext = createContext();

const INIT_STATE = {
  paintings: [],
  paintingDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PAINTINGS":
      return { ...state, paintings: action.payload };
    case "GET_PAINTING_DETAILS":
      return { ...state, paintingDetails: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [data, setData] = useState({});
  const [dataId, setDataId] = useState();

  const getPaintings = async (params="") => { //history
    const { data } = await axios(`http://localhost:8000/paintings/?${params}`);
    dispatch({
      type: "GET_PAINTINGS",
      payload: data,
    });
  };

  async function addPaintings(product) {
    await axios.post(`http://localhost:8000/paintings`, product);
    getPaintings();
  }
  async function getPaintingDetails(id) {
    let { data } = await axios(`http://localhost:8000/paintings/${id}`);
    dispatch({ type: "GET_PAINTING_DETAILS", payload: data });
  }

  function getData(data, id) {
    setData(data);
    setDataId(id);
  }
  async function deletePainting(id) {
    await axios.delete(`http://localhost:8000/paintings/${id}`);
  }

  async function editPaintingDetails(obj) {
    await axios.patch(`http://localhost:8000/paintings/${dataId}`, obj);
    getPaintings();
  }
  return (
    <productsContext.Provider
      value={{
        paintings: state.paintings,
        paintingDetails: state.paintingDetails,
        data,
        getPaintings,
        addPaintings,
        getPaintingDetails,
        getData,
        editPaintingDetails,
        deletePainting,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;

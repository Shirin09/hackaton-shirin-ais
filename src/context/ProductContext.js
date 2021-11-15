import React, { createContext, useReducer } from "react";
import axios from "axios";
export const productsContext = createContext();

const INIT_STATE = {
  paintings: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PAINTINGS":
      return { ...state, paintings: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getPaintings = async () => {
    const { data } = await axios(`http://localhost:8003/paintings`);
    dispatch({
      type: "GET_PAINTINGS",
      payload: data,
    });
  };

  async function addPaintings(product) {
    await axios.post(`http://localhost:8003/paintings`, product);
    getPaintings();
  }

  return (
    <productsContext.Provider
      value={{
        paintings: state.paintings,
        getPaintings,
        addPaintings,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;

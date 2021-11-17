import React, { useContext, useEffect } from "react";
import { productsContext } from "../../context/ProductContext";
import "./Cart.css";

const Cart = () => {
  const { getCart, cart, changeProductCount } = useContext(productsContext);
  console.log(cart);
  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="cart">
      {cart.products ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Count</th>
                <th>SubPrice</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((elem) => (
                <tr key={elem.item.id}>
                  <td>
                    <img src={elem.item.image} alt="product img" />
                  </td>
                  <td>{elem.item.name}</td>
                  <td>{elem.item.price}</td>
                  <td>
                    <input
                      min="0"
                      value={elem.count}
                      type="number"
                      onChange={(e) =>
                        changeProductCount(e.target.value, elem.item.id)
                      }
                    />
                  </td>
                  <td>{elem.subPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: {cart.totalPrice} </h4>
          <button>Купить</button>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Cart;

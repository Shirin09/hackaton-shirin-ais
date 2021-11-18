import React, { useContext, useEffect, useRef } from "react";
import { productsContext } from "../../context/ProductContext";
import CashOut from "./CashOut/CashOut";
import "./Cart.css";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Cart = () => {
  const { getCart, cart, changeProductCount } = useContext(productsContext);
  console.log(cart);
  useEffect(() => {
    getCart();
  }, []);

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <div className="cart">
      {cart.products ? (
        <div>
          <div className="cart-details">
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
            <button onClick={executeScroll} onClick={}>Buy</button>
          </div>
          <div ref={myRef} className="cashout-in-cart">
            <CashOut />
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Cart;

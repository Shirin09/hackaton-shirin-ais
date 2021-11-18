import React, { useContext, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import history from "../../../helpers/history";
import { productsContext } from "../../../context/ProductContext";

const CashOut = () => {
  const { getPaintings } = useContext(productsContext);

  const [memory, setMemory] = useState(() => getMemory());

  function getMemory() {
    const search = new URLSearchParams(history.location.search);
    return search.get("memory");
  }

  function handleChangeMemory(e) {
    if (e.target.value === "all") {
      history.push(`${history.location.pathname.replace("memory")}`);
      getPaintings();
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("memory", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getPaintings(search.toString());
    setMemory(e.target.value);
  }

  return (
    <>
      <div className="cashout">
        <div>
          <strong>Payment Details</strong>
        </div>
        <div className="cashout-container">
          <ul>
            <li>
              <div>
                <label htmlFor="name">Name</label>
              </div>
              <div>
                <input type="text" placeholder="Enter your name" />
              </div>
            </li>
            <li>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input type="text" placeholder="Enter your email" />
              </div>
            </li>
            <li>
              <div>
                <label htmlFor="phone">Phone</label>
              </div>
              <div>
                <input type="text" placeholder="Enter your phone number" />
              </div>
            </li>
            <li>
              <div>
                <label htmlFor="card">Card number</label>
              </div>
              <div>
                <input type="text" placeholder="Enter your card number" />
              </div>
            </li>
            <button>Pay</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CashOut;

import React, { useState } from "react";


function Item({ name, category }) {
  const [isActive, setActive] = useState("false")
  const CartStatus = () =>  {
    setActive(!isActive);
  }
 const cartStatus = isActive ?  "" : "in-cart"
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={CartStatus}>Add to Cart</button>
    </li>
  );
}

export default Item;

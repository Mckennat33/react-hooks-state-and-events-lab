import React from "react";
import itemData from "../data/items";
import { useState } from "react"

function Item({ name, category }) {

  const [cartItem, setCartItem] = useState(false)

  

  function handleCart() {
    setCartItem(!cartItem)
  }

  return (
    <li className={cartItem ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span> 
      <button className="in-cart" onClick={handleCart}>{cartItem ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}


export default Item;

import React from "react";
import Item from "./Item";
import itemData from "../data/items";
import { useState } from "react"

function ShoppingList({ items }) {
  
const [selectedCategory, setSelectedCategory] = useState("All")

function handleFilter(event) {
  setSelectedCategory(event.target.value)
}
  
const itemDisplay = items.filter((item) => {
  if (selectedCategory === "All") {
    return true; 
  } else {
    return item.category === selectedCategory;
  }
})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      
      <ul className="Items">
        {itemDisplay.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;



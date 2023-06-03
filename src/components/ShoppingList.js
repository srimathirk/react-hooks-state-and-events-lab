import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [foods, setFoods] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const foodItems = foods.filter((food) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return food.category === selectedCategory;
    }
  });
  function handleFilterChnge(e) {
    setSelectedCategory(e.target.value);
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChnge}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

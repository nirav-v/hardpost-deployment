import React from "react";
import { useState, useEffect } from "react";

function ItemPage({ itemId, name, category, description, price }) {
  const handleAddCartClick = (itemId) => {
    fetch("https://gentle-spire-83185-d5ea8d952a7d.herokuapp.com/api/cart", {
      method: "POST",
      body: JSON.stringify({ itemId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  //   console.log(item);
  return (
    <div>
      <p>ItemPage</p>

      <div>
        <p>name: {name}</p>
        <p>description: {description}</p>
        <p>category: {category}</p>
        <p>${price}</p>
        <button onClick={() => handleAddCartClick(itemId)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ItemPage;

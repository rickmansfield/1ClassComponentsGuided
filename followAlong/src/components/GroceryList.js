import React from "react";

import Item from "./Item";

const GroceryList = props => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  const handleClick = () => {
console.log('click');
props.clearPurchased();
console.log('App: Connected');
  }
  return (
    <div className="shopping-list">
      {props.groceries.map(item => (
        <Item toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
      <button className="clear-btn" onClick={handleClick}>
        Clear Purchased
      </button>
    </div>
  );
};

export default GroceryList;
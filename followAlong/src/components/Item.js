import React, { useState } from 'react';

const Item = props => {
  // const [item, setItem] = useState({
  //   name: 'Bananas',
  //   id: 123,
  //   purchased: false
  // });

  const handleClick = () => {
    // console.log(`item props:`, props);
    props.toggleItem(props.item.id);
    // console.log('Click gives a:', props.item.name);
    // //change purchased state to "true"
    // setItem({
    //   ...item, purchased: 
    //   // could use (item.purchased === false) ? true : false 
    //   //could use item.purchased ? false : true
    //   !item.purchased //this is just more concise
    // });
  }
  return (
    <div onClick={handleClick} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;
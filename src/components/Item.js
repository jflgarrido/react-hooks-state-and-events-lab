import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)

  function handleClick(){
    setCart(!inCart)
  }

  return (
    <li className={inCart? "in-cart": ""} onClick={handleClick}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">{inCart? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;

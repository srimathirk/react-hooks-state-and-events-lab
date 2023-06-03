import React, {useState} from "react";

function Item({ name, category }) {
  
  

  const[isAdd,setIsAdd] = useState(false)
  function handleClick(){
    setIsAdd((isAdd)=> !isAdd)
  }
  const cart = isAdd ? "in-cart" : ""
 
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
   <button className="add" onClick={handleClick}>{isAdd ?  "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

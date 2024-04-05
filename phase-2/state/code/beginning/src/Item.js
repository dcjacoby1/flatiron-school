import {useState} from "react"
// To destructure an object within an object, separate the "nests" you want with a colon.
// Writing `export default` before our component saves us from writing `export default [function]` at the end of the file.
export default function Item({ item: { name, price } }) {
    
    //creates an array with [currentValue, setterFunction] = useState(initialValue)
    let [isAdded, setIsAdded] = useState(false)
    
    //the callback function for click event
    //no param needed here, but if we wanted something...
    //could do event.target.value (form example), or event.preventDefault() for forms as well
    function handleClick(){
      //when clicked, the setter function changes the current value from true or false or vise versa
      setIsAdded(!isAdded)
    }
  
  return (
    <li>
      {/* Since we destructured props.item, we save ourselves from writing `item.name` and `item.price`. */}
      <h2>{name} for only ${price}!</h2>
      <p>
         {/* Click event handler that runs handleClick() as callback function */}
        <button onClick={handleClick}>
            {/* ternary expression - checks if isAdded is true, yesValue : noValue */}
          <strong>{isAdded ? "Remove From Cart" : "Add to Cart"}</strong>
        </button>
        {/* Some manual spacing, nothing to see here... */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{isAdded ? "In Cart" : "Not in Cart"}</span>
      </p>
      {/* Some manual spacing between <Item> components, nothing to see here... */}
      <br/>
    </li>
  );
}
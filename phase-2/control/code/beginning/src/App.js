/*

Phase 2 -> Controlled Components
Sakib Rasul | Created January 31, 2024

Core Deliverables
1. Write a function `randomize` that generates a random card string, e.g. "6 of Clubs".
2. Call `randomize` when `Nah.` is clicked in `Card`.
3. Display the current card string in `Card`.
4. (Bonus) Make the card's border "solid red" when the current suit is diamond or hearts
           and "solid black" when the current suit is clubs or spades.

*/

// To make `Card` a child of `App`, we need to import it (and render it) inside `App`.
import Card from "./Card";
//import the useState variable for use
import {useState} from "react"


export default function App() {
  //decale state here - newCard current value...
  // letNewCard function to change, Ace of Spades default
  const [newCard, letNewCard] = useState("Ace of Spades")
  //function takes the newCard as param and initiates it
  //handleClick connects with Card.js
  function handleClick(newCard){
    letNewCard(newCard)

  }
  
  return (
    <div style={{ minHeight: "100vh",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <h1>Is This Your Card?</h1>
      {/* passes down props from App.js to Card.js */}
      {/* Card.js needs the infor in Apps.js to run*/}
      <Card newCard={newCard} handleClick={handleClick} />
      <footer>&copy; 2023 Sakib Rasul</footer>
    </div>
  );
}



//my plan to solve:

//creates state for change card (call it randomize)
//initial status should be Ace of Spades
//do this by creating a function that takes in random value from card number array and random value from suit array

//create array for card number
//create array for card suit
//create onClick -> when clicked it will randomize one from each 

//one thing I was missing:
//send prop {handleClick} to Card
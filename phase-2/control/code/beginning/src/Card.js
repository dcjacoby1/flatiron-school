
//receives handleClick as a prop
export default function Card({handleClick}) {
    //makes array of both cards and suits
    const cardArray = ["Ace","One","Two","Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
    const suitArray = ["Spades", "Hearts", "Clubs","Diamonds"]
    //randomizes it
    const cardNumber = cardArray[Math.floor(Math.random() * cardArray.length)]
    const suitNumber = suitArray[Math.floor(Math.random() * suitArray.length)]
    //merges for a newCard and places on line 18
    const newCard = `${cardNumber} of ${suitNumber}`
   
    return (
        <h2 style={{ padding: "1rem",
                     display: "flex", flexDirection: "column", gap: "12px", alignItems: "center",
                     border: "solid black", borderRadius: "10px"
        }}>
            {newCard}
            {/* here is the click event, logic is propped from App.js */}
            <button onClick={handleClick}>Nah.</button>
        </h2>
    )
  }


  //how does useState change the values of the card
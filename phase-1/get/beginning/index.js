/*

Phase 1 -> GET
Updated March 14, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// A synchronous request to https://cat-fact.herokuapp.com/facts/random.
fetch("https://cat-fact.herokuapp.com/facts/random")
// fetch is a promise - we can fetch for the link, but we dont know if it will be successful (do we have access?, etc.)
.then(response => response.json())
// what to do if successful
//response is there to convert the JSON to javascript
.then(fact => {
    document.querySelector("#cat").textContent = fact.text;
// selects the cat id in html, specifically the text component, then sets it equal to the fetch compenent text (fact is a parameter)
// the placement of the text is where the span is located in th html
})

.catch(error => console.log(error));
// what to do if unsuccessful

// A synchronous request to https://anapioficeandfire.com/api/books.
fetch("https://anapioficeandfire.com/api/books")
.then(response => response.json())
.then(books => {
    books.forEach(book => {
        //sets up a for loop for each book
        const li = document.createElement("li");
        // sets up a variable to create bullet point
        li.textContent = book["name"];
        //fills the bullet point with the name of the book. name is how it is structured on the link. 
        //can click into the link to see so. looks like object notation, but is nested in array 
        document.querySelector("#got").append(li);
        //appends to the got id, where it is displayed
    });
 });

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name) {
    // async is the sintax for creating a promise, within a function
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    //await behaves similar to a .then
    const pokemon = await response.json();
    document.querySelector("#pokemon").textContent = pokemon.name;
}
getPokemon("ditto");
// ~ Challenge: Make a GET request to an API of your choice!
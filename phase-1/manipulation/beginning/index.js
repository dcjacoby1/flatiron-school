/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.


// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.

// ~ Create + Append a node
// -> createElement(), append()

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
// 2. Replace the <strong> element with a newly created one.


//1
function displayList(name, array) {
    const books = document.querySelector('#dates');
    const heading = document.createElement('h2');
    heading.textContent = name;
    books.append(heading);
    const ul = document.createElement('ul');
    array.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.append(li);


    });

    books.append(ul);

};


//2
const author = document.createElement("italic");
author.textContent = "Dan Jacoby";
document.querySelector('strong').replaceWith(author);







//Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining




// function displayList(name, array) {
//     const books = document.querySelector('#dates');
//     const header = books.createElement('h2');
//     header.textContent = name;
//     const ul = document.createElement('ul');
//     array.forEach(element => {
//         const li = document.createElement('li');
//         li.textContent = element;
//         ul.append(li);  
//     });
//     header.append(ul);

// };
    

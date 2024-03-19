/*

Phase 1 -> Appendix
Created March 17, 2024
by Sakib Rasul

Objectives
1. Learn about the following advanced programming concepts:
   - First-class citizens
   - Compilation and execution
   - Algorithmic complexity

2. Learn about the following advanced JavaScript concepts:
   - Immediate invocation
   - Context
   - Array methods
   
Takeaways
- When faced with a problem, (a) understand its objectives and edge cases, (b) write some solution,
       and then (c) work towards case coverage and optimal time and space complexity.
- Hold onto `map` and `filter` for Phase 2!

*/

// ~ First-Class Citizens
// A **first-class** object or **citizen** is one that has every capability a language has to offer.
 // In JavaScript, functions are first-class citizens. - you can do every action with a function

// ~ Compilation and Execution
// During **compilation**, JavaScript allocates memory for your code, and understands its scope(s).
// During **execution**, JavaScript runs your code line-by-line, stores values in variables, and executes functions.

// ~ Algorithms in Time and Space
// An **algorithm** is a set of instructions that, when run, accomplish some task.
// **Big O notation** is a way of quantifying how "good" an algorithm is.
// By "good", we mean fast (no. of small operations) and/or small (amount of memory taken up by operations).
// Big O describes this "goodness" as a factor of n, the algorithm's input size....
// the larger the input, the longer it takes to run (5 item array vs 500 item array)
// Common big O descriptions include:
// - O(1): **constant** speed or memory
// - O(log n): **logarithmic** speed or memory
// - O(n): **linear** speed or memory
// - O(n^2): **quadratic** speed or memory
// - O(n^2), O(n^3), etc.: **exponential** speed or memory

// ~ Immediate Invocation
console.log("~~IMMEDIATE INVOCATION~~");
// We can immediately invoke functions upon declaration with (definition)(arguments)
(a, b) => a + b

// ~ Context
console.log("~~CONTEXT~~");
// -> A function's **context** is an object it can access with the keyword `this`.
function greet(end) { console.log("Hi, " + this.name + end); }
// -> We can use the function methods `apply`, `call`, and `bind` to define a function's context.
// -> function.apply(this, [arguments]);
greet.apply({ name: "Sakib" }, [ "!" ]); 
// the apply links to this. keyword. the name: "Sakib" would replace this.name ["!"] would replace parameter
// best used if the object already exists and we don't want to change it to a new form

// this format works too
greet.call({ name: "Vinny" }, "?");

//we can create a function that works off of our greet function:
const greetTiffany = greet.bind({ name: "Tiffany" }, [ "." ]);
greetTiffany(); 
// output: Hi, Tiffany.
// binds the function to our greet function

//    executes `function` with an object reference and array of arguments.
// -> function.call(this, ...arguments);
//    executes `function` with an object reference and list of arguments.
// -> function.bind(this, ...arguments);
//    returns a function with an object reference and array of arguments.


// ~ Advanced Array Methods (none of these methods modify original array, create new)
console.log("~~ADVANCED ARRAY METHODS~~");
// `forEach` isn't the only array method out there. Let's learn about a few more!
// Hint: For the purposes of Phase 2, `filter` and `map` are most relevant.
const prices = [ 10, 50, 20, 100];
// -> array.find() returns the first element that satisfies some condition.
// similar to queryselector, it stops after finding the first match
prices.find(price => price > 25);
// the callback function should be in boolean format
// the find function looks for the first non false, then stops


// -> array.reduce() accumulates a value by applying a function to each element in an array.
prices.reduce((sum, price) => sum + price);
// similar to a foreach, it will add the price from each element of the array and total it

// -> array.filter() returns an array with only the elements that satisfy some condition.
prices.filter(price => price < 50);
// similar to queryselectorAll, it finds all matches of condition set

// can set all of the advanced arrays as variables. for example:
const lowPrices = prices.filter(price => price < 50);



// -> array.map() returns an array where each element has been transformed in some specified way.
const doublePrices = prices.map(price => price * 2);
//transforms each element of the array
// for example a double will multiply every element * 2 in a new array

// ~ Challenges
// 1. Write a function that takes an array of sentences and returns only the questions in the list.
// 2. Write a function that takes an array of lowercased sentences and returns them capitalized.
const phrases = ["hello, there!", "how are you?", "It's me!"]; // example array for #1 and #2

const returnQuestion = phrases.filter(phrase => phrase.includes("?"));
const capitalizeFL = phrases.map(phrase => phrase.charAt(0).toUpperCase() + phrase.substring(1));

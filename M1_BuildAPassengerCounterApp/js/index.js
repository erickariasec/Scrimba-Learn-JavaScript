// document.getElementById("count-elements").innerText = 5;

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// camelCase
let countElements = document.getElementById("count-elements");

console.log(countElements);

let count = 0;

function increment() {
    count = count + 1;
    countElements.innerText = count;
}
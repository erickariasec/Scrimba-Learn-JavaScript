// grab the count-elements element, store it in a countElements variable
let countElements = document.getElementById("count-elements");
let count = 0;

function increment() {
    count = count + 1;
    // set countElements's innerText to the count
    countElements.innerText = count;
}

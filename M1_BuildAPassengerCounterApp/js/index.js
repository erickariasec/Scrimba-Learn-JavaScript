// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countElements = document.getElementById("count-elements");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1;
    countElements.innerText = count;
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let syntaxPreviousEntries = count + " - ";
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText += syntaxPreviousEntries;
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count);
}

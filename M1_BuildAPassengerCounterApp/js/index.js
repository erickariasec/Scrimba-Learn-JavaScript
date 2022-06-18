let countElements = document.getElementById("count-elements");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1;
    countElements.textContent = count;
}

function save() {
    let syntaxPreviousEntries = count + " - ";
    saveEl.textContent += syntaxPreviousEntries;
    console.log(count);
    count = 0;
    countElements.textContent = count;
}
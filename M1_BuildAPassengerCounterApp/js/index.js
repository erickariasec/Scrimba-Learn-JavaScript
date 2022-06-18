let countElements = document.getElementById("count-elements");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1;
    countElements.textContent = count; // Text content shows hidden elements like white spaces
}

function save() {
    let syntaxPreviousEntries = count + " - ";
    saveEl.textContent += syntaxPreviousEntries; // Text content shows hidden elements like white spaces
    console.log(count);
}

// Google:
// innerText alternative mdn
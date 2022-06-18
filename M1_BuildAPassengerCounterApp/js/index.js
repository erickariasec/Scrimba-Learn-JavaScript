let countElements = document.getElementById("count-elements");
let count = 0;

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1;
    countElements.innerText = count;
}

function save() {
    console.log(count);
}
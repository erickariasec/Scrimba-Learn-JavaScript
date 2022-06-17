let countElements = document.getElementById("count-elements");
let count = 0;

function increment() {
    count = count + 1;
    countElements.innerText = count;
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    console.log(count);
}
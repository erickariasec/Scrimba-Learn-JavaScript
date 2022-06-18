let countElements = document.getElementById("count-elements");
let count = 0;

function increment() {
    count = count + 1;
    countElements.innerText = count;
}

function save() {
    console.log(count);
}
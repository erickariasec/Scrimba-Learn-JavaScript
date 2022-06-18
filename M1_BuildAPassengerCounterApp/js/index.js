// let countElements = document.getElementById("count-elements");
let count = 0;

function increment() {
    count = count + 1;
    countElements.innerText = count;
}

function save() {
    console.log(count);
}



// String VS. Numbers


let myName = 42;
let greeting = "Hi, my name is ";
let myGreeting = greeting + myName;
console.log(myGreeting);

// let points = 4;
// let bonusPoints = "10";

// let totalPoints = points + bonusPoints; // 410 

// console.log(totalPoints);

console.log(4 + 5); // 9
console.log("2" + "4"); // 24
console.log("5" + 1); // 51
console.log(100 + "100"); // 100100
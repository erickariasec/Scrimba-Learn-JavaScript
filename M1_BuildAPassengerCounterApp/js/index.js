let countElements = document.getElementById("count-elements");
let count = 0;

function increment() {
    count = count + 1;
    countElements.innerText = count;
}

function save() {
    console.log(count);
}



// Log a Greeting to the Console


// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

let myName = "Erick";
let greeting = "Hi, my name is ";

let myGreeting = greeting + myName;

console.log(myGreeting);
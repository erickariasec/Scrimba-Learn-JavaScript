let countElements = document.getElementById("count-elements");
let count = 0;

function increment() {
    count = count + 1;
    countElements.innerText = count;
}

function save() {
    console.log(count);
}



// Write Your First String Variable

let username = "per";
// Create a variable, message, that stores the string: "You have tree new notifications"
let message = "You have three new notifications"
// Create a variable, messageToUser, that contains the message we have logged
let messageToUser = message + ", " + username + "!";

console.log(messageToUser);
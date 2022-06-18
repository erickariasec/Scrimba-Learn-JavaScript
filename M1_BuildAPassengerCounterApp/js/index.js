// let countElements = document.getElementById("count-elements");
let count = 0;

function increment() {
    count = count + 1;
    countElements.innerText = count;
}

function save() {
    console.log(count);
}



// Improve the Message with String Concatenation


// HTML

// <html>
//     <head>
//     </head>
//     <body>
//         <p id="welcome-el"></p>
//         <script src="index.js"></script>
//     </body>
// </html>;


// JAVASCRIPT


// let welcomeEl = document.getElementById("welcome-el")

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

// welcomeEl.innerText += " 👋";
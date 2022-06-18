// let countElements = document.getElementById("count-elements");
let count = 0;

function increment() {
    count = count + 1;
    countElements.innerText = count;
}

function save() {
    console.log(count);
}



// Render a Welcome Message


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

// ? Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")

// ? Create two variables (name & greeting) that contains your name and the greeting we want to render on the page

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "

// ? Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name
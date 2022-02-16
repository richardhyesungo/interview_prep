/**
 * What is asynchronous programming and why is it important in JavaScript?
 */

/* Synchronous programming */
// executed from top-to-bottom sequentially except conditionals and function calls
// blocks on long-running tasks such as network requests and disk I/O
console.log("this runs first");
console.log("this runs second");
console.log("this runs third");


/* Asynchronous programming */
setTimeout(() => {
  console.log("async programming");
}, 3000);
console.log("async outside of setTimeout");



//Immediately Invoked Function Expressions (IIFE)
//Database ko immidate run krne ke liye
//To avoid polluting the global scope.To run some code immediately.To create private variables.

//named iife
(function chai(){
    console.log(`DB CONNECTED`);
})();
//its running

// ()- functions defination, ()- function call
//arrow functio ki trah

//simple iife
// (() => {
//     console.log(`DB CONNECTED`);
// })();


((name) => {
    console.log(`DB CONNECTED ${name}`);
})('ritu');

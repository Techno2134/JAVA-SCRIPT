//primitive(7 types)- number, null, string, boolean, bigint, undefined, symbol
//call by value -> memory refernece nhi diya jata hai data copy krke de dete h

//reference(2 types)or non primitive - object, array, functions

const score = 'ol'; //dynamically typed language
const id = Symbol('123'); //symbol is unique and immutable
const anotherId = Symbol('123'); //even if the description is same, both symbols are different

console.log(id === anotherId); // false

const bigNumber = 123123113431434n; //bigint is used for large numbers

//Arrays

const arr = ["Ritu", "Rohit", "Ravi", "Rani"];
let myObj ={
    name: "Ritu",
    age: 20,
    isMarried: false,
    hobbies: ["reading", "writing", "coding"],
    address: {
        city: "Delhi",
        state: "Delhi",
        country: "India"
    }
}
//store function to a variable
const myFunction = function() {
    console.log("Hello World");
}
console.log(myFunction());
console.log(typeof myFunction); // function- object function

//store function in an object
function myFun(){
    console.log("Hello World");
}
myFun();

console.log(typeof score); // string
console.log(typeof BigInt); // undefined

const something = null; 
console.log(typeof something); // object (this is a known bug in JavaScript, null is not an object)

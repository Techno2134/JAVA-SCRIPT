let score = true;
console.log(typeof score);

// const {score} = req.body;
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//num '33' - 33
//num '33abc' - NaN
//true - 1; false -0

let isLoggedIn = 'ritu';
let booleanIsLoogedIn = Boolean(isLoggedIn);
console.log(booleanIsLoogedIn);

//1- true; 0- false
//"" - false
//'ritu' - true

let someNumber = 33;
let stringNum = String(someNumber);
console.log(typeof someNumber);
console.log(typeof stringNum);
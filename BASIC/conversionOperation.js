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


// <---------------operations---------------->
let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = 'hy';
let str2 = 'hy';
let str3 = str1+str2;
console.log(str3);

console.log('1' + 2);
console.log(1 + '2');
console.log('1' + (2 + 2)); //use paranthesis.
console.log((1 + 2) + '3');


//not prefered
console.log(true); //true
console.log(+true); //1
// console.log(true+) - possible hhi nhi h
console.log(+""); //0
 
let num1, num2, num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

//++a and a++ differnce
let x = 3;
const y = x++;
console.log(x, y); // 4, 3
// console.log(y);

let a = 3;
const b = ++a;
console.log(a, b); //4,  4

//++variable only
//prefix ++x ->
let c,d=5;
d = ++c; //mtlb phle c ki value change hogi then assign hogi d ko

//sufix x++ -> phle assign ho jaayegi then change hogi
//sufix x-- -> phle use hogi then change hogi
//prefix --x -> phle decrese ho jaayegi then assign hogi

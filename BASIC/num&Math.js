const score = 400;

const balance = new Number(100);
console.log(balance); //type-number

//covert a number into string
console.log(balance.toString()); //type-> string
console.log(balance.toString().length);
 
console.log(balance.toFixed(2));  //point ke bad num ko thik krne ke liye

const otherNumber = 1123.890;
console.log(otherNumber.toPrecision(3)); //return a string

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); //comma aa jate hai read krne mai aachi lgti h
console.log(hundreds.toLocaleString('en-IN')); //according to indian commans laga dega


//Min and Max value;
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
//safe value itna hi mai save kr skata hu
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


// <------------------Math----------------->

console.log(Math);
console.log(Math.abs(-1)); //negative value - positive mai change ho jati h
console.log(Math.round(4.4)); //4
console.log(Math.ceil(4.3)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.sqrt(2));
console.log(Math.min(4,2,3,4,6));
console.log(Math.max(2.3,42,12431,24234.435));


console.log(Math.random()); //between 0 - 1
console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

// Math.random() * (max-min+1) + min
console.log(Math.floor(Math.random() * (max-min+1)) + min);
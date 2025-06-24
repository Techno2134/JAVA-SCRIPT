// console.log(2>7); boolean ans

console.log('2' > 1); // true, string '2' is converted to number 2
console.log('02' == 2); // true, string '02' is converted to number 2
// why?

console.log(null > 0); // false, null is converted to 0
console.log(null == 0); // false, null is only equal to undefined and itself
console.log(null >= 0); // true, null is converted to 0
// == does not change null to 0.
// Comparisons (> < >= <=) change null to 0
// == does not change null to 0 (only matches undefined)

console.log(undefined > 0); // false, undefined is not a number
console.log(undefined < 0); // false, undefined is not a number
console.log(undefined == 0); // false, undefined is not equal to 0

//=== yhe only values ko hi nhi unke datatype ko bhi check karta hai
console.log('2' === 2); // false, string '2' is not equal to number 2

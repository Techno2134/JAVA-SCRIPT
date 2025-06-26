//array-object-collection of multiple items
//js arrays are resizable, creates shallow copies- shares same reference
// const myArr = [0, 1, 2, 3, 4, 5, "ritu", 90.0, true];
const myArr = [0, 1, 2, 3, 4, 5];
//or
const myArr2 = new Array(1,2,3,4,5);
console.log(myArr[2]);

//print a array
for(let i=0; i<myArr2.length; i++){
    console.log(myArr2[i]);
}

//to reverse an array - array.toReversed()
const rev = myArr2.toReversed();
for(let i=0; i<rev.length; i++){
    console.log(rev[i]);
}

//Arrays method
myArr.push(7); //element add krne ke liye
myArr.push(45); //end mai add krta hai
// console.log(myArr);

myArr.pop(); //last value ko remove kr deta hai

myArr.unshift(90);
console.log(myArr); //sabe aage add kr deta element ko , sabko shift krna pdta hai memory effectent nhi hai yhe
//load aa jata hai computer pr

myArr.shift();
console.log(myArr); //90 ko remove kr dega

//Question method - t/f

console.log(myArr.includes(78));//isme yhe hai yaa nhi
console.log(myArr.indexOf(90)); //return the index of element otherwise return -1

const newArr = myArr.join(); //dataype-String
console.log(newArr);


//slice, splice
console.log('A', myArr);

const myn1 = myArr.slice(1,3); //[ , )
console.log(myn1); //1,2

const myn2 = myArr.splice(1,3); //[, ]
console.log(myn2); //1,2,3

console.log(myArr); //splice kiye the utne elements orignal array se bhi delete ho gye hai

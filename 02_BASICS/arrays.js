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
myArr.push(7);

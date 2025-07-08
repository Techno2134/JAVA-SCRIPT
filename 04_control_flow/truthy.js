const userEmail = [];
if(userEmail){
    console.log('got user email');
}else{
    console.log('don\'t have email')
}

//fasly values
//false, 0, -0, BigInt 0n, '', null, undefined, NaN

//truthy values
//'0', 'false', ' ', [](empty array), {}(empty object), function(){} - empty function

if(userEmail.length === 0){
    console.log('Array is empty');
}

const emptyObj = {};
// Object.keys(emptyObj) - returns a array
if(Object.keys(emptyObj).length === 0){
    console.log('Object is empty');
}

//Nullish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10; //5
val1 = null ?? 10; //10
val1 = undefined ?? 15; //15
val1 = null ?? 10 ?? 20; //10
console.log(val1);

//ternary opeartor

//condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log('less than 80') : console.log('more than 80');


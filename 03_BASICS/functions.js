function sayHi(){
    console.log('hey');
}
//function ke andr jo bhi hota hai vo uska slope hota hai
sayHi(); //sayHi- functions reference, ()-executation

function addTwoNumber(num1, num2){ //num1, num2- parameters
    return num1+num2;
}
console.log(addTwoNumber(2,3)); //2,3-argument

const result = addTwoNumber(8,45);
console.log('result:',result); //result m value hain isliye store nhi hoa

//but
function addTwoNumber1(num1, num2){ //num1, num2- parameters
    console.log(num1+num2);
}
const result1 = addTwoNumber1(8,8); 
console.log('result1 :', result1);//undefined

// function loginUserMessage(username){
//     return `${username} just logged in`;
// }

function loginUserMessage(username = 'sam'){ //sam is default value jisse hum khabhi if mai jaayenge hi nhi
    if(!username){ //undefined-false hota h
        console.log('please enter a username');
    }
    return `${username} just logged in`;
}


console.log(loginUserMessage('Ritu'));


//usercart

// function calculateCartPrice(...num1){ //isko hi rest operator bola jata hai or spread depends on use case
//     return num1; 
// }
// console.log(calculateCartPrice(200, 400, 865)); // for this we have rest opertor
//array ban jaayega [200, 400, 865]

// or
function calculateCartPrice(val1, val2, ...num1){ 
    return num1; 
}
console.log(calculateCartPrice(200, 400, 865,456)); 
//val1=200, val2 =400 rest in array


//object ko function mai kaise use kiya jata hai

const user = {
    userName: 'Coffee',
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    userName: 'sam',
    price: 399
})

//array pass krne ke liye
const mynewArray = [200, 400, 300, 560];

function retuurnSecondValue(getArray){
    return getArray[1]
}

console.log(retuurnSecondValue(mynewArray));
//or
console.log(retuurnSecondValue([200, 678, 890, 45]));
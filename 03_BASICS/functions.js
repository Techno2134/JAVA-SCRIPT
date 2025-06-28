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


//singleton- by construction
// Object.create- contruction

//object literals

const mySym = Symbol('Key1'); 
//Symbol ko aggar as a key use krna ho toh in object
const jsUser ={
    name: 'ritu',
    age: 21,
    location: 'mathura',
    email: 'ritu@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday'],
    'full name': 'Ritu Goyal',
    // mySym: 'mykey1', //--yhe galt hai kyuki iska datatype string aa rha h symbol nhi
    [mySym]: 'mykey1' //square bracet se symbol bn jaayega
}
//2 methods to access
console.log(jsUser.email);
console.log(jsUser['email']); //yhe preffered h

// console.log(jsUser.full name); error yhe ese access nhi hoga
console.log(jsUser["full name"]); 

//symbol
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]); //string hi aa rha h

jsUser.email = 'umanggoyal@gmail.com';
console.log(jsUser['email']); //change ho gya
//lock krna ke liye Object.freeze()
// Object.freeze(jsUser);
jsUser.email = 'pranjul@gmail.com';
console.log(jsUser['email']); //change nhi hoa

// console.log(jsUser);

//function in objects
jsUser.greeting = function(){
    console.log('hey');
}
console.log(jsUser.greeting); //undefined   
// console.log(jsUser.greeting());//freeze mt krna
//hey ke saath saath undefined bhi aa rha h kyuki hum console kr rhe hai
jsUser.greeting(); //yha nhi aayega

jsUser.greeting2 = function(){
    console.log(`hey, ${this.name}`);
}
jsUser.greeting2(); //ritu aa gya
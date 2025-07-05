// This keyword current context ke bare mai batata hai
const user = {
    username: 'Ritu',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this); //sab kuch print ho gya bhaii
        //current context
    }

}
// user.welcomeMessage; - kuch bhi print nhi hoga
user.welcomeMessage();
user.username = 'sam';
user.welcomeMessage(); //sam print ho gya
//this keyword current context ki value print krta hai

console.log(this); //{} (empty-refering to an empty object )print hoa h
//console pr print krne pr window aa rha hai
//window gobal object h


// function chai(){
//     let username = 'ritu';
//     console.log(this.username); //undefined yhe objects ke andr hi kaam krta hai functions ke andr nhi 
// }

// chai(); 

//Arrow Fucntions

const chai = function(){
    let username = 'ritu';
    console.log(this.username);  //undefined
}

chai();

const chaiCode = () => {
    let username = 'ritu';
    console.log(this.username); //same as simple unfunction
}

chaiCode();

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(2,5));

//implicit return - paranthess use nhi krne pdte hai
//one line code ke liye use hota hai
// const addNum = (num1, num2) => num1 + num2;
// or
const addNum = (num1, num2) => (num1 + num2); //this will use in react

//object return krna ho tho kaise karenge
const addNums = (num1, num2) => ({username: 'ritu'});
console.log(addNums(4,30));


// const myArray = [2,3,4,5,6];
// myArray.forEach()
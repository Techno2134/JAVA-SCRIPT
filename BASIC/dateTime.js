//date->ms(mili seconds)

let myDate = new Date()
console.log(typeof myDate); //object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate = new Date('2025-11-21');
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
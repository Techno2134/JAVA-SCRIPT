//for of
//string in arrays- ['','','']
//object in arrays- [{},{},{}]

const arr = [1,2,3,4,5];
//element - irator(i)
//object - mtlb kis chiz ke upar loop lagana hai
// for (const element of object) {
    
// }

for (const i of arr) {
    // console.log(i);
}


//can be work on string also
const greetings = 'Hello World!';

for (const i of greetings) {
    // console.log(i);
}

// Maps-method used with arrays
//map object holds key-vale pairs and remembers the original insertion order of the key
//map takes each item from an array, does something to it, and gives a new array.

const map = new Map(); //map ek object hai
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('IN', 'India');

// console.log(map); //stores the unique values

//loop in map
//key- pr sabke alag alag arrays print ho jaayenge
// for (const key of map) {
//     console.log(key);
// }

for (const [key,value] of map) {
    console.log(key, ':-', value);
}

//for of loop on object
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of object) {
//     console.log(key, ':-', value);
// }
//objects ese iterable nhi hoga

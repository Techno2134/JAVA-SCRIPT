const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

//object par for in loop kam krta hai

// for (const key in myObject) {
//     console.log(key); //keys aa gyi hai
// }

// for (const key in myObject) {
//     console.log(myObject[key]); //sare keys ki value/objects bhi aa gye
// }


for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}

//for in loop for arrays

const programming = ['js', 'rb', 'py', 'java', 'cpp'];
//arrays ki key 0 se start and length of array tak hoti hai
for (const key in programming) {
    // console.log(key); //yaha only index
    // console.log(programming[key]); //values aa rhi hain 
}

//for in loop on map

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('IN', 'India');

for (const key in map) {
    // console.log(key); //kuch nhi aaya
    //map map.set('USA', 'United States of America');
}
//map iterable nhi hai
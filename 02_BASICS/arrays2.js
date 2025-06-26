const marvel_heros = ['Thor', 'Ironman', 'spiderman'];
const dc_heroes = ['superman', 'flash', 'batman'];

// marvel_heros.push(dc_heroes);
// console.log(marvel_heros); //array ke andr array aayi h, mtlb isme dc_heroes wali array ko element ki trah treat kiya hai
// console.log(marvel_heros[3]); //dc hero wali array
// console.log(marvel_heros[3][2]);//batman


//concat();
// marvel_heros.concat(dc_heroes); //same hi aaya hai push ki trah
const allHeros = marvel_heros.concat(dc_heroes); //return a new array
console.log(allHeros); 

//spread operator is much better than concat

const all_new_heros = [...marvel_heros, ...dc_heroes];
console.log(all_new_heros);

const another_array = [1,2,3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_aa = another_array.flat(Infinity); //depth mtlbkitne array tak solve krna hai, yhe array ki subaaray ko bhi element mai create kr deta hai new array mai
console.log(real_aa);


// Array.isArray('ritu');
console.log(Array.isArray('ritu'));
//Array mai convert karne ke liye
console.log(Array.from('ritu')); // array bana diya [r, i, t, u]

//empty array dega - imp(keys se array banega only)
console.log(Array.from({name: 'ritu',
    rollno: 51,
    surname: 'goyal',
}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
//yhe sab arraya bana hai hai - og use karnge
console.log(Array.of(score1, score2, score3)); //return new array from set of elements(variables, array, etc)

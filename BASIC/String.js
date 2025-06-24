console.log('hey');
let name = 'Ritu';
console.log(name);
const repoCount = 50;
console.log(name + repoCount + ' hey');
// backticks - string interpolation
console.log(`hello, my name is ${name} and my repo count is ${repoCount}`)

//declaration
const gameName = new String('ritu-jshf'); //type - Object
console.log(gameName[0]);
console.log(gameName.__proto__); //object- prototype ke liye


console.log(gameName.length); //length
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3)); 
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherStr = gameName.slice(-8,4); //negtaive hai to last se use karega
//slice m negative value use kr sakte h
console.log(anotherStr);

const newString1 = '   ritu  ';
//trim space and speical char ko remove kr deta hai
console.log(newString1);
console.log(newString1.trim());


const url = 'https://hitesh.com/hitesh%20choudhary';
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh')); //true;
console.log(url.includes('ritu')); //false


const h = new String('ritu-goyal-30');
console.log(h.split('-'));



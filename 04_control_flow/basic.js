//if 
const isUserLoggedIn = true;
if (isUserLoggedIn){
    console.log('hey');
}

// >, <, <=, >=, ==, !=, ===

if(2 === '2'){
    console.log('executed');
}

const temp = 41;
if(temp === 41){
    console.log('less than 50');
}else{
    console.log('tempearature is greater than 50');
}

const score = 200;
if(score > 100){
    const power = 'fly';
    console.log(`User power: ${power}`);
}

//implicite slope
const balance  = 1000;
if(balance > 500) console.log('test');
//dirty code
// if(balance > 500) console.log('test'),console.log('test2');

//nesting

// if(balance < 500){
//     console.log('less than 500');
// }else if(balance < 750){
//     console.log('less than 750');
// }else{
//     console.log('ok bye');
// }

//real life

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log('Allow to buy course');
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log('User logged in');
}
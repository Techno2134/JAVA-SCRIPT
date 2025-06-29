//scope of that program{}
var c = 300; //gobal scope
if(true){ //block scope
    let a = 10;
    const b = 20;
    // var c = 30; or
    c = 30; //problem aayegi
}
// console.log(a); -not defined
// console.log(b); - not defined
console.log(c); //print ho gya - 30

//let
let a = 390;
if(true){
    let a = 10;
    const b = 20;
    console.log('inner',a);
    
}
console.log('outer',a);//300 hai 

//console and terminal mai gobal scope alag hote hai


//nested scope

function one(){
    const userName = 'Ritu';

    function two(){
        const website = 'youtube';
        console.log(userName); //can access
    }
    // console.log(website); - can access

    two(); //ritu
}

// one(); //one ke baad hi two execute hoga
//closer - andr ka function bhar ke function ke excess kr pta hai
if(true){
    const userName = 'hitesh';
    if(userName === 'hitesh'){
        const website = 'fackbook';
        console.log(userName + website);
        
    }
    // console.log(website); //can't access
}

// console.log(userName); //can't access


//-----------interesting-----------
//basic function

addOne(6); //np
function addOne(num){
    return num+1;
}

console.log(addOne(6));

//expression
// addTwo(); error because yhe hoisting nhi krte hai
const addTwo = function(num){
    return num+2;
}

console.log(addTwo(9)); 
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

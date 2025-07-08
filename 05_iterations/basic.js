//for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
//shortcut- select same word crtl +d
for(let j=0; j<=10; j++){
    console.log(j);
    if(j == 7){
        console.log('7 is printed');
    }
}


// for(let i=0; i<10; i++){
//     for(let j=0; j<10; j++){
//         console.log(i, ' ');
//     }
//     console.log();
// }


let myArr = ['flash', 'batman', 'superman'];
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}

//array ki length se bhar chala jaayega tab bhi koi error nhi aayegi
//undefined a jaayega


//keywords- break and continue

for(let i=0; i<=10; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}

const coding = ['js', 'ruby', 'java', 'python'];

//higher order function- callback function - function ka name nhi hota hai
// coding.forEach( function name(){} )
// item - iterator
coding.forEach( function (item) {
    // console.log(item); //array print ho jayega
} );

//arrow function ko bhi use kr skate h
coding.forEach( (value) => {
    // console.log(value);
});


function printMe(item){
    console.log(item);
}
//is function ko bhi passon kr sakte hain
//reference dena hai print vo khud kr lega
coding.forEach(printMe);

//iske pass item, index and whole array parameter hote hai
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


//[{}, {}, {}]- yhe for each ke andr bahut use kiya jata hain

const myCoding =[
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'python'
    }
]


myCoding.forEach((item)=>{
    // console.log(item); //sab object print ho jaayenge
    console.log(item.languageName);
})

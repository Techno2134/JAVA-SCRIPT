// This keyword current context ke bare mai batata hai
const user = {
    username: 'Ritu',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this); //sab kuch print ho gya bhaii
        //current context
    }

}
// user.welcomeMessage; - kuch bhi print nhi hoga
user.welcomeMessage();
user.username = 'sam';
user.welcomeMessage(); //sam print ho gya
//this keyword current context ki value print krta hai

console.log(this); //{} (empty-refering to an empty object )print hoa h
//console pr print krne pr window aa rha hai
//window gobal object h


function chai(){
    let username = 'ritu';
    console.log(this);
}

chai();
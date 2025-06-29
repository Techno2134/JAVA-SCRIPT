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
user.welcomeMessage();
user.username = 'sam';
user.welcomeMessage(); //sam print ho gya
//this keyword current context ki value print krta hai

console.log(this); //{} print hoa h
//console pr print krne pr window aa rha hai


//constructor ki help se
// const tinderUser = new Object();
const tinderUser = {}; //non singleton
tinderUser.id = '123abc';
tinderUser.name = 'ritu';
tinderUser.isLoggedIn = false;
console.log(tinderUser);

//object ke andr objects

const regularUser = {
    email: 'ritu@gmail.com',
    fullName: {
        userFullName:{
            firstName: 'ritu',
            lastName: 'goyal'
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName); //ritu

//optional chaining agar koi chiz exist hi nhi karta ho toh? '?' likh dtee h
console.log(regularUser.fullName?.userFullName.firstName);

//objects ko combine karenge
const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'c', 4:'d'};

// const obj3 = {obj1, obj2};
// const totalObj = Object.assign(obj1, obj2);
// or
// const totalObj = Object.assign({}, obj1, obj2); //Empty paranthess bhi de dte hai
const obj3 = {...obj1, ...obj2};
console.log(obj3);


//database se jb value aati h

const users = [
    {
        id: 1,
        email: 'r@gmail.com'
    },
    {
        id: 1,
        email: 'r@gmail.com'
    },
    {
        id: 1,
        email: 'r@gmail.com'
    },

]

// users[1].email
console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));//keys and datatype:array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //har key value ko array mai convert kr diya h

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //koi value isme present hai yaa nhi

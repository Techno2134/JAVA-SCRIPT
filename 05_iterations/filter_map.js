// const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// const values = coding.forEach((item) => {
    // console.log(item);
    // return item; //isse bhi undefined aayega
// })

// console.log(values); //undefined- manually return krna pdega-vo bhi undefined aa jyegi


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//filter function use call back - returns value but for-each return nhi krta hain
const newNums = myNums.filter((num) => {return num > 4});  //without return yhe {}- iski wjah se [] yhe aa jayega {}-object return hoga
// console.log(newNums);



const newNums2 = [];
myNums.forEach((num) => {
    if(num > 4){
        newNums2.push(num)
    }
})
// console.log(newNums2); 
//dono se same result aaya 


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010}
]

// const userBooks = books.filter((bk) => bk.genre === 'History');

const userBooks = books.filter((bk) => {return bk.publish >= 1999 && bk.genre === 'History'});
console.log(userBooks);


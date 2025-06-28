//destructuring
const course = {
    courseName: 'js in hindi',
        price: '999',
        courseInstructor: 'Hitesh'
}

// console.log(course.courseInstructor);

//preferred method
const {courseInstructor: ci} = course;
// console.log(courseInstructor);
console.log(ci);

//react
// const navbar = ({copmany}) => {

// }
// navbar(copmany = 'ritu');

//API - JSON format

// {
//     'name':'ritu',
//     'courseName': 'js in hindi',
//     'price': 'free'
// }

//array ki format mai bhi apis milti h
// [
//     {},
//     {},
//     {}
// ]
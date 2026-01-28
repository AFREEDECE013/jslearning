// const tinderuser = new Object()
tinderuser = {}


tinderuser.id = "123"
tinderuser.name = "afreed"
tinderuser.isLoggedIn = false

// console.log(tinderuser)

// const regularuser = {
//     email : "some@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "Afreed",
//             lastname : "MB"
//         }
//     }
// }

// // console.log(regularuser.fullname.userfullname.firstname)


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj3 = {5: "a", 6: "b"}

// // const obj4 = Object.assign({}, obj1, obj2, obj3)
// // console.log(obj4)

// const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4)

// console.log(tinderuser)
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLoggedIn'))


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Afreed"
}

// course.courseInstructor


// const {courseInstructor} = course    // desturucturing

// console.log(courseInstructor)

const {courseInstructor: CI} = course   // desturucturing

console.log(CI)
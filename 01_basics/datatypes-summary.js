// Primitive
// 7 types: string, number, bool, null, undefined, bigint, symbol--> which is a unique value

const { use } = require("react")

const bigNumber = 90852932945830983298490n
const ID = Symbol('123')

// Reference (non-premitive)
// array, objcts, functions

const heros = ["Ironman", "cap", "thor"]
let myObj = {
    name : "Afreed",
    age : "25"
}

const myFunction = function() {
    console.log("Hello World!!!")
}


// -------------------------------------------------------------

// Stack (Primitive), Heap (Non-primitive)
// Stack --> we will get a copy
// heap --> Reference (it will update the original value)

let original = "hi"

let duplicate = original

duplicate = "Hello"

console.log(original)
console.log(duplicate);

// 

let userOne = {
    email : "user@google.com",
    upi : "user@ybl" 
}

let userTwo = userOne

userTwo.email = "afreed@google"

console.log(userOne.email)
console.log(userTwo.email)
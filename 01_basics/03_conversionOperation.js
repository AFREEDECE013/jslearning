let score = "33"

console.log("Original Type", typeof(score))

let valueInNumber = Number(score)

console.log("Updated Type", typeof(valueInNumber))

///

let score1 = "33abc"

console.log("Original Type", typeof(score1))

let valueInNumber1 = Number(score1)

console.log("Updated Type", typeof(valueInNumber1))
console.log("Value", valueInNumber1)

///

let score2 = null

console.log("Original Type", typeof(score2))

let valueInNumber2 = Number(score2)

console.log("Updated Type", typeof(valueInNumber2))
console.log("Value", valueInNumber2)

// "33" >> 33
//  "33adnskjdna" >> nan
// true >> 1; false >> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log("Bool conversion:", booleanIsLoggedIn)

let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log("Bool conversion:", booleanIsLoggedIn1)

let isLoggedIn2 = "Afreed"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log("Bool conversion:", booleanIsLoggedIn2)



// 

let valueInString = 33

console.log("Original Type", typeof(valueInString))

let updateValueInString = String(valueInString)

console.log("Updated Type", typeof(updateValueInString))


// *********************************** Operations **************************************

let opValue1 = 3
let negOpValue1 = -opValue1
console.log(negOpValue1);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/3)
console.log(2%2)

//

let str1 = "Hello"
let str2 = " Afreed"

console.log(str1 + str2);


//

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log(+true)
console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 1

let gameCounter = 100
++gameCounter

console.log(gameCounter);

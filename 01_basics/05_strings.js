const name = "Afreed"
const age = 25

console.log(`Hi my name is ${name} and my age is ${age}`)
console.log(name.length)

const gameName = new String("afreed-mb")
console.log(gameName[0])
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("f"))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString)

const newStringOne = " Afreed     "
console.log(newStringOne.trim())

const url = "https://test.com/afreed%20mb"
console.log(url.replace("%20", "-"))
console.log(url.includes("test"))

test_split = gameName.split("-")
console.log(test_split)
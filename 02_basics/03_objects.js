// singleton
// Object.create

// Objacet literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Afreed",
    "full name" : "Afreed MB",
    [mySym] : "mykey1",
    age : 25,
    location : "Banglaore",
    email : "afreed@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "afreed@chatgpt.com"
// Object.freeze(JsUser) // once an object is freezed we wont be able to modify it
// JsUser.email = "afreed@microsoft.com"
// console.log(JsUser)

JsUser.greetings = function(){
    console.log("Hello Js user")
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
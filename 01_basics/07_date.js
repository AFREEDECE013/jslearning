//  Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log()
console.log(myDate.getMonth()+1) // usually month starts from 0
console.log(myDate.getDate())

console.log(myDate.toLocaleString('default', {
    weekday: 'long'
}))

let myCreatedDate = new Date(2026, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2026, 0, 2, 3, 30)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)   //this gives milli seconds

console.log(Math.floor(Date.now()/1000))    // this will give seconds
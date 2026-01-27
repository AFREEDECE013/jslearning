const accountId = 12342
let accountEmail = "mogalafreed@google.com"
var accountPassword = "12345"
accountCity = "Kadiri"
let accountState

// accountId = 2 // not allowed

/*
Prefer not to use var
bacause of scope and fuctional issue    
*/

console.log(accountId);

accountEmail = "hc@google.com"
accountPassword = "2u3298u3289"
accountCity = "Bangalore"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
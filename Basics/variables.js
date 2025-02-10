
const accountId=2234;
let acountEmail="abc@gmail.com";
var accountPassword="123456";
accountCity="pune";

// accountId=4;   //It is not allowed because of const
// console.log(accountId);

acountEmail="xyz@gmail.com";
accountPassword="456";
accountCity="jaipur";

console.table([accountId,accountPassword,acountEmail,accountCity]);

// prefer not to use var because of issue in block scope and functional scope
let accountState;
console.log(accountState);   //gives undefined
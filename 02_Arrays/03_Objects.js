//*****object literals*****

//Object.create()--->1st
// constructor method 
// form singleton

const mySym = Symbol("key1");

const jsUser = {
    name: "abc",
    age: 19,
    location : "Pune",
    email : "abc@gmail.com",
    isLoggedIn : false ,
    lastLoggedIn :["wed" , "sat" , "mon"],
    [mySym] :"mkey1"//it [] not used then its datatype is string by default
}
console.log(jsUser["email"]);
console.log( jsUser["mySym"]);


jsUser.email="xyz@gmail.com";
//it will modilfy value of email

// Object.freeze(jsUser);
jsUser.email ="pqr@gmail.com";
console.log(jsUser)
//then it cant be modified because of freeze

jsUser.greeting = function() {
    console.log("Hello Js User");
}
console.log(jsUser.greeting);//undefined
console.log(jsUser.greeting());//print msg 

jsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`)
}
console.log(jsUser.greetingTwo());
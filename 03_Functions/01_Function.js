
function add(num1 , num2){
    console.log( num1+num2);
}
add(3,6);

console.log(add(3,6));
//it will return undefined

function diff(num1 , num2){
    return num1,+num2;
}
console.log(diff(6,2));
//it will return 2 because of that return statement

function login(username){
    if(username === undefined){
        console.log("please enter username");
        //return;
    }
    return `${username} just logged in`;
}
console.log(login("abc"));

function calc(...num1){
    return num1;
}
console.log(calc(200,300,500));
//return an array spread operator

const user ={
    name:"abc",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleObject(user);
//anyobject is generic name so that we can use it for any object

const arr=[200,400,500,600];
function value(getArray){
    return getArray[1];
}
console.log(value(arr));

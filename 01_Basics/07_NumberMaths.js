const score= 50;
console.log(score);
//console consider it as number

const balance= new Number(100);
console.log(balance);
//explicitly defined

console.log(balance.toString().length);
//gives 3

console.log(balance.toFixed(2));
// it gives 100.00

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));
//23.9  precise value like round of

const otherNum= 123.8966;
console.log(otherNum.toPrecision(3));
// 124

const hundreds = 10000000;
console.log(hundreds.toLocaleString());
// 10,000,000



//**************MATHS*************/

const num1= -4;
console.log(Math.abs(num1));
// it will give 4 

const num2= 4.8;
console.log(Math.round(num2));
// gives 5  if there was 4.3 then output will be 4

const num3=4.2;
console.log(Math.ceil(num3))
// it will give 5 which is upper value
console.log(Math.floor(num3));
// it will give 4 


const arr=[10,2,4];
console.log(Math.max(...arr));
// ... spread operator =  expects multiple individual numbers as arguments, not an array.
// if ... not used then it gives NaN

console.log(Math.random());
// gives value between 0 to 1
console.log(Math.random()*10);
//will shift to left
console.log(Math.random()*10 +1);
// avoids value like 0.1

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
// +min give atleast 10

let score= 40;
console.log(typeof score);
console.log(typeof(score));
// above return number which is in lowercase

let marks="60";
let  valueInNumber = Number(marks);
console.log(typeof(valueInNumber))
// above marks is in string then it is converted into number using Number(marks)

let value=null;
console.log(typeof value);
//will return object

let v= Number(value);
console.log(v);
//gives NAN

let flag=false;
console.log(typeof flag);
let f= Number(flag);
console.log(f);
//gives 0 coz false when true it gives 1


let isLoggedIn=1;
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//it gives true 

// if that 1=string then it returns true //"abs"=true
//if empty string then returns false  // ""=false

let str= 33;
let strNo= String(str);
console.log(typeof strNo);

//******operation***********//

let val=3;
let negValue= -val;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1="hello";
let str2=" world";
console.log(str1+str2);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);//give 122 because string came first
console.log(1+2+"2");//gives 32  here integer comes first

let gameCounter=100;
gameCounter++;
console.log(gameCounter);
console.log(++gameCounter);











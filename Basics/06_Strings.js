const name="Hello";
const repoCount=10;
console.log(name + repoCount +"value");
//old way to concatenate


console.log(`${name} world and repocount is ${repoCount}`);


const str=new String('abc-xyz');
console.log(str[1]);
console.log(str.toUpperCase());
console.log(str.charAt(0));
console.log(str.indexOf('c'));

const newStr=str.substring(0,4);//last index is excluded
console.log(newStr);

const anotherStr=str.slice(0,4);
console.log(anotherStr);
const negStr=str.slice(-5,4);
console.log(negStr);

const newStr1="  hello  ";
console.log(newStr1);
console.log(newStr1.trim());
console.log(newStr1.trimStart());
console.log(newStr1.trimEnd());

const str1="cpp";
console.log(str1.replace('pp','++'));

console.log(str.includes('xyz'));

console.log(str.split('-'));
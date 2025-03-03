const arr=[1,2,3,4,5];
console.log(arr[0]);

const arr1=["abc" ,"xyz"];
console.log(arr1[0]);

const arr2=new Array(1,2,3,4);
console.log(arr2[3]);

//********METHIDS***********//

arr.push(6);
arr.push(7);
console.log(arr);


arr.pop();
console.log(arr);

arr.unshift(8);
console.log(arr);
// 8 will add in front: [8, 1, 2, 3, 4, 5, 6]

console.log(arr.includes(4));
// is present or not

console.log(arr.indexOf(8));
//index of element if it is not present then -1

const newArr = arr.join();
console.log(newArr);
//changes into string

console.log("A" , arr);
const newArr1 = arr.slice(1,3);
console.log(newArr1);
// it returns section of array
//it extract the part of string

const newArr2 = arr.splice(1,3);
console.log(newArr2);
//used to remove, replace or insert items starting at a chosen index.

//slice() creates a new array with a portion of elements copied from the original array, while splice() mutates the original array itself by removing, replacing or adding elements to it


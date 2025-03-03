const marvel=["thor","hulk","loki"];
const dc=["superman","flash","batman"];

// marvel.push(dc);
// console.log(marvel);
//array inside array : [ 'thor', 'hulk', 'loki', [ 'superman', 'flash', 'batman' ] ]
//As array can take any datatype so it takes other array as single data

marvel.concat(dc);
console.log(marvel);
// it will return only marvel

const allHeros=marvel.concat(dc);
console.log(allHeros);
//it is used to merge two arrays just by creating new var

const allHeros1=[...marvel,...dc];
console.log(allHeros1);
//spread operation

const arr= [1,2,3,[4,5,6] ,7 ,[6,7,[4,5]]];
const arr1=arr.flat(Infinity);
console.log(arr1);
// create single array :   1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]

console.log(Array.isArray("abc"));
// will return false

console.log(Array.from("abcxyz"));
//[ 'a', 'b', 'c', 'x', 'y', 'z' ]

console.log(Array.from({name:"abc"}));
//will return empty list

let score1 = 100;
let score2= 200;
let score3 = 300;
console.log(Array.of(score1 , score2 , score3));
//returns new elements from set of elements
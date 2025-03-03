"use strict"; //treat all JS code as newer version

//alert(3+3) // gives error as we are using node.js, not browser

let name="Tejashwini"; 
let age=19; 
let isLoggedIn=true; 


// DATATYPES
/* ==primitive datatype===
    1.number =>2^53 range
    2.bigint
    3.string =>""
    4.boolean
    5.null =>datatype as well as standAlone value
    6.undefined =>declared but value is not assigned
    7.symbol =>used for uniqueness

*/ 
console.log(typeof age);
console.log(typeof null) //it returns object
console.log(typeof undefined); // it return undefined


const id=Symbol('123');
const anotherId= Symbol('123');
console.log(id===anotherId);
//it will return false 

const bigNumber=123456n;
console.log(typeof bigNumber);
//retur bigInt

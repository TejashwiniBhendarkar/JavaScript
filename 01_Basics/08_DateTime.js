 let myDate = new Date();// Here Date is an obj
 console.log(myDate);
 // returns todays date=2025-03-01T15:44:39.159Z
console.log(myDate.toString());
//Sat Mar 01 2025 21:14:39 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());
//3/1/2025, 9:16:18 PM

let CreateDate= new Date (2023,0,23);// month start from 0 so it is jan
console.log(CreateDate.toLocaleString());

let DT =new Date(2023, 0, 23 , 5, 3);
console.log(DT.toLocaleString());
// 5:03 is time

let CreateDate1=new Date("2023-01-14");//yy-mm-dd
console.log(CreateDate1.toLocaleString());
// it can be dd-mm-yy (14-01-2023)

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(CreateDate.getTime());
// it gives timestamp used in webpages to compare time
// it is in milisec

let sec=Math.floor(myTimeStamp/1000);
console.log(sec);
// converted into seconds
let minutes=Math.floor(myTimeStamp/1000/60);
console.log(minutes);
// converted into minutes
let hours=Math.floor(myTimeStamp/1000/60/60);
console.log(hours);
//converted into hours

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and month ${newDate.getMonth()}`);





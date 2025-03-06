const tinderUser = new Object();
console.log(tinderUser);
//singleton object

const tinderUser1 = {};
//non singleton

tinderUser1.id="123@abc";
tinderUser1.name="james";
tinderUser1.isLoggedIn = false;
console.log(tinderUser1);

const regularUser = {
    email:"abc@gamul.com",
    fullname : {
        userfullname : {
            firstname:"tony",
            lastname :"stark"
     }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

const obj1={1:"a" , 2: "b"};
const obj2 ={3:"a" , 4: "b"};

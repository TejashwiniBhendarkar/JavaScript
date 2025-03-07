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
    email:"abc@gamail.com",
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
const obj3 = Object.assign({},obj1 , obj2);
console.log(obj3);
//it is used to merge 
//{}->target  obj1 & obj2->value

const obj4 ={ ...obj1 , ...obj2};
console.log(obj4);
//used to merge and mostly used

const user = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email:"xyz@gmail.com"
    }

]
console.log(user[1].email);

console.log(Object.keys(tinderUser1));
//[ 'id', 'name', 'isLoggedIn' ] return  array of keys
console.log(Object.values(tinderUser1));
//[ '123@abc', 'james', false ]
console.log(Object.entries(tinderUser1));
//[ [ 'id', '123@abc' ], [ 'name', 'james' ], [ 'isLoggedIn', false ] ]  
console.log(tinderUser1.hasOwnProperty('isLoggedIn'));


//***DESTRUCTURING OBJECT*****/

const course = {
    coursename :"JavaScript",
    price:"66666",
    location:"pune"
}
const {price} = course;
console.log(price);

const {coursename : cn} = course;
console.log(cn);


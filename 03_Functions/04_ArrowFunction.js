const user ={
    username:"abc",
    price: 400,

    welcomeMessage: function(){
        console.log(`${this.username},  welcome to website`);

    }
}
console.log(this);
// {}
//this ->return value based on its context

function one (){
    console.log(this);
    //return various value because it is inside function
}
one();

//Arrow function

const addtwo = (num1 , num2) => {
    return num1+num2;
}

console.log(addtwo(3,4));



var c=57;
let a=300;
if(true){
    let a=19;
    const b=20;
    var c=30;
    console.log("inner: ",a);
}
// console.log(a);
// console.log(b);
// console.log(c);
//out of scope
 console.log(c);//c=30
 //still it will give output because of var

console.log(a);
//return 300



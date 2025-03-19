

if(true){
    const username ="xyz";
    if(username === "xyz"){
        const website ="twitter";
        console.log(username + website);
    }
  //  console.log(website);
  console.log(username);
}


function parent(){
    const username ="abc";

    function child(){
        const website ="yt";
        console.log(username);//parent element can be accessed
    }
    console.log(website);//parent cannot accessed child element
    //it will give ***error**
    two();
    
}
one();
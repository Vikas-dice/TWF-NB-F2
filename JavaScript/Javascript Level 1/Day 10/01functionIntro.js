
/*

1- function statement



*/

function sayHello(){

    console.log("Hello sir ")
}

let rv=sayHello();
console.log(rv)


//function expression - function statement -variable 

let fun=function sayBye(){
    console.log("bye bye")
}

// sayBye();
let rv2=fun();
console.log(rv2)


//anonymous

let fun2=function(){
    console.log("i am angel priya")
}
fun2();


//function with params 

function printMyDeatils(name,age,salary,ismarried,education){
 console.log(name)
console.log(age)
console.log(salary)
console.log(ismarried)
console.log(education)
}
 printMyDeatils("vikas",27,10000,false,"Btech");
 printMyDeatils("puneet",30,50000,true,"bcom");
 console.log("-------------")
 printMyDeatils("aman","twenty four",100000,false);
 printMyDeatils(34,250000,"parekh","btech",true);
 printMyDeatils("negi",20,12000,false,"10th","vikas",true)
 console.log("-------------------------------------")
 printMyDeatils("123",function(){},"kuch bhi",true,function(){})




 //function with return




console.log("learning about return keyword")


 function primtMyAge(umar){
    console.log("helllo world")
    return umar;
    console.log("helllo world")
 }
 let ans=primtMyAge(30)
 console.log(ans)

 function somefun(a,b,c){
    return a+b+c;
 }

 let ans2=somefun(10,20,30)
//  console.log(first)
 console.log(ans2)








 //si= prt/100


 function Si(p,r,t){
    return p*r*t/100;
 }

 let amt=Si(1000,5,2);

 console.log(amt)

 let am2=Si(2000,3,3);
 console.log(am2)

 
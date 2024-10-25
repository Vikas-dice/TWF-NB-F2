

let fun=()=>{
    console.log("hello sir")
}

fun();


//fat arrow with a params


let fun2=(name,age,salary,ismarried)=>{
    console.log(name,age,salary,ismarried)
}

fun2("vikas",27,10000,false)


//fat arrow with return

let fun3=(salary)=>{
    return salary;
    console.log("vikas")
}

let ans =fun3(10000);
console.log(ans)


//fat arrow with implicit return 

let fun4=(a,b)=>a+b;

let sum=fun4(10,20)
console.log(sum)

let fun5=(name)=>name;
console.log(fun5("rohan"))


let fun6=name=>console.log(name)


fun6("aman");

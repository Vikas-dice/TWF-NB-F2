/*

prime number - range - sum


*/

function primeinrangeandtheirsum(start,end){

let sum=0;
    for(let num=start;num<=end;num++){
        if(num==1){
            continue;
        }
        let nof=0;
        for(let div=2;div*div<=num;div++){
            if(num%div==0){
                nof++;
                break;
            }
        }
        if(nof==0){
            sum=sum+num;
            // console.log("prime -",num)

        }
        

    }
    return sum;

}



let ans=primeinrangeandtheirsum(1,10);
console.log(ans)


console.log("------------overview-----------")
/*
es5 
function starement
function expression 
anonymous function
function with params 
function with return 


es6 
fat arrow func
fat arrow with params
fat arrow with return
fat arrow with implicit return 



fat arrow func

()=>{
    
    }


*/



let fun1=name=>console.log("hello sir ",name)

fun1("vikas");


let fun2=(name,age,salary)=>console.log(name,age,salary)


fun2("vikas",28,10000);


let fun3=(name,age,salary,ismarried)=>{

    console.log(name,age,salary,ismarried)
    return function(){}
    console.log("hello world ")
}

let rv=fun3("vikas",28,10000,true)
console.log(rv)





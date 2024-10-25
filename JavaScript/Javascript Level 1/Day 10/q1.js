

let a=function checkPrime(num){


    let nof=0;
    for(let div=2;div*div<=num;div++){
        if(num%div==0){
            nof++;
            break;
        }
    }
    if(nof>0){
        return "not prime"
    }else{
        return "prime"
    }
}


// let rv=checkPrime(110);
// // let rv2=checkPrime(15)
// console.log(rv)


// // checkPrime(100);

let ans =a(20);
console.log(ans)


function primeinRange(start,end){

}

primeinRange(10,300);

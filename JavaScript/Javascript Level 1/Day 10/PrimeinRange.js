

function primeInRange(start,end){
    let count=0;
  


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
            console.log(num)
        }
        // if(nof>0){
        //     // return "not prime"
        //     console.log("not prime ")
         
        // }else{
        //     // return "prime"
        //     console.log(" prime ",num)
        //     count++;
        // }
    }
    // return count;
}



// primeInRange(10,200);
primeInRange(1,10);

//prime count ?

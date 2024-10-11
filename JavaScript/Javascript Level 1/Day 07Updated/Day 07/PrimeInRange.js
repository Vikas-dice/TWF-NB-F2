

let sn=1;
let en=30;
for(let num=sn;num<=en;num++){
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
    if(nof>0){
        console.log(num," not prime")
    }else{
        console.log(num," prime")
    }
}

/*

HW - Armstrong number 

153 
1 ki power 3+ 5 ki pwpoer 3 + 3 ki power 3 = 153


1+125+27=153


124
1+8+64=
*/
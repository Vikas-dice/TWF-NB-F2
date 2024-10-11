

let sn=1;
let en=300;
let nof=0;

for(let div=2;div*div<=num;div++){
    if(num%div==0){
        nof++;
        break;
    }
}
if(nof>1){
    console.log("not prime")
}else{
    console.log("prime")
}
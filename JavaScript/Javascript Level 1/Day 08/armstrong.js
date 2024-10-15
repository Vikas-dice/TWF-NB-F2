

let num=153;
let temp=num;
let temp2=num;

/*
step 1 - nod ?
*/
let nod=0;
while(temp>0){
    temp=Math.floor(temp/10);
    nod++;
}
// console.log(nod)
var sum=0;
while(temp2>0){
    let ld=temp2%10;
    sum=sum+Math.pow(ld,nod);
    temp2=Math.floor(temp2/10);
}
// console.log(sum)
// console.log(num)
if(num==sum){
    console.log("yes")
}else{
    console.log("no")
}

// if(num==sum){
//     console.log("yes")
// }else{
//     console.log("no")
// }

/*
l3 num=153
l4 temp=num=153
l5 temp2=num=153
l14 nod=0
l15 temp>0 153>0 true
l16 temp=temp/10 153/10 15.3 15
l17 nod++ nod=0+1=1
l15 temp>0 15>0 true
l16 temp=temp/10 15/10 1.5 1
l17 nod++ =nod=1+1=2
l15 temp>0 1>0 true
l16 temp=temp/10 1/10 0.1 0
l17 nod++ =nod=2+1=3
l15 temp>0 0>0 fALSE

L21 SUM=0
l22 temp2>0 153>0 true
l23 ld=temp2%10 153%10= 3
l24 sum=sum+ld*nod
sum=0+3*3=0+27=27
l25 temp2=temp2/10 153/10 15.3 15
l22temp2>0 15>0 true
l23 ld=15%10=5
l24 sum=sum+ld*nod
sum=27+5*3=
l25 temp215/10 1.5 1
l22 tem2>0 1>0 

153==153 true
l30 yes





*/

console.log("-------------------------")

//scope 
// {
//     let name="vikas";

// }


// console.log(name)

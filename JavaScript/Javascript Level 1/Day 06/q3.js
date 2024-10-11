

// let num=786;
// console.log(num%10) //6 - num510 = last digit
// console.log(num/10); // 78.6 floor = 78 ceil 79

/*

5786
no of digits - 
q1- nod ?

5786 nod+1
578
57
5




*/

let num=566678;
let nod=0;

while(num>0){
    num=Math.floor(num/10);
    nod++;
    
}
console.log(nod)

/*
l23 num=ram=5678
l24 nod=ram=0
l26 num>0 5678>0 true
l27 num=num/10 5678/10 567.8 floor 567
l28 nod++ nod=0+1=1
l26 num>0 567>0 true
l27 num=num/10 567/10 56.7 floor 56
l28 nod++ nod=1+1=2
l26 num>0 56>0 true
l27 num=num/10 56/10 5.6 floor 5
l28 nod++ =2+1=3
l26 num>0 5>0 true
l27 num=num/10 5/10 0.5 floor 0
l28 nod++ nod=3+1=4
l26 num>0 0>0 false
l31 4



*/

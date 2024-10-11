
/*
4578
4
5
7
8

% /

4578/1000 4.578 floor print 4
4578 - 578
4578%1000=578


578/100 = 5.78 floor print 5

578=78
578%100=78

78/10 = 7.8 floor print 7

78-8
78%10=8

8/1=8 floor print 8

10 ki power nod-1
10 ki power 4-1
10 ki powewr 3 =1000

nod??


*/

let num=45781;
let temp=num;
let nod=0;
while(temp>0){
    temp=Math.floor(temp/10);
    nod++;
}

// console.log(nod)
// console.log(num)

let div=Math.pow(10,nod-1);
console.log(div)


while(num>0){
    let fd=Math.floor(num/div);
    console.log(fd)


    num=num%div ;
    div=Math.floor(div/10);
}
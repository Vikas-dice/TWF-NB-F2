

// let num=1234;
// let oddcount=0;
// let evencount=0;

// while(num>0){
//     let ld=num%10;
//     if(ld%2==0){
//         evencount=evencount+1;
//     }else{
//         oddcount=oddcount+1;
//     }
//     num=    Math.floor(num/10);


// }

// console.log(oddcount,evencount);


/*
num=4578
4
5
7
8

hint =nod?


4578%1000=578
4578/1000=4.578 floor 4 print

578/100=5.78 floor 5 print
578%100=78

78/10=7.8 floor 7 print
78%10=8

8/1=8 print
8%1=0

10 ki power nod-1
10 ki 4-1= 1000

Math.pow(10,3)




*/

// console.log(Math.pow(10,4))



let num=12345 //4678%1000=678
let temp=num;
let nod=0;
while(temp>0){
    temp=Math.floor(temp/10);
    nod++;
}
console.log("bacha hua number",num)


// console.log(nod)

let div=Math.pow(10,nod-1);
// console.log(div)

while(num>0){
    let fd=Math.floor(num/div);
    console.log(fd)
    num=num%div;
    div=Math.floor(div/10);



}

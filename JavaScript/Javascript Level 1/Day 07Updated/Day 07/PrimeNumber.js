
/*

2 factor

num, 1

3-1,3
5-1,5
6-1,2,3,6
2

App 1 - 

num=7
7%1=0 factor+1
7%2
7%3
7%4
..

7%7



*/

console.log("prime number app 1 ")


let num=7;
let nof=0;

// for(let div=1;div<=num;div++){
//     if(num%div==0){
//         nof++;
        
//     }

// }
// for(let div=2;div<=num-1;div++){
//     if(num%div==0){
//         nof++;
//         break;
//     }

// }

for(let div=1;div*div<=num;div++){
    if(num%div==0){
        nof++;
    }
}
if(nof==0){
    console.log(" prime")
}else{
    console.log("not prime")
}

/*
l31 num=ram=5
l32 nof=ram=0
l33 div=ram=1
div<=num 1<=7 true
l34 num%div==0 7%1==0 true
l35 nof++ nof=0+1=1
l33 div++ div=1+1=2
div<=num 2<=7 true
l34 num%div==0 7%2==0 false
l33 div++ div=3
div<=num 3<=7 true
l34 num%div==0 7%3==0 false
l33 div++ =div=4
div<=num 4<=7 true
l34 num%div==0 7%4==0 false
l33 div++ div=5
div<=num 5<=7 true
l34 num%div==0 7%5==0 false
l33 div++ div=6
div<=num 6<=7 true
l34 num%div==0 7%6==0 false
l33 div++ div=7
div<=num 7<=7 true
l34 num%div==0 7%7==0true
l35 nof++ nof=1+1=2
l33 div++ div=8
div<=num 8<=7 false
;39 nof>2 2>2 false
else 
prime



*/
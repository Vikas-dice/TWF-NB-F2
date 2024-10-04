

/*
loops - 
1- init
2-condition/statement
3-update 


init statement - only once 

condition check - init ki value kiuch bhi change aayga tab tab wo check krega 

loops k bahar tum tabhi nikl paoge jab tumhari condition statementn false na hojaye 





*/

//nested loops - loop k andrr loop


// for(let i=5;i<=15;i=i+1){
//     //body 
//     // console.log("vikas",i);
//     for(let j=1;j<=5;j=j+1){
//         //body 
//         console.log("vikas",i,j);  
//     }

// }


/*
l25 i=ram=5
    i<=15 5<=15 true
l28 j=ram=1
j<=5 1<=5 true
l30 vikas 5 1
l28 j=j+1 1+1=2
j<=5 2<=5 true
l30 vikas 5 2
l28 j=j+1 2+1=3
j<=5 3<=5 true
l30 vikas 5 3
l28 j=j+1 3+1=4
j<=5 4<=5 true
l30 vikas 5 4
l28 j=j+1 4+1=5
j<=5 5<=5 true
l30 vikas 5 5
l28 j=j+1 5+1=6
j<=5 6<=5 false
l32 
l25 i=i+1 5+1=6
i<=15 6<=15 true
l28 j=1 =ram
j<=5 1<=5 true
l30 vikas 6 1




*/


for(let i=1;i<=5;i=i+1){
    let j=1;
    while(j<=3){
        console.log("vikas",i,j);
        j=j+1;
    }

}

/*
l69 i=ram=1
i<=5 1<=5 true
l70 j=ram=1
l71 j<=3 1<=3 true
l72 vikas 1 1
l73 j=j+1 1+1=2
l71 j<=3 2<=3 true
l72 vikas 1 2
l73 j=j+1 2+1=3
l71 j<=3 3<=3 true
l72 vikas 1 3
l73 j=j+1 3+1=4
l71 j<=3 4<=3 false
l69 i=i+1 1+1=2
i<=5 2<=5 true
l70 j=ram=1
l71 j<=3 1<=3 true
l72 vikas 2 1
l73 j=j+1 j=1+1=2
l71 j<=3




*/

let i=2;
while(i<=5){
    let j=3;
    while(j<=5){
        console.log("vikas",i,j);
        j=j+1;   
    }
    i=i+1;
}




/*

break - reserved keyword js - apne paas wale loop se bahar fenkega 


continue - wo wali iteration skip mkrega 






*/


for(let i=1;i<=5;i=i+1){
    console.log("vikas",i);
    for(let j=1;j<=3;j=j+1){
        console.log("dice",j);
        break;  
    }
    console.log("loop k bahar fenk dia gya");

}


/*
l18 i=ram=1
i<=5 1<=5 true
l19 vikas 1
l20 j=ram=1
j<=3 1<=3 true
l21 dice 1
l22 break;
l24 loop k bahar 
l18 i=i+1 1+1=2
i<=5 2<=5 true
l19 vikas 2
l20 j=ram=1
j<=3 1<=3 true
l21 dice 1
l22 break 
l24 loop k bahah
l18 i=i+1 2+1=3
i<=5 3<=5 true
l19 vikas 3


*/

/*
conitnue-0 wo wali iteration skip 


*/

for(let i=2;i<=10;i=i+1){
    console.log("vikas",i);
    if(i==4){
        continue;
    }
    console.log("dice",i);
}

/*
l59 i=ram=2
i<=10 2<=10 true
l60 vikas 2
l61 i==4 2==4 false
l64 dice 2
l59 i=i+1 2+1=3
i<=10 3<=10 true
l60 vikas 3
l61 i==4 3==4 false
l64 dice 3
l59 i=i+1 3+1=4
i<=10 4<=10 true
l60 vikas 4
l61 i==4 4==4 true
l62 continue 
l59 i=i+1 4+1=5




*/


for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue; 
    }
    
    if (i === 8) {
      break;
    }
    
    console.log(i); 
}
  
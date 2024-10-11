
let nsp=0;
let nst=5;
let val=5;
for(let row=1;row<=5;row++){
    let ans ="";
    //spaces
    for(let space=1;space<=nsp;space++){
        ans=ans+" ";  
    }
    //numbers
    for(let star=1;star<=nst;star++){
       ans=ans+val;
    }
    val--;
    //new line 
    //update
    nsp=nsp+1;
    nst=nst-1;
    console.log(ans)
}
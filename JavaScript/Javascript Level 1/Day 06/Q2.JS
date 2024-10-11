
let nsp=0;
let val=65;
for(let row=1;row<=5;row++){
    let ans ='';
    //space
    for(let sp=1;sp<=nsp;sp++){
        ans=ans+" "
    }
    for(let ch=0;ch<5-row+1;ch++){
        ans=ans+(String.fromCharCode(val+ch))
    }
    val++;
    nsp=nsp+1;
    console.log(ans)
}
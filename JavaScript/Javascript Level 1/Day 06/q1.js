

let age=28; //number - 0 1 binary 

/*
ascii code 

char 
 
     
number - 

A
AB
ABC
ABCD
ABCDE



*/


// let name ="vikAs";
// console.log(name.charCodeAt(3))



for(let row=1;row<=5;row++){

    let ans ='';
    let val=65

    for(let ch=1;ch<=row;ch++){
        
        ans=ans+(String.fromCharCode(val))
        val++;
    }
    // val++;

    console.log(ans);
    
}

// let num=32;
// console.log(String.fromCharCode(num));
//a+1=b
//65+1=66=B

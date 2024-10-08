


// /*
// output 

// console.log("vikas")
// process.stdout.write("vikas")



// */

// // console.log("vikas");
// // process.stdout.write("chaudhary")

// console.log("vikas")
// console.log("chaudhary")


// process.stdout.write("dice")
// process.stdout.write("academy")
// console.log("vikas")
// console.log("full stack")

// console.log(123);
// process.stdout.write("123")





// for(let row=1;row<=5;row=row+1){

//     //stars kmi chapai

//     for(let star=1;star<=row;star=star+1){
//         process.stdout.write("*")
//     }
//     console.log();
    


// }

// for(let row=1;row<=5;row=row+1){


//     //step1 - kuch starts chhapen 

//     //stepm 2 - mnew line m ana h

//     // for(let star=1;star<=5-row+1 ;star=star+1){
//     //     process.stdout.write("*")
//     // }

//     for(let star=5;star>=row;star=star-1){
//         process.stdout.write("*")

//     }

//     console.log()
// }


// let nsp=4;
// let nst=1;


// for(let row=1;row<=5;row++){
//     //step 1 -spaces
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }
//     //step 2- kuch stars
//     for(let star=1;star<=nst;star++){
//         process.stdout.write("*")
//     }

//     //step 3- new line 
//     console.log()
//     //step 4 - update stars and space 
//     nst=nst+1;
//     nsp=nsp-1;
// }

// let nsp=0;
// let nst=5;
// for(let row=1;row<=5;row++){


//     //step 1 =s[aces]
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }
//     //step 2 - stars
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")
//     }

//     //new line 
//     console.log()

//     //update spaces stars 
//     nsp=nsp+1;
//     nst=nst-1;

// }


// let nsp=3;
// let nst=1;
// for(let row=1;row<=4;row++){


//     //spaces
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }

//     //stars
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")
//     }

//     //new line 

//     console.log()

//     //update spaces stars
//     nst=nst+2;
//     nsp=nsp-1;

// }

// let nsp=2;
// let nst=1;
// for(let row=1;row<=5;row++){

//     //spaces
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }

//     //stars
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")

//     }


//     // new line 
//     console.log()

//     //update stars and spaces 
//     if(row<3){ //row 1 2 3 
//         nsp=nsp-1;
//         nst=nst+2;

//     }else{
//         nsp=nsp+1;
//         nst=nst-2;
//     }
// }


let nsp=0;
let nst=5;
for(let row=1;row<=5;row++){
    //spaces
    for(let space=1;space<=nsp;space++){
        process.stdout.write(" ")
    }
    //stars
    for(let star=1;star<=nst;star++){
        process.stdout.write("*")
        
    }
    //new line 
    console.log()
    //upodat
    if(row<3){
        nsp=nsp+1;
        nst=nst-2;
    }else{
        nsp=nsp-1;
        nst=nst+2;
    }
}


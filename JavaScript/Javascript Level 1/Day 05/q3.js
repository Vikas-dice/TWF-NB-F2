

// for(let row=1;row<=5;row++){
//     let ans ="";

//     //5 stars chhapne 

//     for(let star=1;star<=5;star++){

//         // process.stdout.write("*")
//         ans=ans+"*"
//     }

//     //new line m aana 
//     console.log(ans)
// }

// let nsp=0;
// for(let row=1;row<=5;row++){
//     //spaces
//     for(let space=1;space<=nsp;space++){
//         process.stdout.write(" ")
//     }

//     //single star
//     process.stdout.write("*")

//     // new line
//     console.log()

//     //update spaces
//     nsp=nsp+1;
// }

for(let row=1;row<=5;row++){
    for(let col=1;col<=5;col++){

        if((row==col) || (row+col==6) ){
            process.stdout.write("*")

        }else{
            process.stdout.write(" ")
        }

        // if(row+col==6){
        //     process.stdout.write("*")
        // }else{
        //     process.stdout.write(" ")

        // }
        // if(row==col){
        //     process.stdout.write("*")

        // }else{
        //     process.stdout.write(" ")
        // }
        
    }
    console.log()
}
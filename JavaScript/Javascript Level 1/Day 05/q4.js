

// for(let row=1;row<=7;row++){
//     for(let col=1;col<=7;col++){
//       if(row==1){
//         if(col==1 || col>=4){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")

//         }


//       }else if(row<=3){
//          //1 ,2 , 3
//          if(col==1 || col==4){
//             process.stdout.write("*")

//          }else{
//             process.stdout.write(" ")

//          }


//       }else if(row==4){
//         process.stdout.write("*")


//       }else if(row<=6){ // 1,2,3,4,5,6
//         if(col==4 || col==7){
//             process.stdout.write("*")

//         }else{
//             process.stdout.write(" ")

//         }


//       }else{
//         if(col<=4 || col==7){
//             process.stdout.write("*")

//         }else{
//             process.stdout.write(" ")

//         }

//       }
       


        
        
//     }
//     console.log()
// }

let nsp=2;
let nst=1;
let val=1;
for(let row=1;row<=5;row++){

    let ans="";
   

    //spaces
    for(let sp=1;sp<=nsp;sp++){
        ans=ans+" "
    }

    //stars
    for(let st=1;st<=nst;st++){
        ans=ans+val+" ";
      
    }

    //new line 
    console.log(ans)
    val++;

    //update nsp snt
    if(row<3){
        nsp=nsp-1;
        nst=nst+2;
    }else{
        nsp=nsp+1;
        nst=nst-2;
    }

    
}
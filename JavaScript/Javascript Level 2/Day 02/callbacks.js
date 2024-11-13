/*
task1 - server connect
task 2 - course explore
task 3 - course selection
task 4 - onboard

*/

// function fun(a,b){
//     a();


// }

// fun(function(){
//     console.log("hello")
// },function(){})

function connectToDiceServer(callback){
    console.log("connecting ............")

    setTimeout(() => {
        console.log("connected")
       callback();
    }, 3000);
}

function explorecourses(callback){
    console.log("exploring...........")
    setTimeout(()=>{
        console.log("explored")
        callback();
        // courseSelection()    
    },2000)
}


function courseSelection(callback){
    setTimeout(()=>{
        console.log("course selected")
        callback();
        
       
    },1000)
}

function onboard(){
    console.log("classes chal rhi h mast")
}


connectToDiceServer(()=>{
    explorecourses(()=>{
        courseSelection(()=>{
            onboard();
        })
    })
})
// function main(){
//     connectToDiceServer(explorecourses(courseSelection(onboard())))

// }
// main();

// function main(){
//     ()=>{
//         connectToDiceServer(

//             ()=>{
//                 explorecourses(
//                     ()=>{
//                         courseSelection(
//                             ()=>{
//                                 onboard();

//                             }
//                         )

//                     }
//                 )

//             }
//         )
//     }



// }


// main();


// connectToDiceServer(()=>{
//     explorecourses(()=>{
//         courseSelection(()=>{
//             onboard();

//         })

//     })

// })


// function main(){
//     connectToDiceServer();
//     explorecourses();
//     courseSelection();
//     onboard();
    



// }
// main();





// console.log("vikas");
// console.log("chaudhary")

// for(let i=0;i<=1000000;i++){ //loop - 5 sec
//     console.log("counting ",i)
// }

// console.log("dice")
// console.log("academy")


/*

dice - server se connect kroge  task 1
explore course - task2
course select - task3
class lene shuru kroge - task 4 







*/

// function connecttoDiceServer(){
//     console.log("connectting ......")

//     console.log("dconnected to dice server")
// }

/*
settimeout
setinterval


*/

// setTimeout(function(){
//     console.log("i am running")
// },5000)

// const id=setInterval(function(){
//     console.log("i am running")
// },2000)

// clearInterval(id)


function connecttoDiceServer(){
    console.log("connectting ......")
  setTimeout(() => {
        console.log("connected to dice server")
        
    }, 3000);
}

function exploreCourse(){
    console.log("exploring-------")
    setTimeout(() => {
        console.log("courses explored")
        
    }, 5000);
}

function selectCourse(){
    console.log("course selection done")
}
function onboard(){
    console.log("class le rhi hu")
}
connecttoDiceServer();
exploreCourse();
selectCourse();
onboard();



/*

fetch - api - js native 
fetch - data uthana h , date update

api- url - hit - data 

fetch 
step 1- data = bolb data - 
step 2 - bolb data - json format - object




*/

// async function getData(){

//    const bolbdata= await fetch('https://randomuser.me/api/')
// //    console.log(bolbdata)
// const actualdata=await bolbdata.json();

// console.log(actualdata)


// }
// getData();


async function getdata(){
   let bolbdata=await fetch('https://restcountries.com/v3.1/all')
  let actualdata=await bolbdata.json()
  console.log(actualdata[1])
}

getdata();

/*
https://restcountries.com/v3.1/all

*/
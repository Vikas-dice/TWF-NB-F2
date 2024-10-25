

/*


let marksstudent1=55;
let marksstudent2=44;
let marksstudent3=77;
..



variables - ram 

*/

let marks=[33,44,55,66,77,56,45,98,100,48];


//syntax [10,20]
/*
js - array - hetrogenous 

conventional array = homegneous 
number 
flaot
string 


*/
let arr=[10,"vikas",'z',true,false,undefined,null,function fun(){console.log("hello")}]


//traverse 

/*

index 

*/



let array=[33,44,55,66,77,56,45,98,100,48];
console.log(array[0])
console.log(array[2])
console.log(array[20])

console.log("--------------------")
console.log(array.__proto__) //Array

console.log(array.length)
console.log(array[array.length-1])

//traversal - length - loops









let names=["vikas","rohan","puneet","reena","seema","rani","kalu"]

//for loop

for(let idx=0;idx<=names.length-1;idx++){
    console.log(names[idx])
}


//while 

let idx=0;
while(idx<names.length){
    console.log(names[idx])
    idx++;
}

//do while loop 

let idxx=0;
do{
    console.log(names[idxx])
    idxx++;
}while(idxx<names.length)



    //for of loop
console.log("00000000000000000000000000000")
for(let maal of names){
    console.log(maal)
}


//forEach - callback - function k andrr koi dusra function paass klrdena asparameter use callback func


//foreach
console.log("array tarversal using for each loop")
names.forEach(function fun(maal){
    console.log(maal)
})


let array2=[100,200,"vikas",[1,2,3,4],function fun(){console.log("i am fun")},function fun2(){
    return "dice academy"
}]


for(const maal of array2){
    console.log(maal)
}


// console.log(array2[array2.length-1]())


let rv= array2[array2.length-1]();
console.log(rv)

let array3=[10,20,30,"vikas",true,[1000,2000,3000,4000]]
console.log(array3[5].length-1)



/*

array inbuilt methds




*/


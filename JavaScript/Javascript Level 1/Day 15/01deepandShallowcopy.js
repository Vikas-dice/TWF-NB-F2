


/*

primitive data type - value 
non pri- func array object - refe- address- ram address 


*/

// let obj1={
//     x:100,
//     y:200,
// }

// let obj2=obj1;

// console.log("before -",obj1)
// console.log("before -",obj2)

// obj1.z=300;

// console.log("after -",obj1)
// console.log("after -",obj2)


/*

object k andrr deep copy kese kre 

5 ways 

1- rest and spread op
2- loop



*/











let obj1={
    x:100,
    y:200
}

let obj2={...obj1}

console.log("before -",obj1)
console.log("before -",obj2)

obj1.z=300;

obj2.name="vikas"

console.log("after -",obj1)
console.log("after -",obj2)



//for in loop


let obj3={
    name:"vikas",
    age:28,
    salary:1000
}

let obj4={};


console.log("before -",obj3)
console.log("before -",obj4)


for(let key in obj3){
    obj4[key]=obj3[key]
}


console.log("after -",obj3)
console.log("after -",obj4)

obj3.ismarried=false;

console.log("-------------------------------------------")

console.log("after -",obj3)
console.log("after -",obj4)



// let ans =Object.entries(obj3)
// console.log(ans)


//structure cloning 



let obj5={
    a:100,
    b:200
}

let obj6=structuredClone(obj5)



console.log("before -",obj5)
console.log("before -",obj6)

obj5.c=300

console.log("after -",obj5)
console.log("after -",obj6)





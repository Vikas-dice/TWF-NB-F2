

let mydetails={

    fname:"vikas",
    lname:"chaudhary",
    age:28,
    salary:10000,
    // salary:1000,
    ismarried:false,
    marks:[50,60,70],
    grade:'A',
    task:function(){
        console.log("teaching")
    },
    otherdetails:{
        hometown:"meerut",
        education:"btech"
    }
}

//acccess kese kre 

/*

. notation 
["key"]


*/

console.log(mydetails)
console.log(mydetails.grade)
console.log(mydetails.salary)
console.log(mydetails['ismarried'])
console.log(mydetails['academy'])


//loops - length (for while do while foreach),for in loop

for(let key in mydetails){
    console.log(key,mydetails[key])
}


console.log(mydetails.task())


//objects - mutable immutable 


mydetails.sex="male";

console.log("-------------------------------")

mydetails.salary=1000;


console.log(mydetails.salary)

//deep copy and shallow copy 

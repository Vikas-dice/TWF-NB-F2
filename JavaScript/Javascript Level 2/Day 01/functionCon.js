

function Employee(name,age,salary,task){

    this.naam=name;
    this.umar=age;
    this.salary=salary
    this.kaam=task;




}

let obj1=new Employee("vikas",28,10000,function fun(){console.log("teaching")})
// console.log(obj1)
let obj2=new Employee("manas",18,5000,function(){console.log("offie boy")});
// console.log(obj1,obj2)

// obj2.kaam()

console.log(obj2.umar)



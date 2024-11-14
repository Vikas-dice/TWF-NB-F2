
/*
task1  - server se connect kro
task 2 - course explore
task 3 - course selection 
task 4 - class enroll





*/

function connectToDiceServer(){
    console.log("connecting to dice server ...ting ting ting ....")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let connected =true;
            if(connected==true){
                console.log("connected to dice server");
                resolve("connected to server")
            }else{
                reject("connection failed .. please try again error 4040")
            }
        }, 10000);
    })
   
}

function courseExplore(){
    setTimeout(() => {
        console.log("exploring the courses .......")
        
    }, 2000);
   

    return new Promise((resolve ,reject)=>{
        setTimeout(() => {
            let courseFound=true;
            if(courseFound==true){
                console.log("course mil gya ")
                resolve(["js","advance js","DSA","SYSTEM DESIGN"])
            }else{
                reject("no course available for me --meri aukaat bht badi h , dice k paas nahi h jo m dhund rha hu")
            }
            
        }, 7000);
     

    })
}

function courseSelection(courseName){
    console.log("course select kr rha hu thoda sabar kro.....")
    return new Promise((resolve , reject)=>{
        console.log("course selected is",courseName)

        setTimeout(() => {
            if(courseName){
                console.log("course selected ---",courseName)
                resolve(courseName)
            }else{
                reject("please select a valid course name")
            }
            
        }, 3000);
    })

}


function classEnroll(courseName){
    return new Promise((resolve , reject)=>{
        console.log("class enroll kar rha hu m sabar kro thoda....")
        setTimeout(() => {
            let enrollmentsucess=true;
            if(enrollmentsucess==true){
                console.log("m mast class le rha hu , maja agya dice m aake ,swaad aagye pure")
                resolve("enrolled in class-",courseName)
            }else{
                reject("enrollment nahi krna mujhe , m khud se pdhnga ")
            }
            
        }, 1000);
    })
}




connectToDiceServer()
.then((connectStatus)=>{
    console.log(connectStatus)
    return courseExplore();
})
.then((courses)=>{
    console.log("course found ",courses)
    return courseSelection(courses[2]);
})
.then((selectedCourse)=>{
    console.log("your seelcted course is -",selectedCourse)
    return classEnroll()
})
.then((enrollmentsucess)=>{
    console.log("process done ")
})
.catch((err)=>{
    console.log("error ye wala aaya h",err)
})
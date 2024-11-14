

const promise1=new Promise((resolve,reject)=>{
    // resolve("ye lo biscuit tumhara");
    // reject("nahi h bisuit bhai sahab")
    // resolve("biscuit 1");
    // resolve("biscuit 1");
    // resolve("biscuit 1");
    // resolve("biscuit 1");
    // resolve("biscuit 1");
    // resolve("biscuit 1");

    reject("no biscuit");
    reject("no bicuit 2")

})
console.log(promise1)

// promise1.then((maal)=>{
//     console.log(maal)

// }).then((maal2)=>{
//     console.log(maal2)
// }).then((maal3)=>{
//     console.log(maal3)
// })
// promise1.then((maal)=>{
//     console.log(maal)
// })

// promise1.catch((err)=>{
//     console.log(err)

// })

promise1.then((maal)=>{
    console.log(maal)
}).catch((err)=>{
    console.log(err)
}).catch((err2)=>{
    console.log(err2)
})

function test(cb){
    cb();

}

test(function (){
    console.log("testing 1")

test(function(){
    console.log("testing2")

    test(function(){
        console.log("testing 3")

        test(function(){
            console.log("testing 4")

            test(function(){
                console.log("testing 5")
                test(function(){
                    console.log("testing 6")
                    test(function(){
                        console.log("testing 7")
                    })
                })
            })
        })
    })
})
})
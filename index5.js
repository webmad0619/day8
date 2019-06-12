var game = {
    version: 4.5,
    init: function () {

    },
    moveCharacter: function () {

    },
    die: function () {
        console.log("see donald trump naked")
    }
}



// as per the hoisting, you can use secondPerimeter() here
// secondPerimeter()
var z = 1000

// this is a function as a statement. this has hoisting
function secondPerimeter() {
    var z = 10
    //shadowed variables
    
    function checkClosure() {
        z++
        console.log(`hello from checkclosure: ${z}`)

        return z
    }

    checkClosure()
}

// ... or here 
secondPerimeter()

// this is a function as a expression. this doesn't have function hoisting

var sum = function (a, b) {
    return a+b
}

console.log(sum(1,23))



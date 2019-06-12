// // first version 
// function calc(type, a ,b) {
// 	if (type === "sum"){
// 		return a + b;
//     }

// 	if (type === "sub"){
// 		return a- b;
//     }
// }

// // invoke it via calc("sum", 1,3)
// // invoke it via calc("sub", 1, 10)


// second version 
function calc(type, a, b) {
    function sum(s1, s2) {
        if (typeof s1 !== "number" || typeof s2 !== "number" || isNaN(s1) || isNaN(s2)) {
            throw new Error("one param is wrong, please pass numbers only")
        }
        return s1 + s2
    }
    

    function sub(a, b) {
        return a - b
    }

    if (type === "sum") {
        return sum(a, b)
    }

    if (type === "sub") {
        return sub(a, b)
    }
}

// invoke it via 
console.log(calc("sub", 1,1113))
// invoke it via calc("sub", 1, 10)
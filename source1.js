function sum(s1, s2) {
    if (typeof s1 !== "number" || typeof s2 !== "number" || isNaN(s1) || isNaN(s2)) {
        throw new Error("one param is wrong, please pass numbers only")
    }
    return s1 + s2
}


// var result = sum(100, "z")

document.querySelector("#sumNumbers").onclick = function (e) {
    e.preventDefault()

    var s1 = +document.querySelector("#s1").value;
    var s2 = +document.querySelector("#s2").value;

    try {
        document.querySelector("#errorModal").style.display = "none"
        document.querySelector("#sumOutput").innerHTML = sum(s1, s2)
    }
    catch (er) {
        document.querySelector("#errorModal").style.display = "block"
        document.querySelector("#errorModal .title").innerHTML = "Type Error"
        document.querySelector("#errorModal .desc").innerHTML = "one param is wrong, please pass numbers only"
        // var result = sum(100, "z")
    }
}



console.log("we should get to this point")

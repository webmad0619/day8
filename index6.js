// IIFE
(function (a, b) {
    // a == 'hello'
    // b == 'world'

    console.log(a, b)
}('hello', 'world'));

(function (a, b, c, d) {
    console.log(a+b+c+d)
})(1, 2, 3, 1004)

var s1 = function (s1, s2) {
    return s1+ s2
}

function s(s1, s2) {
    return s1+s2
}

var result = (function (s1, s2) {
    return(s1 + s2)
})(10, 20)

console.log(result)
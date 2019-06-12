function add(first, second, callback) {
    var result = first + second;
    debugger
    callback(result);
}

add(6, 4, function (num) {
    for (var i = 0; i < num; i++) {
        console.log("We are anonymous!");
    }
});

// mike way
// add(6, 4, function(num) {for (var i=0; i<num; i++) {console.log("We are anonymous!");}});
function calc(type, a, b) {
    function sum(a, b) {
        if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
            throw new Error("one param is wrong, please pass numbers only")
        }
        return a + b
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
var student = {
    name: "sergio",
    age: 36
}

function checkStudentData(a, b) {
    console.log(this)
    console.log(this.name)
    console.log(this.age)

    console.log(a)
    console.log(b)
}

checkStudentData.apply(student, ["test", "hola"])
// checkStudentData()
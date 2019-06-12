// var student = {
//     name: "sergio",
//     age: 36
// }
// var staffEmployee = {
//     name: "dani",
//     age: 39,
//     salary: 10101010101
// }

// function checkPersonData(a, b) {
//     console.log(`my this value is:`)
//     console.log(this)
//     console.log(this.name)
//     console.log(`this.age before ${this.age}`)
//     this.age += 1
//     console.log(`this.age after ${this.age}`)



//     // console.log(a)
//     // console.log(b)
//     this.contextModified = true

//     console.log(`my this value is:`)
//     console.log(this)
// }

// checkPersonData.apply(student, ["test", "hola"])
// checkPersonData.apply(staffEmployee, ["test", "hola"])
// // checkStudentData()

// function toShape(){
//     this.x = 100
//     this.y = undefined
//     this.z = 200

//     console.log(this)
// }

// var rectangle = {rectangle: true}
// var square = {square: true}

// toShape.apply({rectangle: true})
// toShape.apply(square)

// function changeArrDimensions(){
//     this.push("new value")
// }

// var myArray = [1,2,3]
// changeArrDimensions.apply(myArray)

// console.log(myArray)

var Game = {
    version: 1,
    getGameName: function () {
        console.log("super mario")
    },
    gameCharacter: {
        points: 0,
        increasePoints: function () {
            this.points += 10
        },
        getPoints: function () {
            console.log(this.points)
        }
    }
}

// function toShape(a, b, c){
//     this.x = 100
//     this.y = undefined
//     this.z = 200

//     console.log(this)
// }

// var rectangle = {rectangle: true}
// var square = {square: true}

// rectangle is the new value of this inside of toShape function
// [1, 2, 3] are the params received by toShape
// call and apply do the same, but apply is called with an array and the other one does not
// toShape.apply(rectangle, [1, 2, 3])
// toShape.call(rectangle, 1, 2, 3)


function toShape(a, b, c) {
    this.x = 100
    this.y = 200
    this.z = 300

    console.log(this)
}

var rectangle = { rectangle: true }
var square = { square: true }

var boundToShapeToRectangle = toShape.bind(rectangle)
var boundToShapeToSquare = toShape.bind(square)

boundToShapeToRectangle()
boundToShapeToSquare()
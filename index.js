console.log("Hello world!");
//alert("this is an alert")
let name = "Hoang" //this is a variable
//js is case-sensitive
let Name = "Hau"
console.log("name: " +name+ ",Name: " + Name)
//this is a number variable
let x = 10
let y = 20
console.log("x: " +x)
console.log("y: " +y)
console.log(y ** 5) //** = mũ
if(1 == 1)  {
    let z =144
    console.log("z: " + z)
} //khi console.log ở ngoài khối thì dùng var
console.log(x == '10')//==: so sánh giá trị, ===: so sánh về kiểu
const PI = 3.1416 //const: hằng số và không thể thay đổi
console.log(`PI = ${PI}`)
const hasMercedesG63 = false
console.log(hasMercedesG63)
let message = "I like these cars \
And many others \
Please buy and buy \
"
console.log(message)
var poem = 
"Đi khắp thế gian không ai tốt bằng mẹ \n\
Gánh nặng cuộc đời không ai khổ bằng cha."
console.log(poem)

//Control flow
let i = 0
while(i<10) {
    i++
    console.log(`item = ${i}`)
}
let marks = 9
if(marks > 0 && marks <4) {
    console.log('F')
} else if(marks > 4 && marks < 5.5) {
    console.log('D')
} else if(marks > 5.5 && marks < 7) {
    console.log('C')
} else if(marks > 7 && marks < 8.5) {
    console.log('B')
} else if(marks > 8.5 && marks < 10) {
    console.log('A')
} else {
    console.log("Mark is undefined")
}

//vòng lặp for
for(let i = 0; i <10; i++) {
    if(i == 3 || i==5) {
        continue
    }
    console.log(`i = ${i}`)
}

//array
let  cars = [
    'Mercedes G63',
    'Lamborghini Aventador',
    'Innova',
    'Ferrari'
]
for(let i = 0; i <= cars.length - 1; i++) {
    console.log(cars[i])
}
console.log('using foreach')
cars.forEach(function(car){
    console.log(car)
})

console.log('using foreach with arrow function')
cars.forEach((car) => {
    console.log(car)
})

//for of
for(let car of cars){
    console.log(`name: ${car}`)
}
for(let i in cars){
    console.log('i ='+i)
}
cars.forEach((car, stt, array) => {
    console.log(`${stt+1}.${car}`)
}) 


//thêm phần tử
cars.push("EQS Mercedes Sedan")
console.log(cars)
//filter items
let filteredCars = cars.filter(function(car){
    return car.includes("Mercedes") //toLowerCase(): không phân biệt hoa thường
})
console.log(`filteredCars = ${filteredCars}`)
console.log(`we found ${filteredCars.length} cars`)

//array of number
let someNumbers=[3, 5, 6, 4 ,7 ,4]
//thay giá trị
someNumbers[0] = 4
let squaredNumbers = someNumbers.map(eachNumber => {
    return eachNumber * eachNumber
})
console.log(`someNumber = ${someNumbers}`)
console.log(`squaredNumbers = ${squaredNumbers}`)

//delete an item = filter
console.log('Delete an item')
someNumbers = someNumbers.filter(eachNumber => eachNumber >= 5)
console.log(`someNumber = ${someNumbers}`)

//functions in JS
function say(name) {
    console.log(`Hello ${name}`)
}
say(`Hau`)

function sum(x, y){
    return x + y
}
const multiply = function(a, b){
    return a * b
} 
console.log(`sum 6 and 4 is ${sum(6,4,)}`)
console.log(`multiply 5*7= ${multiply(5,7,)}`)
//one line with function:
const divide = (a,b) => (a / b).toFixed(4) //toFixed: lấy số sau giấu chấm
console.log(`divide 7 / 3 = ${divide(7,3)}`)
//function with default arguments
function Xe(name = 'oto'){
    console.log(`Xe ${name}`)
}
Xe('ford')
Xe()

//function as an argument
let seconds = 0
/*
setInterval(function () {
    seconds = seconds + 1
    console.log(seconds)
}, 1000) 
*/

//define an object
let point = {}
point.c=1
point.d=2
console.log(`c = ${point.c}, d = ${point.d}`)

//destructuring an object
let {c, d} = point //lấy ra những thuộc tính cần trong 1 đối tượng
console.log(`c = ${c}, d = ${d}`)

point.c=100
console.log(point.c)
console.log(point)
//typeof: data type check
console.log(typeof point)
console.log(typeof point.d)

const DreamCar = {
    maker: 'Lamborghini',
    model: 'Aventador',
    year: 2023
}
console.log(DreamCar.color === undefined)
console.log(DreamCar)
for(let item in DreamCar){
    console.log(item)
}
//debugger
for(let key of Object.values(DreamCar)){
    console.log(`key= ${key}`)
}


//clone an object
const DreamCar2 = {...DreamCar}
DreamCar.year=2022
console.log(DreamCar)
console.log(DreamCar2)

//create object using constructor function
function car(maker, model, year, color) {
    this.maker = maker
    this.model = model
    this.year = year
    this.color = color
}
let car1 = new car('Toyota', 'Innova', 2020, 'black')
let car2 = new car('McLaren', 'McLaren 720s Spider', 2021, 'red')
let car3 = new car('Tesla', 'Tesla Model Y', 2019, 'blue')
 car1.run=function(speed) {
    console.log(`speed: ${speed} km/h`)
 }
 car1.run(234)
 //add other methods
 car1.describe = function(){
    console.log(`maker: ${this.maker} \
                 model: ${this.model} \
                 year: ${this.year} \
                 color: ${this.color} `)
 }
 car1.describe()
 car2.describe = car1.describe
 car2.describe()
 car3.describe = car1.describe
 car3.describe()  

 //delete a propety
 console.log(car1)
 //debugger
 delete car1.color
 console.log('delete color')
 console.log(car1)

 //define a class
 class Person {
    constructor(name, email, age) {
        this.name = name ?? ''
        this.email = email ?? ''
        this.age = age ?? '18'
    }
 }
 class Employee extends Person {
    //default constructor
    /*constructor() {
        this.name = ''
        this.departmentName = 'No department'
         
    } */
    //constructor with arguments
    constructor(name, email, age, department) {
        super(name, email, age)   
        this.departmentName = department ?? 'No department'  //??: giá trị mặc định
    }
 }

let employeeA = new Employee()
console.log(employeeA)
let employeeB = new Employee('Hau', 'IT')
console.log(employeeB)
let employeeC = new Employee('Hau', 'vovanhau2002.qng@gmail.com', 21, 'IT')
console.log(`employee C: ${JSON.stringify(employeeC)}`)
let personC = new Person('A', 'A@gamil.com', 18)
console.log(`personC : ${JSON.stringify(personC)}`)

//Promise
//asynchronous operation
const urlGetEntries = 'https://api.publicapis.org/entries'
const urlGetCategories = 'https://api.publicapis.org/categories'
debugger
console.log("Begin sending")
fetch(url).then(response =>{
    console.log("received response")
    debugger
    response.json().then(data => {
        console.log("changed response to json object")
        debugger
    })
}).catch(error => {
    debugger
    console.log("error : " +error)
})
debugger
console.log("do other tasks")


 
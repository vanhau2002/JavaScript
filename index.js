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
cars.forEach((car, index, array) => {
    console.log(`${index+1}.${car}`)
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
let someNumber=[3, 5, 6, 4 ,7 ,4]

let squaredNumbers = someNumber.map(eachNumber => {
    return eachNumber * eachNumber
})
console.log(someNumber)
console.log(`someNumbers = ${someNumber}`)

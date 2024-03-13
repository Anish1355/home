// It's a collection of data which is stored in comma separated format 
// Every data is paired in index => Value 
// Indexes are auto defined and begins from 0 
// Index never missed in array
// Array and objects {}
// hr system 
// employee => name, email, address, phone, 
// const name_1 ="Sandesh"
// const email_1 = "sandesh@broadwayinfosys.com"
// const address_1 = "Kathmandu"
// const phone_1 = "+977 980987654321"

// Array            // 0            1                           2           3
// Single Dimensional Array
const employee_1 = ["Sandesh", "sandesh@broadwayinfosy.com", "Kathmandu", "+977 98012345678"]
const employee_2 = []

// Create an array for storing a product information 
// productName, price, discount, afterDiscount, 
// ['', 1000, 10, 900]
// print the values 
console.log(employee_1[0])
console.log(employee_1[1])
console.log(employee_1[2])
console.log(employee_1[3])

// Multi Dimensional Array
const allEmployees = [
    ["Employee 1", "one@emplyee.com", "kathmandu", 9876543210],
    ["Employee 2", "two@emplyee.com", "Lalitpur", 9876543219],
    ["Employee 3", "three@emplyee.com", "Lalitpur", 9876543219],
]

console.log(allEmployees)       // [[],[],[]]

console.log(allEmployees[0])    // []
console.log(allEmployees[0][0]) // Employee 1
console.log(allEmployees[0][1])
console.log(allEmployees[0][2])


console.log(allEmployees[1][0]) // Employee 2


// const user_1 = ["Employee 1", "one@emplyee.com", "kathmandu", 9876543210]
// const user_2 = ["one@emplyee.com", "Employee 1", 9876543210, "kathmandu"]

// console.log(user_1[0])
// console.log(user_2[0])  
const user_1 = {
    name: "Employee 1",
    email: "one@employee.com",
    address: "Kathmandu",
    phone: 9876543210 
}

const user_2 = {
    email: "one@employee.com",
    name:"Employee 1",
    phone: 9876543210,
    address: "Kathmandu" 
}
console.log(user_1['name'])
console.log(user_2.name)

const allUser = [
    {name: "User 1", email: "one@user.com", address: "Kathmandu", phone: 123123123123},
    {name: "User 2", email: "two@user.com", address: "Lalitpur", phone: 123123123123},
]

console.log(allUser[0].name)
console.log(allUser[0]['name'])

console.log("") // new line break
console.log("") // new line break

const products = [];

// 
const products_1 = {
    name: "iPhone 12",
    category: "Smart Phones",
    brand: "Apple", 
    price: 120000
}
// [{}, {}, {}]
// end, start 
products.push(products_1)       // 0
const products_2 = {
    name: "iPhone 13",
    category: "Smart Phones",
    brand: "Apple", 
    price: 130000
}
products.push(products_2)   // 1
const products_3={
    name: "iPhone 15",
    category: "Smart Phones",
    brand: "Apple", 
    price: 178000
}

// array 0, 1
products.unshift(products_3)    // 0. existing 0 => 1 , 1 => 2

// [0,1,2]
// no of elements 
let size = products.length;       //no of elems of an array
 // 3 

 // lastIndex = size - 1
 // 3 => 0, 1, 2 
 // new Index => size 
products[size] = products_1;
// size = > 4
size = products.length
// 4=> 0,1,2,3.....10
products[10] = products_3
console.log(products)
// products.splice(1, 1, products_3)


// default last insert 
// top read 
// [] => 0,1,2,3,4
const last  = products.pop()        // last index, and removes from products 
// 0,1,2,3 ===> last = 4
const first = products.shift()      // 0 index and removes from products
// 0,1,2,3,4,5 ====> first => prev 0

const index1 = products.splice(3,2)
// 0,1,2,3 => 3,4 =>  index1


// 01234
// pop => 4, 3, 2, 1, 0
// shift => 0 0 0 0 0

// 0,1,2,3,4
// delete products[1]; 

// 0,<empty>, 2,3,4
// products.splice(1,1)
// 0,1,2,3

// [0,1,2,3,4]
const elem = products.slice(1,3);
// splice => [[1,2]], elem, => products => [0,1,2]
//slice=> [[1,2]] => products => [0,1,2,3,4]
const allowed = ['jpg','jpeg','png','svg','webp']
let ext = "jpeg"

allowed.includes(ext)       // boolean
// .map()
// .filter()
// .forEach()
// .reduce()

// Operators and Contol
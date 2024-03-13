/**
 * a. Mathematical Operators/Arithematic Operators
 *      +, -, *, /, %
 * b. Increment or decrement Operators
 *      ++, --
 * c. Assignment Operators 
 *      =, +=, -=, /=, *=, %=
 * d. String(Concatination)
 *      +, console.log(",")
 * e. Comparision (return: boolean)
 * To get conflict
 *      <, >, <=, >=, ==, !=, ===, !==
 *  For testing 
 * new Lines
 * f. Logical Operator (return: boolean)
 *      &&, ||, !
 * g. Conditional Or Ternary Operators
 *      (exp) ? ifblock : elseBlock
 *      ?? 
 *      ||
 * h. Spread or Rest (object, array)
 *      ...
 * i. Object Destructure 
 *      varDec {, ...rest} = obj
 *      
 *      ?.
 * j. Template Literals(interpolation)  
 *      ``
 */

// const age = user.age ? user.age : null;
// const age = user.age || null;

let a = 10;
let b = 3;

let c = a / b;  // 3.333333333
let d = a % b   // 1
// c.toPrecision(4)
// c.toFixed(2)
// c.toPrecision(3)

let x = 10;
++x                 // x = x + 1
console.log(x)          // 11
x++                 // x = x + 1
console.log(x)          // 12

// later assignment => postAssign
// x = 12, print => assign 
console.log(x++)            // x = x + 1 // 12
// x = 13
// pre assign
// x = 13, assign, print 
console.log(++x)        // 14


let p = 10;
p += 1  
p = p+1
p++
++p


let name = "Sandesh "
let last = "Bhattarai"

name += last    
console.log(name)       // Sandesh Bhattarai

console.log("Name: ",name); // Name: Sandesh Bhattarai

let template = "Dear "+name+", You have "+p+" notifications";


let num1 = 10;
let num2 = '10'

const num3 = num1 + num2
console.log(num3)       // 1010, 20

let comp = (num1 <= num2);

comp = (num1 == num2)   // just compare value, true

comp = (num1 === num2)  // compares value with data type , false

console.log(comp)

((x === y) && (a <= b))
// false && true
// false || true

// true && true && true .... && true => true 
// true && false && ..... => false

// true || false || false .... || false => true
// false || false || false ... => false

// !true  => false 
// !false => true 

let y = true; 

(!y)    // !true => false 

!([].includes(""))

let age = 17;

const isAdult = (age >= 18) ? true : false;


const user = {
    name: "User name",
    email: "user@email.com",
    address: "Kathmandu"
}

const user1 = user;
user1.name = "Updated name"
console.log(user1.name)     // Updated name
console.log(user.name)      // Updated name

// spread
const user2 = {...user}
user2.name = "Updated New Name"
console.log(user2.name)     // Updated New Name
console.log(user.name)      // Updated name

// cart operation 
const cart = [
    {productId: "123", qty: 1},
    {productId: "321", qty: 2}
]
// logic 
// cart 
const newItem = {productId: 432, qty: 3}
// cart.push(newItem)
cart = [
    newItem,
    ...cart
]
console.log(cart)   // [{},{},{}]

const employeeOne = {
    name: "Sandesh",
    email: "",
    role: "", 
    organization: ""
}
// Object Destructure, rest Operator
let {email: username, role, ...remain}= employeeOne;
// const username = employeeOne.email;
console.log(username)
// let email = employeeOne.email;
// let role = employeeOne.role;
// let remain = {
//     name: employeeOne.name,
//     organization: employeeOne.organization
// }

// const organization = employeeOne.organization ? employeeOne.organization : "Broadway"
// const organization = employeeOne.organization ?? "Broadway"
const organization = employeeOne.organization || "Broadway"

// <input value="employeeOne?.organization" />

// employeeOne?.key // run , error 
// employeeOne?.organization   // "" or undefined
// @$var

// obj?.key?.key?.key
// line exe

let emailText = `this is a ${name} single statement.
this is a single statement.
this is a single statement. 
this is a single statement.
this is a single statement.
this is a single statement.
this is a single statement.
this is a single statement.
this is a single statement.
this is a single statement.
this is a single statement.
this is a single statement.
this is a single statement.
this is a single statement.
this is a single statement.
`

// function({key:"", value:""})

// function declarion(obj) {
    // key 
    // obj.key
// }
// name, email
// ({name, email}) {
//     name, 
//     email
// }
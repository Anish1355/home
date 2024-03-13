console.log("Hello World")
// Single line comment 
/**
 * ECMA Scripts => ES 
 *  Variable And Constants  
 * let, var, const
 * Data types 
*/
// loosely coupled programming
var fullName;
let name;
// local, global, block 

let a = 10;     //              // a ===> 1234 ==> 10
console.log(a)      //  10      // 1234 ===> 10
{
    // block
    let a = 20;             // a => 2345 ===> 20
    console.log(a)      // 20   2345  ====> 20
}               // let => reset ===> destroy
console.log(a)      // 10       // 1234 => 10

var b = 10;     //              // b ==> 1234 => 10
console.log(b)      //  10      1234 ==> 10
{
    // block
    var b = 20;                 // 1234 => 20
    console.log(b)      // 20
}       // let reset, var does reset 
console.log(b)      // 20


let firstName = "";
// let firstName = ""  // redeclare 

var lastName = "";
var lastName = "";  // allowed

var email = "";

// always starts from alphabet but can contain alpha numeric values 
// if you have to use multiwords, use camelCase 
// or you can use _ as a separator
// you can never use any keywords as variable name 
// let var = "";

let first_name = "";

// constants 
// primitive, derived
// string, number, boolean
const GRAVITY = 9.8
let gravity;
// const GRAVITY;
// dbconfig 
const MONGO_URL = "";
// const transaction = {};
//const allUsers = []

console.log(GRAVITY);
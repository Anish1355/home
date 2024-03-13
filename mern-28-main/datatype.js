/**
 * a. Number
 *      integer, float 
 * b. String
 * c. Boolean 
 * d. Symbol
 * e. undefined 
 * f. Array 
 * g. Null 
 * h. Object 
 * i. Set 
 * j. function
 */
let a = 10;
let b = 1.2;
let c = 1e3     // 1*10^3
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

let d = "123";
let e = 'asdf';
let f = `asdfasdf`;
let g = `this is first line 
This is second Line`
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)

let h = true 
let i = false 
console.log(typeof h)   // 
console.log(typeof i )  //

let j = null    // "", '', ``,
console.log(typeof j)

let k;  
console.log(typeof k)

let l = [];
let m = new Array();    
console.log(typeof l)  //
console.log(typeof m)  //

let n = {}; 
console.log(typeof n)

let sym = Symbol("key")
// obj unique key
let obj = {
    [sym]: ""
}
console.log(typeof sym)

let mySet = new Set([])

let func = function(){}
let func1 = () => {}
console.log(typeof func)
console.log(typeof func1)


// console.log()
// process.env
let str = "sandesh";
// let str1 = new String()
// 
// str.toUpperCase()

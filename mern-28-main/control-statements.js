/**
 * Conditionals 
 * Decision Making Statemetn 
 * 
 * if-else
 * else-if
 * switch-case
 * 
 * loop 
 *  ....
 *  do-while
 *  while
 *  for 
 *  for-of
 *  for-in 
 * 
 * 
 *  .map()
 *  .forEach()
 *  .reduce()
 *  .filter
 */

//....
const action  = 'add'   // add, edit, view, delete
//                      // CRUD
    // action ===> add ===> Create 

    // if-else , nesting 
if(action === 'add') {
    // body   
    // create operation
} else {
    // any codes
    // 100
    if(action === 'edit') {
        //    edit 

    } else {
        // not add or edit
        // 100
        if(action === 'view') {
            // view
        } else {
            // delete 
        }
    }
}

if(action === 'add') {
    // true
} else if(action === 'edit') {
    // true
} else if(action === 'view') {
    // true
} else if(action === 'delete') {

}

// Create some variables marksObt and total.
// Assign some numeric value to marksObt and set total as 500.
// Calculate percentage (formula: marksObt/total * 100) and assign to another variable. 
// Based on the percentage print the following: 
// percentage >= 80 ====> First Division with Distinction
// percentage < 80 && >= 60 ===> First Division
// percentage >= 45, < 60 => Second Division
// percentage >= 35 , < 45 => Third Division 
// percentage < 35 ==> Sorry! You are failed

const total = 500
let student ={
    name: "Student One",
    email: "one@student.com",
    marksObt: 400    
}
student.percentage = student.marksObt / total * 100;

// Object.assign(student, {percentage: percentage} )

console.log(student)
console.log("Your Percentage: ", student.percentage)
if(student.percentage >= 80) {
    console.log("First division with Distinction")
} else if(student.percentage >= 60) {
    console.log("First division")
} else if(student.percentage >=45 ) {
    console.log("Second division")
} else if(student.percentage >= 35) {
    console.log("Third division")
} else {
    console.log("Sorry! You are failed.")
}

// Calculate Electricity bill consumed
// Suppose a household consumes a total of 250 units of electricity 
// Based on the rate given below, calculate the total amount to be paid: 
// if a total of 20 units or less => the lumpsum amount of: Npr. 80 
// for the next 10 units above 20 units => the rate is: Npr. 4.5/uits
// for the next 20 units => the rate is: Npr. 5/units
// for the next 20 units => the rate is: Npr. 7/units
// for the next 50 units => the rate is: Npr. 10/units
// for the next 100 units => the rate is: Npr. 15/units
// above all    ===> the rate is: Npr. 20/units

// Output should be like: 
// Your Name: ............
// Your total Consumption Unit: ....... units
// Your total Bill Amount: Npr. ........

const day = "Monday";
// day >> Firday ====> Weekend
// day >> Sunday, Saturday ===> Holiday
// other ===> weekday

if(day === "Friday") {
    console.log("Weekend")
} else if(day === 'Sunday' || day === 'Saturday') {
    console.log("Holiday")
} else {
    console.log("Weekday")
}

switch(day) {
    case "Sunday":
    case "Saturday":
        console.log("Holiday");
        break;
    case "Friday":
        console.log("Weekend");
        break;
    default: 
        console.log("Weekday");
        // break;
}

switch(true) {
    case (student.percentage <= 80): 
        console.log("First Division with Distiction")
        break;
    case false:
        /// 
        break;
}
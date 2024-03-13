const students = [
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "score": 350,
      "address": "Kathmandu, Nepal"
    },
    {
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "score": 450,
      "address": "Pokhara, Nepal"
    },
    {
      "name": "David Johnson",
      "email": "davidjohnson@example.com",
      "score": 400,
      "address": "Biratnagar, Nepal"
    },
    {
      "name": "Sarah Wilson",
      "email": "sarahwilson@example.com",
      "score": 300,
      "address": "Lalitpur, Nepal"
    },
    {
      "name": "Michael Brown",
      "email": "michaelbrown@example.com",
      "score": 250,
      "address": "Bharatpur, Nepal"
    },
    {
      "name": "Jennifer Davis",
      "email": "jenniferdavis@example.com",
      "score": 500,
      "address": "Birgunj, Nepal"
    },
    {
      "name": "Christopher Martinez",
      "email": "christophermartinez@example.com",
      "score": 350,
      "address": "Dharan, Nepal"
    },
    {
      "name": "Amanda Taylor",
      "email": "amandataylor@example.com",
      "score": 450,
      "address": "Butwal, Nepal"
    },
    {
      "name": "Daniel Anderson",
      "email": "danielanderson@example.com",
      "score": 400,
      "address": "Hetauda, Nepal"
    },
    {
      "name": "Emily Thomas",
      "email": "emilythomas@example.com",
      "score": 300,
      "address": "Nepalgunj, Nepal"
    }
]

// for in 
// index => data 
// [0,1,2,3, <empty>..... , 10]
// [null, <empty>]
for(let index in students) {
    students[index].name
}

// [value, value, value]
for(let student of students) {
    if(student) {
        student.percentage = student.score/5;
        if(student.percentage >= 80) {
            student.division = "First division with Distinction"
        } else if(student.percentage >= 60) {
            student.division = "First division"
        } else if(student.percentage >=45 ) {
            student.division = "Second division"
        } else if(student.percentage >= 35) {
            student.division = "Third division"
        } else {
            student.division = "Sorry! You are failed."
        }
    }
}

for(let i = 0; i  < students.length; i++) {
    console.log(students[i].name)   //
}

var testVar = "";
console.log(testVar)        // null, undefined, 
// var testVar = "";


/**
 * 
 */

// [
//     {
//         name: "",
//         children: [
//             {
//                 name: "",
//                 children: null
//             }
//         ]
//     }
// ]

const category = [
    {
        name: "Category 1",
        children: [
            {
                name: "Catgeory 1.1",
                children: [
                    {
                        name: "Category 1.1.1",
                        children: null
                    },
                    {
                        name: "Category 1.1.2",
                        children: [
                            {
                                name: "Category 1.1.2.1",
                                children: null
                            }
                        ]
                    }
                ]
            },
            {
                name: "Catgeory 1.2",
                children: [
                    {
                        name: "Category 1.2.1",
                        children: null
                    },
                    {
                        name: "Category 1.2.2",
                        children: [
                            {
                                name: "Category 1.2.2.1",
                                children: null
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Category 2",
        children: [
            {
                name: "Catgeory 2.1",
                children: [
                    {
                        name: "Category 2.1.1",
                        children: null
                    },
                    {
                        name: "Category 2.1.2",
                        children: [
                            {
                                name: "Category 2.1.2.1",
                                children: null
                            }
                        ]
                    }
                ]
            },
            {
                name: "Catgeory 2.2",
                children: [
                    {
                        name: "Category 2.2.1",
                        children: null
                    },
                    {
                        name: "Category 2.2.2",
                        children: [
                            {
                                name: "Category 2.2.2.1",
                                children: null
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
/**
 * Category 1
 *      Category 1.1
 *          Category 1.1.1
 *      Category 1.2
 *          Category 1.2.1
 *              Category 1.2.1.1
 * Category 2
 *      Category 2.1
 *          Category 2.1.1
 *      Category 2.2
 *          Category 2.2.1
 *              Category 2.2.1.1
 */
// tree ===> branch ===> branch ----> leaf node 
for(let row of category) {
    console.log(row.name)   // Category 1
    if(Array.isArray(row.children)) {
        for(let child1  of row.children) { //    Category 1.1
            console.log("    ", child1.name)        //     Category 1.1
            // child1.children
        }
    }
}
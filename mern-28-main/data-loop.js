// ecommerce 
const products = [
    {
        productName: "Product Name",
        price: 1000,
        discount: 10
    },
    {
        productName: "Product Two",
        price: 1500,
        discount: 7
    },
    {
        productName: "Product Three",
        price: 2500,
        discount: 5
    },
    {
        productName: "Product Four",
        price: 3500,
        discount: 5.7
    }
]

// after discount price for each product 
// assign back the price to a new key for each product
// const afterDiscount0 = products[0].price - products[0].price * products[0].discount/100;
// products[0].afterDiscount = afterDiscount0

const size = products.length;   
// lastIndex = size-1 , 3
// 0,1,2,3
console.log(products)
for(let i = 0; i < size; i++){
    products[i].afterDiscount = products[i].price - products[i].price * products[i].discount/100;
}
console.log(products)

// percetange 

// Create an array of objects of Student(atleast 10) with name and marks obt 
// Let total be 500
// calculate the percentage and Division based on percentage and assign back to students
// and check the values
// percentage >= 80 ====> First Division with Distinction
// percentage < 80 && >= 60 ===> First Division
// percentage >= 45, < 60 => Second Division
// percentage >= 35 , < 45 => Third Division 
// percentage < 35 ==> Sorry! You are failed

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
console.log("")
console.log("")
console.log(students);

for(i = 0; i < students.length; i++) {
    students[i].percentage = students[i].score/5;

    if(students[i].percentage >= 80) {
        students[i].division = "First division with Distinction"
    } else if(students[i].percentage >= 60) {
        students[i].division = "First division"
    } else if(students[i].percentage >=45 ) {
        students[i].division = "Second division"
    } else if(students[i].percentage >= 35) {
        students[i].division = "Third division"
    } else {
        students[i].division = "Sorry! You are failed."
    }
}
console.log("")
console.log("")
console.log(students);
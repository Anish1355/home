let i = 11;

// do-while 
// while 
// for 

do {

    console.log(i)      // 11
    i++                 // 12
    
} while(i <= 10)    // 12 <= 10
// 

i = 11;
while(i <= 10) {
    console.log(i)
    i++
}

i = 1;
while(true) {
    console.log(i);
    if(i <= 100) {
        i++;
    } else {
        break;
    }
}

for(i = 1; i <= 10; i++){
    console.log(i);
}

i = 1
for(; i <= 10; i++){
    console.log(i);
}

i = 1
for(; i <= 10;){
    console.log(i);
    i++
}

i = 1
for(;;){
    if(i > 10) {
        break;
    }
    console.log(i);
    i++
}


// Print first 20 even numbers 
// using any (dowhile, while, for)

for(i = 1; i <= 40; i++) {
    if(i % 2 === 0){
        console.log(i)
    }
}


for(i = 2; i <= 40; i+=2) {
    console.log(i)
}

for(i = 1; i <= 20; i++) {
    console.log(i*2)
}

i = 2;
let count = 1;
while(true) {
    if(count > 20) {
        break;
    }
    console.log(i);
    i += 2;
    count++
}

for(i = 2, count = 1; count > 20; i+=2, count++) {
    console.log(i);
}
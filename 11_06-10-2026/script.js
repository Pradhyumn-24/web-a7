console.log("Hello Javascript");
console.log(100);
console.log(10 + 20);

const pi = 3.14
console.log(pi)

let a = 20;
let b = 10;

let i = 5;
console.log(i++);
console.log(i--);

age = 20;
console.log(age>18);
console.log(age<18);
console.log(age == '20'); 
// returns true coz == converts '20' to 20
console.log(age === '20');
// returns false coz it doesnt convert and therefore '20' != 20

let fname = "Rahul";
let lname = "Sharma";


console.log("First name is " + fname + " & lname is " + lname + " and age is " + age);
// OR
console.log(`${fname} is the first name while ${lname} is the last name. His age is ${age}.`);


let marks = 75;

if (marks >= 80) {
    console.log("A");
}

else if (marks < 80 && marks >= 40) {
    console.log("B");
}

else {
    console.log("Fail");
}

for (let j = 1; j <= 5; j++) {
    console.log(j);
}


function add(a,b) {
    console.log(a+b);
}

add(a,b);

console.log(typeof(null));
console.log('Hello World');

// N1
for (let i = 5; i <= 100; i = i + 1) {
    console.log(i);
}


// N4
let array3 = [1, 2, 3, 4, 5];

let sum = 0

for (let mimateba = 0; mimateba < array3.length; mimateba++) {
    sum = sum + array3[mimateba]
}
console.log(sum);


// N5
let array4 = [1, 2, 3, 7, 6, 9];

let sum2 = 0;

for (let average = 0; average < array4.length; average++) {
    sum2 = sum2 + array4[average]
}

console.log(sum2 / array4.length);


// N7
let user1 = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};

console.log(user1.studentstatus);


// N8
let userII = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}

if (userII.age < 18 && userII.studentstatus == "active") {
    console.log("hello");
}
else {
    console.log("error");
}

if (userII.name == "levani") {
    console.log("hello levani");
}
else {
    console.log("error");
}

if (userII.studentstatus == "active" || userII.age < 25) {
    console.log("hello world");
}
else {
    console.log("error");
}



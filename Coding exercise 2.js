/* Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2; // ** means square in this case or multiply in general
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`BMI of Mark (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`BMI of John (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

//Conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

//Coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; //'11 plus operator converts into string
n = n - 1; // minus operator converts into number
console.log(n);

const money = 100;
if (money) {
    console.log("Don't spend it all!)");
} else {
    console.log('You should get a job!');
}

let name;
if (name) {
    console.log("Don't spend it!)");
} else {
    console.log('You should get a job!');
}


const age = 18;
if (age === 18) { //if the age is exactly 18
    console.log('You just became an adult');
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if (favourite == 23) { // == means loose equality operator. This converts the string into number
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 73) { // === this wouldn't work because it has to match exactly when that equal is used. In this casem 23 is a string, so it won't work.
    console.log('It is cool as well')
} else {
    console.log('Number is neither 23 nor 73 :(')
}
//Coding Exercise
/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2; // ** means square in this case or multiply in general
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
*/
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 2012;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; //"``" This symbol id call Backticks. This is used if the string contains some special characters. That button is above the tab button in keyboard
console.log(jonasNew);

console.log(`Just a ragular string...`);

console.log('String with \n\
multiple \n\
lines'); // \n means new line

console.log(`String
multiple
lines`);

//If/Else statements
/*const age = 17;

if (age >= 18) {
    console.log('Sarah can apply for driving license 👍👌');  //If the age is 18 or above, the result will be true
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah will have to wait for another ${yearsLeft} years to apply for driving license ✋✋`)
}

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
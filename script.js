var fullname="Yashwant Halwai";
var hobby="coding";
console.log("My name is "+fullname+" and my hobby is "+hobby);


var a=45;
var b=2;
var c=10;
var sum=a*b-c;
console.log("The sum is: " + sum);


// 4.
var firstname="Yashwant";
var lastname="Halwai";
var fullname=firstname+" "+lastname;
console.log("My full name is: " + fullname);

// 5.
var num1=10;
console.log("The value of num1 is: " + num1);
var num1=30;
console.log("The value of num1 is: " + num1);


// 6.

console.error("This is an error message.");

// 7.
var num1=10;
var square=num1*num1;
console.log("The square of " + num1 + " is: " + square);


// 8.
let isRaining=true;
console.log("Is it raining? " + isRaining);


// 9.
let age=21;

if(age>=18)
{
    console.log("You are an adult.");
}
else
{
    console.log("You are a minor.");
}


// 10.
let num=100;
let num2=0;
let divv=num/num2;
console.log("The result of division is: " + divv);


//  now variable and datatype 11

let namee="Yashwant";
console.log("The name is: " + namee);

// 12.
const pi=3.14;
console.log("The value of pi is: " + pi);

// 13
var agee=25;
console.log("The age is: " + agee);

 agee=21;
console.log("The age is: " + agee);


// 14.
let aage=null;
console.log("The age is: " + aage);
console.log("The type of aage is: " + typeof aage);


// 15.
let numb=25;
console.log(typeof numb);

// 16.
let isStudent=false;
console.log(typeof isStudent);

// 17.
let naame="Yashwant";
let ageee=21;
let isEmployed=true;
console.log(naame+" "+ageee+" "+isEmployed);


// 18.;
let y;
console.log(typeof y);


// 19.
let numm=undefined;
console.log(typeof numm);

// 20.
let fruits=["apple","banana","orange"];
console.log( fruits);

fruits=["grape","kiwi","melon"];
console.log(fruits);

fruits.push("pear");
console.log(fruits);


// 21. loops

for(i=1;i<=50;i++)
{
    console.log(i);
}

// 22.  while loop
let suum=0;
 i=1;
while(i<=10)
{
    suum+=i;
    i++;
}
console.log("The sum is: " + suum);

// 23. for...of loop

let str = "JavaScript";

for (let char of str) {
  console.log(char);
}

// 24. for...in loop

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue; // skip even numbers
  }
  console.log(i);
}


// 25.
 i = 5;

do {
  console.log(i);
  i--;
} while (i >= 1);

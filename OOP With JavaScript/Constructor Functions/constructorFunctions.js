"use strict";

// Constructor Function - Blueprint
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never Do - this is the bad practice - because
  // for each instance we are creating copy of this function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

// Creation of objects from constructor function
const jonas = new Person("Jonas", 1991); //Instance of Person
const matilda = new Person("Matilda", 2017); //Instance of Person
const jack = new Person("Jack", 1975); //Instance of Person

console.log(jonas);
console.log(matilda);
console.log(jack);

console.log(jonas instanceof Person);
console.log(matilda instanceof Person);
console.log(jack instanceof Person);

//  1. New {} is created
//  2. function is called, this = {}
//  3. {} linked to prototype
//  4. function automatically return {}

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));

// prototype - წარმოადგენს არა Person - ის პროტოტიპს
// არამედ მასთან დაკავშირებული ობიექტების.
console.log(Person.prototype.isPrototypeOf(Person));

// შეგვიძლია პროტოტიპიდანაც მივწვდეთ კონსტრუქტორ ფუნქციას
console.log(Person.prototype.constructor);

// ქვემოთ მოცემული შემთხვევა ნათლად ასახავს Property Chain - ს. მოცემულ შემთხვევაში, მეთოდი hasOwnProperty არ არის განსაზღვრული არც კონსტრუქტორ
// ფუნქციაში და არც მის პროტოტიპში, Person.prototype - ში, თუმცა იმის გამო რომ Person.prototype - ს ჰყავს თავისი პროტოტიპი Object.prototype
// Javascript შეხედავს მას და იქ წინასწარ არის ჩაშენებული აღნიშნული მეთოდი.
console.log("Own Property", jonas.hasOwnProperty("firstName"));

// HTML Elements are objects

const h1 = document.querySelector("h1");

console.dir(h1);

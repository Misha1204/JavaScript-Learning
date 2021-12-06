// Class expression
// const Person = class {};

// Class declaration
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(name) {
    console.log(name);
    if(name.includes(" ")) this._fullName = name;
    else console.log("Shecvale Saxeli!");
  }
}

const jessica = new Person("Jessica Davis", 1996);
console.log(jessica);

jessica.calcAge();

console.log(jessica.__proto__ === Person.prototype);

Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

// 1. Classes are NOT hoisted - Function declarations are hoisted, what means that they can be used before they are declared but with the classes
// that does not work
// 2. Class are first-class citizens - we can pass them into functions and also return them from the functions
// 3. Classes are executed in strict mode

// Getters and Setters
const account = {
  owner: "Mikheil",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov)
  }
}

console.log(account.latest)
account.latest = 4654;
console.log(account.latest)



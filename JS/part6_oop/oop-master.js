//Object
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car started in ${this.year}`;
  },
};

console.log(car.start());

//Function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

//creating objects using function
let john = new Person("John", 20);
console.log(john.name);

function Animal(type) {
  this.type = type;
}

//Common methods
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

// Extend built-in prototypes
Array.prototype.arun = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.arun());
let myNewArray = [1, 2, 3, 4, 5, 6];
console.log(myNewArray.arun());

//Classes
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

//Inheritance
class Car extends Vehicle {
  drive() {
    return `${this.make}: This is an inheritance example`;
  }
}

let myCar = new Car("Ferrari", "LaFerrari");
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new Vehicle("Tata", "Nexon");
console.log(vehOne.make);

//Encapsulation
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.#balance) //error
console.log(account.getBalance());
account.deposit(100);
console.log(account.getBalance());

// Abstraction

class CoffeeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }
  pressButton() {
    let m1 = this.start();
    let m2 = this.brewCoffee();
    return `${m1} + ${m2}`;
  }
}

let myMachine = new CoffeeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressButton());

// Polymorphism

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// Static method
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3)) //can't use it
console.log(Calculator.add(2, 4));

// Getters and Setters

class Employee {
  #salary;
  constructor(name, salary) {
    if(salary < 0){
        throw new Error("Salary can't be negative.")
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to see salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this.#salary = value;
    }
  }
}
let emp = new Employee("Bob", 50000);
console.log(emp.salary);
emp.salary = 2000;
console.log(emp.salary);


// Syntax in object literals
const person = {
  firstName: "Arun",
  lastName: "KR",

  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // setter
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName);   // Arun KR (getter called)
person.fullName = "Hitesh Sharma"; // setter called
console.log(person.firstName);  // Hitesh
console.log(person.lastName);   // Sharma

// Syntax in Classes
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // getter
  get area() {
    return this._width * this._height;
  }

  // setter
  set width(value) {
    if (value <= 0) {
      console.log("Width must be positive!");
      return;
    }
    this._width = value;
  }
}

const rect = new Rectangle(10, 5);

console.log(rect.area); // 50 (getter called)
rect.width = -4;        // "Width must be positive!"
rect.width = 20;        
console.log(rect.area); // 100

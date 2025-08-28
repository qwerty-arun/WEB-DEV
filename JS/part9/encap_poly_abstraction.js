// Encapsulation, Polymorphism, Abstraction, and Getters/Setters
// Task 1: Encapsulation Using Getters and Setters

// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

// Task 2: Polymorphism with Method Overriding

// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

class BankAccount {
  #balance = 0; // private property

  constructor(initialBalance = 0) {
    if (initialBalance >= 0) {
      this.#balance = initialBalance;
    }
  }

  // getter
  get balance() {
    return this.#balance;
  }

  // setter
  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this.#balance = amount;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit must be positive");
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdraw must be positive");
    }
    if (this.#balance - amount < 0) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
  }
}

// Example usage
let account = new BankAccount(100);
account.deposit(50);
console.log(account.balance); // 150
account.withdraw(30);
console.log(account.balance); // 120

class Shape{
    area(){
        return 0;
    }
}
class Circle extends Shape{
   
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        // return 3.14 * this.radius * this.radius;
        return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
    }
}

class Rectangle extends Shape{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height;
    }
}
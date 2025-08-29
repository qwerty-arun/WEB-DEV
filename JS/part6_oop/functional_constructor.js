function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar);

let favCar = new Car("Ford", "Mustang");
console.log(favCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea);
console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

//shared method
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("Cat");
// console.log(cat.sound());

// target keyword allows you to determine if a function or class was called with the `new` keyword
// Inside a constructor, new.target refers to the constructor that was directly invoked by `new`. If a function is called without `new`, `new.target` will be undefined
function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}

let tea = new Drink("tea");
let coffee = Drink("coffee"); //will throw an error

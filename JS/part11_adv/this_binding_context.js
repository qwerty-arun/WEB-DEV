const person = {
  name: "hitesh",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFn = person.greet;
greetFn();

// const boundGreet = person.greet.bind({ name: "John" });
const boundGreet = person.greet.bind({ name: `${person.name}` });
boundGreet();

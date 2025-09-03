// call(): Invokes the function immediately with a given 'this' value and agruments passed individually

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Arun" };

greet.call(person, "Hello", "!");
// Output: Hello, Arun!
/*
Here:
- this inside greet points to person.
- Arguments are passed one by one ("Hello", "!").
*/


// apply(): Invokes the function immediately like call, but arguments are passed as an array 

greet.apply(person, ["Hi", "!!!"]);
// Output: Hi, Arun!!!
/*
Here:
- Works the same as call, but instead of multiple arguments, you pass one array.
*/


// bind(): Does not invoke immediately. Returns a new function with 'this' permanently bound and optional preset arguments

const boundGreet = greet.bind(person, "Hey");
boundGreet("!!");
// Output: Hey, Arun!!
/*
- bind creates a new function (boundGreet).
- this is fixed to person.
- First argument "Hey" is preset, additional arguments ("!!") are passed when calling.
*/
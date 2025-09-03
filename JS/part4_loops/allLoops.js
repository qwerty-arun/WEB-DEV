// break when found
let tea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let index = 0; index < tea.length; index++) {
  if (tea[index] === "chai") {
    console.log("Found");
    break;
  }
  selectedTeas.push(tea[index]);
}
// console.log(selectedTeas)

// skip
let cities = ["London", "New York", "Paris", "Berlin"];
let others = [];
for (let index = 0; index < cities.length; index++) {
  if (cities[index] === "Paris") {
    continue;
  }
  others.push(cities[index]);
}
// console.log(others);

// for-of loop, stop when a number found
let arr = [1, 2, 3, 4, 5];
let before4 = [];
for (const element of arr) {
  if (element == 4) break;
  before4.push(element);
}
// console.log(before4);

// for-of loop, skip when a string is found
let types = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const element of types) {
  if (element === "herbal tea") {
    continue;
  }
  preferredTeas.push(element);
}
// console.log(preferredTeas)

// for-in to loop through an object
const citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityPopulation = {};

for (const key in citiesPopulation) {
  if (key === "Berlin") {
    break;
  }
  cityPopulation[key] = citiesPopulation[key];
}
// console.log(cityPopulation)
// console.log(Object.keys(cityPopulation));
// console.log(Object.values(cityPopulation));

// forEach
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let avTeas = [];
teaCollection.forEach((tea) => {
  //   console.log(tea);
});

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  avTeas.push(tea);
});
// console.log(avTeas);

// forEach2
let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveled = [];
myWorldCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveled.push(city);
});
console.log(traveled);

//for-of2, stop when length of tea name is > 10
let teas = ["Chai", "Green Tea", "Black Tea", "Jasmine Tea", "Herbal Tea"];
let shortTeas = [];
for (const tea of object) {
  if (tea.length > 10) break;
  shortTeas.push(tea);
}
let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let hw = {};

// console.log(`lenovo `, lenovo.__proto__);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla `, tesla);
console.log(`genericCar`, genericCar);
console.log(`tesla tyres`, tesla.tyres);
console.log(`tesla `, Object.getPrototypeOf(tesla));

//these are good checks

// old way
console.log(`tesla hasOwnProperty driver?`, tesla.hasOwnProperty("driver"));
console.log(`tesla hasOwnProperty tyres?`, tesla.hasOwnProperty("tyres"));

// modern way
console.log(`tesla hasOwn driver?`, Object.hasOwn(tesla, "driver"));
console.log(`tesla hasOwn tyres?`, Object.hasOwn(tesla, "tyres"));

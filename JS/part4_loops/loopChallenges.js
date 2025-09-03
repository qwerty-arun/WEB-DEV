/*
1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable name 'sum'.
*/

let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
// console.log(sum);

/*
2. Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'
*/

let j = 5;
let countdown = [];
while (j >= 1) {
  countdown.push(j);
  j--;
}
console.log(countdown);

/*
3. Write a 'do while' loop that prompts a user to enter their favorite tea type until they enter "stop". Store each tea type in an array name "teaCollection".
*/

// let teaCollection = [];
// let tea;
// do {
//   tea = prompt("Enter your favorite tea (type stop to finish)");
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");
// console.log(teaCollection);


/*
4. Write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'.
*/
let total = 0;
num = 1
do {
  total += num 
  num++
} while (num<=3);
console.log(total)

/*
5. Write a 'for' loop that multiplies each element in the array '[2,4,6]' by 2 and results in a new named 'multipliedNumbers'
*/

let arr = [2, 4, 6]
let multipliedNumbers = [] 
for (let index = 0; index < arr.length; index++) {
  multipliedNumbers.push(arr[index] * 2)
}
console.log(multipliedNumbers);

/*
6. Write a 'for' loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in a new array name 'cityList'.
*/

let cities = ["Paris", "Tokyo", "London", "New York"]
let cityList = []
for (let index = 0; index < cities.length; index++) {
cityList.push(cities[index])
}
console.log(cityList)
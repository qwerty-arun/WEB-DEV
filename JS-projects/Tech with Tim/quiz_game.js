// >npm install prompt-sync

const prompt = require("prompt-sync")();

console.log("Welcome to the Computer Hardware Quiz!");

let score = 0;
const no_of_questions = 3;

const answer1 = prompt("What is the brain of the computer? ");
const correct_answer1 = "CPU";

if (answer1.toUpperCase() === correct_answer1) {
  console.log("You got it correct!");
  ++score;
} else {
  console.log("You got it wrong...");
}

const answer2 = prompt("What is better, a 3090ti or a 4060? ");
const correct_answer2 = "3090TI";

if (answer2.toUpperCase() === correct_answer2) {
  console.log("You got it correct!");
  ++score;
} else {
  console.log("You got it wrong...");
}

const answer3 = prompt("What is the recommended amount of RAM in 2023? ");
const correct_answer3 = "16GB";

if (answer3.toUpperCase() === correct_answer3) {
  console.log("You got it correct!");
  ++score;
} else {
  console.log("You got it wrong...");
}
const percent = Math.round((score / no_of_questions) * 100);
console.log("You got",score, "questions correct!");
console.log("You scored", percent, "%")
#! /usr/bin/env node
import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2) User input for guessing number

// 3)  Compare user input with computer generated number and show result

console.log("Wellcom to Faryal Abbasi- CLI Number Guessing Game");


const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
		name: "userGuessedNumber",
		type: "number",
		message: "Please guess a number between 1-10: ",
    },
]);

if(answers.userGuessedNumber === randomNumber){
	console.log("Congratulation! you guessed right number.");
}else {
	console.log("You guessed wrong number");
}


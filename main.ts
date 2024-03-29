#! /usr/bin/env node

import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()* 6 + 1);

const ans = await inquirer.prompt ([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);
if (ans.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guessed a right number")
}
else{
    console.log("Alas! you guessed a wrong number")
}
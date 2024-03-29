#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 15000;
const myPin = 1414;
console.log(chalk.cyan(myPin));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter your pin.",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Welcome to your account!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select any one",
            type: "list",
            choices: ["Withdraw", "Deposit", "Fast Cash", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount.",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        if (myBalance <= amountAns.amount) {
            console.log("Insufficient balance.");
        }
        else
            console.log("your remaining balance is :" + myBalance);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your balance is:" + myBalance);
    }
    else if (operationAns.operation === "Fast Cash") {
        let operationAns2 = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select one.",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"],
            },
        ]);
        myBalance -= operationAns2.fastCash;
        console.log("your remaining balance is :" + myBalance);
    }
    else if (operationAns.operation === "Deposit") {
        let operationAns3 = await inquirer.prompt([
            {
                name: "deposit",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        myBalance += operationAns3.deposit;
        console.log("Your balance is:" + myBalance);
    }
}
else {
    console.log("incorrect pin.");
}

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 20000;
const myPin = 1414;
console.log(chalk.underline.yellow("\n\t\t\tCurrent Balance :" + myBalance));
console.log(chalk.underline.yellow("\n\t\t\tpin is :" + myPin));
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter pin code"
    }
]);
if (pinAns.pin === myPin) {
    console.log(chalk.cyan("Welcome!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select one",
            choices: ["Withdraw", "Deposit", "Fast Cash", "Check Balance", "Quit"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let action1 = await inquirer.prompt([
            {
                name: "withdraw",
                type: "number",
                message: "Enter amount you want to withdraw"
            }
        ]);
        myBalance -= action1.withdraw;
        if (myBalance < action1.withdraw) {
            console.log(chalk.red("Insufficient balance"));
        }
        else
            console.log(chalk.cyan("Your remaining balance is : " + myBalance));
    }
    else if (operationAns.operation === "Deposit") {
        let action2 = await inquirer.prompt([
            {
                name: "deposit",
                type: "number",
                message: "Enter amount you want to deposit"
            }
        ]);
        console.log(chalk.green("Operation sucessfull!"));
        myBalance += action2.deposit;
        console.log(chalk.cyan("Now your balance is :" + myBalance));
    }
    else if (operationAns.operation === "Fast Cash") {
        let action3 = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select One",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        console.log(chalk.green("Transaction sucessfull!"));
        myBalance -= action3.fastCash;
        console.log(chalk.cyan("Your remaining balance is :" + myBalance));
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.cyan("Your balance is :" + myBalance));
    }
    else if (operationAns.operation === "Quit") {
        console.log(chalk.greenBright.bold.italic("Thank you for using our services"));
    }
}
else {
    console.log(chalk.redBright("Incorrect pin code"));
}

#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.rgb(126, 24, 222)("\n\tWelcome to Table Generator!\n"));
console.log(chalk.bold.green("Enter the number you want to generate the table for\n"));
let table = true;
while (table) {
    let input = await inquirer.prompt([
        {
            name: "num",
            type: "number",
            message: chalk.yellow("Enter the number"),
        },
    ]);
    let myNum = input.num;
    if (myNum) {
        console.log(`\n\tHere is the table for ${myNum}\n`);
        console.log(`${"=".repeat(50)}\n`);
        for (let i = 1; i <= 10; i++) {
            console.log(chalk.rgb(191, 255, 0)(`\t\t ${myNum} x ${i} = ${i * myNum} \n`));
        }
        console.log("=".repeat(50));
    }
    else {
        console.log(chalk.red("Please enter a number"));
    }
    //    Asking user to use Table again ?
    let askUser = await inquirer.prompt([
        {
            name: "table",
            type: "confirm",
            message: chalk.yellow("Do you want to generate another table?"),
        },
    ]);
    if (askUser.table === false) {
        table = false;
        console.log(chalk.rgb(191, 255, 0)(`\n\tThank for using the table generator!\n`));
        console.log(chalk.rgb(191, 255, 0)(`\tHave a nice day!\n`));
    }
}

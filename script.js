// SpendWise - JavaScript Foundation
// Week 5 Assignment

// 1. Store application data using variables
let budget = 0;
let expenses = 0;
let remainingBalance = 0;

// 2. Function to calculate the remaining balance
function calculateBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}

// 3. Function to collect user input and process the budget
function enterBudgetInformation() {
    // Collect budget information from the user
    let budgetInput = prompt("Enter your total budget:");

    // Collect expense information from the user
    let expensesInput = prompt("Enter your total expenses:");

    // Convert user input from strings to numbers
    budget = Number(budgetInput);
    expenses = Number(expensesInput);

    // Check that the user entered valid numbers
    if (isNaN(budget) || isNaN(expenses)) {
        console.log("Please enter valid numbers for your budget and expenses.");
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate the remaining balance
    remainingBalance = calculateBalance(budget, expenses);

    // Display results in the browser console
    console.log("===== SpendWise Budget Summary =====");
console.log("Total Budget: KES 50000");
console.log("Total Expenses: KES 15000");
console.log("Remaining Balance: KES 35000");

    // Display results on the webpage
    document.getElementById("budgetDisplay").textContent =
        "Budget: KES " + budget.toLocaleString();

    document.getElementById("expenseDisplay").textContent =
        "Expenses: KES " + expenses.toLocaleString();

    document.getElementById("balanceDisplay").textContent =
        "Remaining Balance: KES " + remainingBalance.toLocaleString();
}

// 4. Connect the button to the function
document.getElementById("startButton").addEventListener("click", enterBudgetInformation);

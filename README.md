# SpendWise - Personal Budget & Expense Tracker

## Week 6 - Make SpendWise Interactive

SpendWise is a Personal Budget & Expense Tracker built using HTML, CSS, and JavaScript.

This week's project adds JavaScript functionality to make the dashboard interactive and dynamic.

## Features

- Add new expenses through a form.
- Store multiple expenses using an array.
- Calculate total spending automatically.
- Calculate the remaining budget.
- Display the number of expenses.
- Display expense records dynamically.
- Provide budget warnings using conditional statements.
- Respond to user actions using event listeners.
- Update the webpage using DOM manipulation.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Improvements Made This Week

The SpendWise project was changed from a mostly static dashboard into an interactive budgeting application.

Users can now enter an expense name, select a category, enter an amount, and submit the form.

JavaScript processes the information and immediately updates the dashboard.

The application calculates:

- Total budget
- Total amount spent
- Remaining budget
- Number of expenses

## How Conditionals Are Used

Conditional statements are used to evaluate the user's spending compared to the budget.

For example:

```javascript
if (totalSpent > budget) {
    budgetMessage.textContent =
        "You have exceeded your budget.";
} else if (totalSpent >= budget * 0.8) {
    budgetMessage.textContent =
        "Warning: You have used 80% or more of your budget.";
} else {
    budgetMessage.textContent =
        "You are within your budget.";
}
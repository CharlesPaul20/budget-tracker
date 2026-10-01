// SpendWise Budget
const budget = 60000;

// Array used to store expense records
let expenses = [
    {
        name: "Lunch",
        category: "Food",
        amount: 8500
    },
    {
        name: "Transport",
        category: "Transport",
        amount: 4200
    },
    {
        name: "House Rent",
        category: "Rent",
        amount: 15000
    }
];


// Select HTML elements
const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseCategory = document.getElementById("expenseCategory");
const expenseAmount = document.getElementById("expenseAmount");

const totalSpentElement = document.getElementById("totalSpent");
const remainingElement = document.getElementById("remainingAmount");
const expenseCountElement = document.getElementById("expenseCount");
const expenseList = document.getElementById("expenseList");
const budgetMessage = document.getElementById("budgetMessage");


// Function to calculate total expenses
function calculateTotal() {

    let total = 0;

    // Loop through the array
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// Function to display expenses
function displayExpenses() {

    // Clear the current list
    expenseList.innerHTML = "";

    // Check if there are no expenses
    if (expenses.length === 0) {

        expenseList.innerHTML =
            '<p class="empty-message">No expenses added yet.</p>';

        return;
    }

    // Loop through every expense
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const expenseItem = document.createElement("div");

        expenseItem.classList.add("expense-item");

        expenseItem.innerHTML = `
            <div class="expense-info">
                <h3>${expense.name}</h3>
                <p>${expense.category}</p>
            </div>

            <div class="expense-amount">
                KSh ${expense.amount.toLocaleString()}
            </div>
        `;

        expenseList.appendChild(expenseItem);
    }
}


// Function to update dashboard
function updateDashboard() {

    const totalSpent = calculateTotal();

    const remaining = budget - totalSpent;

    // Update HTML using DOM manipulation
    totalSpentElement.textContent =
        `KSh ${totalSpent.toLocaleString()}`;

    remainingElement.textContent =
        `KSh ${remaining.toLocaleString()}`;

    expenseCountElement.textContent =
        expenses.length;


    // Conditional statements for budget feedback

    if (totalSpent > budget) {

        budgetMessage.textContent =
            "⚠️ You have exceeded your budget.";

    } else if (totalSpent >= budget * 0.8) {

        budgetMessage.textContent =
            "⚠️ Warning: You have used 80% or more of your budget.";

    } else if (totalSpent > 0) {

        budgetMessage.textContent =
            "✅ You are within your budget. Keep monitoring your spending.";

    } else {

        budgetMessage.textContent =
            "Add your expenses to see your budget status.";
    }
}


// Event listener for the form
expenseForm.addEventListener("submit", function(event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Get values from the form
    const name = expenseName.value.trim();
    const category = expenseCategory.value;
    const amount = Number(expenseAmount.value);


    // Validate the user's input
    if (name === "" || category === "" || amount <= 0) {

        alert("Please enter valid expense information.");

        return;
    }


    // Add new expense to the array
    expenses.push({
        name: name,
        category: category,
        amount: amount
    });


    // Update the webpage
    displayExpenses();
    updateDashboard();


    // Clear the form
    expenseForm.reset();

});


// Display initial data when page loads
displayExpenses();
updateDashboard();
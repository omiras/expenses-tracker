// Happy coding
const fs = require("fs");



const parsedData = fs.readFileSync("expenses.json", "utf-8");
const expenses = JSON.parse(parsedData);

const command = process.argv[2];

// Iteration 1
if (command == "--list") {
    console.log("ID Date Concept Category Amount");
    console.log("-------------------------------------------------");
    for (const e of expenses) {
        displayExpense(e);
    }
}

// Iteration 2
else if (command == "--summary") {
    let total = 0;
    for (const e of expenses) {
        total += e.amount;
    }
    console.log(`Total: ${total} €`);
}

else if (command == "--filter-category") {
    const category = process.argv[3]; // obtener la cateogoría de los argumentos
    console.log("ID Date Concept Category Amount");
    console.log("-------------------------------------------------");
    for (const e of expenses) {
        if (e.category == category) {
            displayExpense(e);
        }
    }
}

function displayExpense(expense) {
    console.log(`#${expense.id} ${new Date(expense.timestamp * 1000).toLocaleDateString()} ${expense.concept} ${expense.category} ${expense.amount} €`);
}
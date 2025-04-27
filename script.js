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
        console.log(`#${e.id} ${new Date(e.timestamp * 1000).toLocaleDateString()} ${e.concept} ${e.category} ${e.amount} €`);
    }
}

// Iteration 2
else if (command == "--summary") 
{
    let total = 0;
    for (const e of expenses) {
        total += e.amount;
    }
    console.log(`Total: ${total} €`);
}

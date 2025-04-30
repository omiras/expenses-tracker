// Happy coding

// Primeros pasos: carga el fichero JSON y muestra su contenido en la consola. Luego, ya puedes implementar la iteración 1. Para mostrar la fecha legible, puedes buscar por Chat GPT o por Google como convertir un timestamp 

// Corregir 19h: Cargar el JSON y mostrar cada uno de los objetos (sin procesar, en crudo)
const fs = require("fs");

// Leer el fichero y guardar su contenido en content. 
const content = fs.readFileSync("expenses.json", "utf-8");

// El string que hemos leído es un JSON. Tiene estructura. Disponemos de un método llamado JSON.parse para trasformar un string en una estructura de datos JavaScript manejable
const expenses = JSON.parse(content);

// Obtenemos el comando que quiere ejecutar el usuario
const command = process.argv[2];

if (command == "--list") {
    console.log("ID Date Concept Category Amount");
    console.log("-------------------------------------------------");

    for (const e of expenses) {
        displayExpense(e);
    }
}

// Iteración 2

else if (command == "--summary") {
    // TODO: Recorrer todo el array de expenses y sumar todos los valores de 'amount'
    // Necesitamos una variable para acumular la suma total
    let total = 0;

    for (const e of expenses) {
        total = total + e.amount;
    }
    console.log(`Total: ${total}`);
}

// Iteración 3


// 21.10 --> Corregir la primera parte -> else if... el obtener la categoría a filtrar
else if (command == "--filter-category") {
    const filterCategory = process.argv[3];

    for (const e of expenses) {
        // Mirar si la categoría de cada gasto es igual a filterCategory
        if (e.category == filterCategory) {
            displayExpense(e);
        }
    }
}

function displayExpense(e) {
    const localDate = new Date(e.timestamp * 1000).toLocaleDateString();
    console.log(`#${e.id} ${localDate} ${e.concept} ${e.category} ${e.amount}€`);
}


// Iteración 5

// 1. Cargar todo el JSON
// 2. Creas y añades el nuevo al objeto al array
// 3. Guardar entero y sobreescribes el JSON 
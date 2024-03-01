let favorite_pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

// Print the name of each pizza
console.log("List of favorite pizzas:");
for (let i = 0; i < favorite_pizzas.length; i++) {
    console.log(favorite_pizzas[i]);
}

// Print a sentence for each pizza
console.log("\nStatements about favorite pizzas:");
for (let i = 0; i < favorite_pizzas.length; i++) {
    console.log(`I like ${favorite_pizzas[i]} pizza.`);
}

// Additional sentence about loving pizza
console.log("\nI really love pizza!");

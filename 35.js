"use strict";
let animals = ["Dog", "Cat", "Rabbit"];
// Print the name of each animal
console.log("List of animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Print a statement about each animal
console.log("\nStatements about animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
// Additional statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");

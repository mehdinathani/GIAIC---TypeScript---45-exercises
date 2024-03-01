"use strict";
function make_sandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(item => {
            console.log("- " + item);
        });
    }
    console.log(); // Empty line for separation
}
// Call the function with different number of arguments
make_sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
make_sandwich("Ham", "Swiss Cheese");
make_sandwich();

"use strict";
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`You've ordered a ${size} shirt with the following message: "${message}".`);
}
// Call the function to make a large shirt with the default message
make_shirt();
// Call the function to make a medium shirt with the default message
make_shirt("medium");
// Call the function to make a shirt of any size with a different message
make_shirt("small", "JavaScript is awesome!");

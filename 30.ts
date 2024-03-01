let usernames: string[] = ["admin", "Eric", "John", "Alice", "Bob"];

usernames.forEach(username=>{
    if (username==='admin') {
        console.log("Hello admin, would you like to see a status report?");

    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);

    }
})
//Q31
// Remove all usernames from the array
usernames = [];


// Check if the list of users is empty after removal
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
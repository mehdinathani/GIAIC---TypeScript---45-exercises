"use strict";
let current_users = ["john", "alice", "eric", "bob", "sarah"];
let new_users = ["sarah", "mike", "emily", "chris", "bob"];
// Convert current_users to lowercase
let current_users_lower = current_users.map(user => user.toLowerCase());
// Loop through new_users list
new_users.forEach(new_user => {
    // Convert new_user to lowercase for comparison
    let new_user_lower = new_user.toLowerCase();
    // Check if new_user_lower is in current_users_lower
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username "${new_user}" is available.`);
    }
});

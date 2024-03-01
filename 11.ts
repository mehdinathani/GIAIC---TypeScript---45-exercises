let friends_names : string[] = ["Ali, Mujtaba", "Faraz, Hussain", "Kamran, Ali","Wajid, Ali"];
console.log(friends_names);

// print each person name one by one
friends_names.forEach(name => {
    console.log(name);
    
});

//another method for ex # 12
for (let index = 0; index < friends_names.length; index++) {
    const element = friends_names[index];
    console.log(`Dear ${element}, Hope you are fine.`);
    
}
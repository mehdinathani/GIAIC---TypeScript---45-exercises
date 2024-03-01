let guestList: string[] = ["Ali, Mujtaba", "Faraz, Hussain", "Kamran, Ali","Wajid, Ali"];

// Printing invitation messages to each guest
guestList.forEach(guest => {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nSincerely, \nYour Friend\n======`);
});


// 15 number ex.
// Removing the guest who can't attend
if (guestList.indexOf("Faraz, Hussain") !==-1) {
    guestList.splice(guestList.indexOf("Faraz, Hussain"),1);
    
}
guestList.forEach(guest => {
    console.log(`REVISED NOTE \n\nDear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nSincerely, \nYour Friend\n======`);
});

// Adding the replacement guest
guestList.push("Sir Zia");
guestList.forEach(guest => {
    console.log(`New Invitation \n\nDear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nSincerely, \nYour Friend\n======`);
});


//add 3 friends
// 1 on start
guestList.splice(0,0,"New Friend Amir");

guestList.forEach(guest => {
    console.log(`revision 002 \n\nDear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nSincerely, \nYour Friend\n======`);
});

// 1 on middle
guestList.splice(Math.floor(guestList.length/2),0,"New Middle Friend hasan");

guestList.forEach(guest => {
    console.log(`revision 003 \n\nDear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nSincerely, \nYour Friend\n======`);
});

//Q19
console.log(`Today we are hosting for ${guestList.length} people for Dinner.`);
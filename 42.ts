function show_magicians_modified(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Array of magician's names
let magicians_modified: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call make_great function to modify the magicians_modified array
make_great(magicians_modified);

// Call the show_magicians_modified function to verify modification
show_magicians_modified(magicians_modified);

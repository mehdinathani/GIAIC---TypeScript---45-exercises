function show_magicians(
    magicians:string[]
): void{
    magicians.forEach(magician=> {
        console.log(magician)
    })
}

// Array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the show_magicians function
show_magicians(magicians);
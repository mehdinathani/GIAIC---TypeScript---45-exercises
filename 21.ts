let cars:{[model:string]: {make: string, year:number, color:string}}={
    "Civic":{make:"Honda", year: 2022,color:"Blue"},
    "Corolla": {make:"Toyota",year:2021,color:"Red"},
    "Accord": { make: "Honda", year: 2020, color: "Silver" },
    "Camry": { make: "Toyota", year: 2023, color: "Black" },
}

// now print the details
for (let model in cars) {
    console.log(`${model}`);
    console.log(`Make: ${cars[model].make}`);
    console.log(`Year: ${cars[model].year}`);
    console.log(`Color: ${cars[model].color}`);
    
}
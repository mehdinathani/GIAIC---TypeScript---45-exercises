function store_car_info(manufacturer: string, model: string, ...options: [string, any][]): object {
    let carInfo: { [key: string]: any } = {  // Define an index signature for carInfo
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(option => {
        carInfo[option[0]] = option[1];
    });

    return carInfo;
}

// Call the function with required information and additional key-value pairs
let car = store_car_info("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the object to verify the information stored correctly
console.log(car);

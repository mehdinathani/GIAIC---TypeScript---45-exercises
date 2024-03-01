"use strict";
function store_car_info(manufacturer, model, ...options) {
    let carInfo = {
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

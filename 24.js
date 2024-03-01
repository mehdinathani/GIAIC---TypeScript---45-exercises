"use strict";
let str11 = "apple";
let str22 = "banana";
let str33 = "apple";
let num11 = 5;
let num22 = 10;
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
// Tests for equality and inequality with strings
console.log("Equality test with strings: Is str11 equal to str33? I predict True.");
console.log(str11 === str33);
console.log("Inequality test with strings: Is str11 not equal to str22? I predict True.");
console.log(str11 !== str22);
// Tests using the lower case function
console.log("Lowercase test: Is str11 in lowercase 'apple'? I predict True.");
console.log(str11.toLowerCase() === "apple");
// Numerical tests
console.log("Equality test with numbers: Is num11 equal to 5? I predict True.");
console.log(num11 === 5);
console.log("Inequality test with numbers: Is num22 not equal to 5? I predict True.");
console.log(num22 !== 5);
console.log("Greater than test: Is num22 greater than num11? I predict True.");
console.log(num22 > num11);
console.log("Less than test: Is num11 less than num22? I predict True.");
console.log(num11 < num22);
console.log("Greater than or equal to test: Is num22 greater than or equal to 10? I predict True.");
console.log(num22 >= 10);
console.log("Less than or equal to test: Is num11 less than or equal to 5? I predict True.");
console.log(num11 <= 5);
// Tests using "and" and "or" operators
console.log("And operator test: Is num11 less than 10 and num22 greater than 5? I predict True.");
console.log(num11 < 10 && num22 > 5);
console.log("Or operator test: Is num11 greater than 10 or num22 less than 5? I predict False.");
console.log(num11 > 10 || num22 < 5);
// Test whether an item is in an array
console.log("Item in array test: Is 3 in array1? I predict True.");
console.log(array1.includes(3));
// Test whether an item is not in an array
console.log("Item not in array test: Is 7 not in array1? I predict True.");
console.log(!array1.includes(7));

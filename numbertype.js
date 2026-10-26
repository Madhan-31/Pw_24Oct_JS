function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// Declare and initialize the variable
let number = -5;

// Call the function and print the result
console.log(checkNumber(number));
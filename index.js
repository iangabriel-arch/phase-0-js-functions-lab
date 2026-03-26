function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    }
}
console.log(findMaximum(20,10));

function calculateTax(amount) {
    const tax = amount * 0.1;
    return tax;
}
console.log(calculateTax(1000));

function convertToUpperCase(text) {
    return text.toUpperCase();
}
console.log(convertToUpperCase("hello"));

function isPalindrome(word) {
    const reversed = word.split("").reverse().join("");
    if (word === reversed) {
       return true;
    }
    else {
        return false;
    }
}
console.log(isPalindrome("goat"));

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * discountPercentage / 100;
    const discountedprice = originalPrice - discountAmount;
    return discountedprice;
}
console.log(calculateDiscountedPrice(100, 20));


        

    




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
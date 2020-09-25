function palindrome(str) {
    reverseString = str.split("").reverse().join("");
    console.log(reverseString)
    if (str === reverseString) return true;
    else return false;
}

console.log(palindrome('goog'));

// 2. Encode String
let testString = "AAAABBBCCDAA"

function encodeString(word) {
  let soln = '';
  let n = word.length;
  let letter = word[0];
  let count = 1;

  for (let i = 1; i < n; i++) {
    if (word[i] == letter) {
      count += 1;
    } else {
      soln += count.toString() + letter;
      letter = word[i];
      count = 1;
    }
  }
  soln += count.toString() + letter;
  return soln;
}

// 3. Factorial Trailing Zeroes
const factorial = n => !(n > 1) ? 1 : factorial(n - 1) * n;

function trailingZeroes(n) {
  let nFactorial = factorial(n);
  let nString = nFactorial.toString();
  let soln = 0;

  for (let i = nString.length - 1; i >= 0; i--) {
    if (nString[i] == '0') {
      soln += 1;
    } else {
      break;
    }
  }
  console.log(`n factorial = ${nFactorial} / number of zeroes = ${soln}`)
}


// 4. reverse string

const reverseString = str => {
  let splitString = str.split('');
  let reversedArray = splitString.reverse();
  let reversedString = reversedArray.join('');
  return reversedString;
  
}

const reverseString2 = str => str.split('').reverse().join('');

const reverseString3 = str => {
  let soln = '';

  for (let i = str.length - 1; i >= 0; i--) {
    soln += str[i];
  }
  return soln;
}

console.log(reverseString3("this is also another string"));
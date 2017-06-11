// https://www.freecodecamp.com/challenges/check-for-palindromes

function palindrome(str) {

const newstr = str.replace(/[\W_]/g, '').toLowerCase();

const reversed = newstr.split('').reverse().join('');

return newstr === reversed;

}

console.log(palindrome("eye"));
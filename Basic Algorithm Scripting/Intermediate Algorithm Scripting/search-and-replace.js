// https://www.freecodecamp.com/challenges/search-and-replace

function myReplace(str, before, after) {

const searchPosition = str.match(before).index;

if(/[A-Z]/.test(str[searchPosition])) {
    after = after[0].toUpperCase() + after.substr(1);
}

return str.replace(before, after);

}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

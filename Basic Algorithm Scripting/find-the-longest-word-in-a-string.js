// https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

function findLongestWord(str) {
  
  const arr = str.split(' ').reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
  
  return arr.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
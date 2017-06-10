// https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

function findLongestWord(str) {
  
  var arr = str.split(' ').reduce(function(a, b){
    return a.length > b.length ? a : b;
  });
  
  return arr.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
// https://www.freecodecamp.com/challenges/pig-latin

function translatePigLatin(str) {

  const firstVowelIndex = str.match('a|e|i|o|u').index;

  if(firstVowelIndex === 0) {
      str = str + 'way';
  } else {
      str = str.substr(firstVowelIndex) + str.substr(0, firstVowelIndex) + 'ay';
  }

  return str;
}

console.log(translatePigLatin("california"));
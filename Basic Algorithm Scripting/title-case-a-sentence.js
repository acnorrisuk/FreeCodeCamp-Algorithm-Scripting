// https://www.freecodecamp.com/challenges/title-case-a-sentence

function titleCase(str) {
  str = str.toLowerCase().split(' ');

  var capitalized = str.map(function(word) {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });

  return capitalized.join(' ');
}

titleCase("I'm a little tea pot");
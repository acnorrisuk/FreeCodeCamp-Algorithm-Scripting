// https://www.freecodecamp.com/challenges/title-case-a-sentence

function titleCase(str) {
  str = str.toLowerCase().split(' ');

  const capitalized = str.map(word => {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });

  return capitalized.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
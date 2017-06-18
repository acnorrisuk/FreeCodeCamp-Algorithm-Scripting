// https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num) {

  return num <= 0 ? '' : str.repeat(num);

}

console.log(repeatStringNumTimes("abc", 3));

// https://www.freecodecamp.com/challenges/slasher-flick

function slasher(arr, howMany) {

  newArr = arr.slice(howMany);

  return newArr;
}

console.log(slasher([1, 2, 3], 2));
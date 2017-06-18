// https://www.freecodecamp.com/challenges/finders-keepers

function findElement(arr, func) {
  
  const matches = arr.filter(func);
  
  return matches[0];

}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
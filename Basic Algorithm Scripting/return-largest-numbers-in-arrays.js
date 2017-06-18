// https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

function largestOfFour(arr) {
let newArr = [];

arr.forEach(function(sub){
    newArr.push(Math.max(...sub));
});

  return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// https://www.freecodecamp.com/challenges/diff-two-arrays

function diffArray(arr1, arr2) {
  var newArr = [...arr1, ...arr2];

  return newArr.filter(function(num){
    return !(arr1.includes(num) && arr2.includes(num));
  });
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
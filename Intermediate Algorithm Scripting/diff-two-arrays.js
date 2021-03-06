// https://www.freecodecamp.com/challenges/diff-two-arrays

function diffArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2];

  return newArr.filter(num => {
    return !(arr1.includes(num) && arr2.includes(num));
  });
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
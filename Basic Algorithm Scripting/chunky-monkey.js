// https://www.freecodecamp.com/challenges/chunky-monkey

function chunkArrayInGroups(arr, size) {
  
    newArr = [];


    for( var i = 0; i < arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
    }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

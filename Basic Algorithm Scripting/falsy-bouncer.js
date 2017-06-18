// https://www.freecodecamp.com/challenges/falsy-bouncer

function bouncer(arr) {

  return arr.filter(item => {
    if( item !== false ) {
        return item;
    }
  });
}

console.log(bouncer([7, "ate", "", false, 9]));
// https://www.freecodecamp.com/challenges/falsy-bouncer

function bouncer(arr) {

  return arr.filter(function(item){
    if( item !== false ) {
        return item;
    }
  });
}

console.log(bouncer([7, "ate", "", false, 9]));
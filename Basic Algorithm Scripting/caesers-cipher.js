// https://www.freecodecamp.com/challenges/caesars-cipher

function rot13(str) { // LBH QVQ VG!
  
  const rot = 13;

    const newStrArr = [];

    for( let i = 0; i < str.length; i++ ) {
      if(str.charCodeAt(i) >= (65 + rot) && str.charCodeAt(i) <=90 ) {
        newStrArr.push(str.charCodeAt(i) - rot);
      } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <=(65 + rot) ) {
        newStrArr.push(str.charCodeAt(i) + rot);
      } else {
          newStrArr.push(str.charCodeAt(i));
      }
  }

  // return new letters
  return String.fromCharCode(...newStrArr);

}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
// https://www.freecodecamp.com/challenges/dna-pairing

function pairElement(str) {

  const basePairs = {
      G: 'C',
      C: 'G',
      A: 'T',
      T: 'A'
  }
  
  return str.split('').map(function(base){
    return [base, basePairs[base]];
  });
}

console.log(pairElement("GCG"));

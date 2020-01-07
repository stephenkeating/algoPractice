// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

  const newN = Array.from(String(n), Number)
      .reverse()
      .join('');

  const answer = parseInt(newN)
  
  return n >= 0 ? answer : answer * -1

}

module.exports = reverseInt;


// const numToSeparate = 12345;

// const arrayOfDigits = Array.from(String(numToSeparate), Number);

// console.log(arrayOfDigits);   //[1,2,3,4,5]
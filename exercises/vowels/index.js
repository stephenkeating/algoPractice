// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // Regex: g makes sure we dont stop at first match. i makes it case insensitive.
  // matches returns an array if it finds any. returns null if not. 
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0
}

module.exports = vowels;

// function vowels(str) {
//   let total = 0
//   for (let char of str.toLowerCase()) {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//       total++
//     }
//   }
//   return total
// }

// function vowels(str) {
//   let total = 0
//   let checker = 'aeiou'
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       total++
//     }
//   }
//   return total
// }
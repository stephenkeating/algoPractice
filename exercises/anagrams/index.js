// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  
  let aHash = {}
  let bHash = {}
  
  let A = stringA.replace(/[^\w]/g, '').toLowerCase()
  let B = stringB.replace(/[^\w]/g, '').toLowerCase()
  
  for (char of A) {
    if (aHash[char]) {
      aHash[char] += 1
    } else {
      aHash[char] = 1
    }
  }
  for (char of B) {
    if (bHash[char]) {
      bHash[char] += 1
    } else {
      bHash[char] = 1
    }
  }
  
  if (A.length === B.length) {
    for (key in aHash) {
      if (aHash[key] === bHash[key]) {
        return true
      } else {
        return false
      }
    }
  } else {
    return false
  }

}

module.exports = anagrams;


// let word
//   word.replace(/[^\w]/g, '').toLowerCase()
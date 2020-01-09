// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// take an argument of an integer n. 
// create n strings in a console.log of n characters. 
// if n === 2, string 1 has 1 '# ', string 2 has '##'
//  create a loop that runs n times. 
// console log i #s and n-i spaces

function steps(n) {
  let pounds = ''
  let spaces = ' '
  
  for (i = 1; i <= n; i++) {
    pounds = pounds + '#'
    // for (k = n-i; k > 0; k--) {
      // (spaces = spaces + " ") * n-i
    // }
    console.log(pounds + spaces.repeat(n-i))
  }
  
  
}

module.exports = steps;

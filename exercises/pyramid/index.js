// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// our solution to steps:
// function steps(n) {
//   let pounds = ''
//   let spaces = ' '
  
//   for (i = 1; i <= n; i++) {
//     pounds = pounds + '#'
//     // for (k = n-i; k > 0; k--) {
//       // (spaces = spaces + " ") * n-i
//     // }
//     console.log(pounds + spaces.repeat(n-i))
//   }
// }

// will need to use 2x-1 to solve levels

// row 1 will always be 1 # with (2n-2)/2 spaces *on each side* of the #
// if row 2 exists, it is 2n-1 #s with 
// level n will always be 2n-1 #s

// let pounds = ''
// let space = ' '
// loop from 0 to n. 
// for (i = 1; i <= n.length; i++) {
  // pounds = pounds + '#'
  // console.log(space.repeat(some logic) + pounds + space.repeat(some logic))
// }

function pyramid(n) {

  let pounds = '#'
  let space = ' '
  let maxLength = (2 * n - 1)
  
  for (let i = 1; i <= n; i++) {
    let poundsStr = pounds.repeat(2 * i - 1)
    console.log(space.repeat((maxLength - poundsStr.length)/2) + poundsStr + space.repeat((maxLength - poundsStr.length)/2))
  }

}

module.exports = pyramid;

//       ' # '
//       '###'
//       '  #  '
//       ' ### '
//       '#####'   // n = 3; poundStr.length = 5
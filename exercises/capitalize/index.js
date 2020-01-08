// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

  let transformedStr = []

  for (let word of str.split(' ')) {
    transformedStr.push(word[0].toUpperCase() + word.slice(1))
  }

  return transformedStr.join(' ')
}

module.exports = capitalize;



// think about .slice

// const word = 'there'
// word.slice(1) // 'here'
// word[0].toUpperCase() // 'T'

// function capitalize(str) {

//   let words = str.split(' ')
//   let capitalStrArray = []

//   for (word of words) {
//     capitalWord = ''
//     const first = word[0].toUpperCase()
//     const rest = word.splice(1)
//     capitalWord = first + rest
//     capitalStrArray.append(capitalWord)
//   }

//   return capitalStrArray.join(' ')
// }
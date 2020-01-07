// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  const hash = {}
  for (const c of str) {

    hash[c] = hash[c] + 1 || 1

  }

  // return Object.keys(hash).reduce((a, b) => hash[a] > hash[b] ? a : b);
  let max = 0
  let maxChar = ''
  for (const c in hash) {

    if (hash[c] > max) {
      max = hash[c];
      maxChar = c
    }

  }

  return maxChar
}

module.exports = maxChar;

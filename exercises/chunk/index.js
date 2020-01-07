// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  let i = 0

  while (i < array.length) {
    chunked.push(array.slice(i, i + size))
    i += size
  }
  
  return chunked
}

module.exports = chunk;


// function chunk(array, size) {

//   let newArray = [];
//   let subArray = [];
//   for (i=0; i < array.length; i++){
//     subArray.push(array[i]);
//     if ((i + 1) % size === 0 || i == array.length - 1) {
//       newArray.push(subArray)
//       subArray = []
//     }
//   }
//   console.log(newArray)
//   return newArray
// }

// function chunk(array, size) {

//   let chunked = [];

//   for (let n of array) {
//     let last = chunked[chunked.length - 1]
//     if (!last || last.length ===  size) {
//       chunked.push([n]);
//     } else {
//       last.push(n)
//     }
//   }
//   return chunked
// }
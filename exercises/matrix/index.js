// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// need start/end column vars, and start/end row vars. and counter var. 

// create mainArray
// create counter = 1
// as long as start column <= end column && start row <= end row
  // loop from start column to end column
    // at mainArray[start column][i] assign counter
    // counter++
  // increment start row
  // loop from start row to end row
    // at mainArray[i][end column] assign counter variable
    // counter++
  // decrement end row
  // ... repeat for other two sides

function matrix(n) {

  let counter = 1
  let startRow = 1
  let startColumn = 1
  let endRow = n
  let endColumn = n

  while (startColumn <= endColumn && startRow <= endRow)
    for (let i = 0; i < endRow; ) {

    }

}

module.exports = matrix;

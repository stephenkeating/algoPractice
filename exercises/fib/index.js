// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn){
  const cache = {};
  return function(...args){
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result
  }

}

function slowFib(n) {

  // recursive solution
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n -2)

}

const fib = memoize(slowFib)

module.exports = fib;


// function fib(n) {

//   let fibArray = [0, 1]
//   let counter = 2

//   while (fibArray.length <= n) {
//     fibArray[counter] = fibArray[counter - 1] + fibArray[counter - 2];
//     counter++;
//   }

//   return fibArray[n];

// }


// fast recursive could also be written like this:
// function fib(n) {

//   // recursive solution
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n -2)

// }

// fib = memoize(fib)
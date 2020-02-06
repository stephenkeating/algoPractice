// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

// start a loop that iterates for the length of the longer source
// (sourceOne.length > sourceTwo.length ? sourceOne.length : sourceTwo.length)

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const q = new Queue ();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()){
      q.add(sourceOne.remove())
    }
    if (sourceTwo.peek()){
      q.add(sourceTwo.remove())
    }
  }

  return q

}

// didnt work. perhaps .length doesn't work for the inputs?:
// function weave(sourceOne, sourceTwo) {
//   const q = new Queue ();
//   const n = (sourceOne.length > sourceTwo.length ? sourceOne.length : sourceTwo.length)

//   for (let i = 0; i < n - 1; i++) {

//     if (sourceOne.peek()) {
//       q.add(sourceOne.remove());
//     }
//     if (sourceTwo.peek()) {
//       q.add(sourceTwo.remove());
//     }
//   }

//   return q
// }

module.exports = weave;

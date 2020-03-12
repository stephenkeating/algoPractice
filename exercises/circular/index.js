// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
}

module.exports = circular;


// 1 - 2 - 3 - 4 - 5 (- 3 - 4 - 5)
// 1 - 2 - 3 - 4 - 5 (- 4 - 5)
// 1 - 2 - 3 - 4 - 5


//// super inefficient method
// function circular(list) {

//   let node = list.getFirst()
//   let arr = []

//   while (node.next) {
//     if (arr.includes(node)) {
//       return true;
//     } else {
//       arr.push(node)
//       node = node.next
//     }
//   }

//   return false;
// }
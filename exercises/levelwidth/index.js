// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let arr = [root, 's'];
  let result = [0];

  while (arr.length > 1) {
    let node = arr.shift();
    if (node === 's') {
      arr.push(node);
      result.push(0);
    } else {
      arr.push(...node.children);
      result[result.length - 1]++;
    }
  }

  return result;
}

module.exports = levelWidth;

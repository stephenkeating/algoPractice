// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // from i = 0 to < array.length
  // from j = 0 to (array.length - i)
  // if element j is > j + 1, swap them
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j]; 
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

// selectionSort psuedocode
// initialize i = 0, j = 0, indexOfMin = 0
// from i = 0 < array.length
  // assume arr[i] is the least in the array, assign i to to indexOfMin
  // for j from i + 1 to end of array
    // see if there is an element with a lower value
      // if there is, record its index
  // if the index of the current element and the lowest element are not the same, swap them

function selectionSort(arr) {
  let i = 0;
  let indexOfMin = 0;
  
  while (i < arr.length) {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
      j++;
    }
    if (arr[i] > arr[indexOfMin]) {
      let min = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = min;
    }
    i++;
  }
  return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, next = null ) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertFirst (data) {
    this.head = new Node (data, this.head);
  }

  size () {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter
  }

  getFirst () {
    return this.head;
  }

  getLast () {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.next) {
      node = node.next
    }
    return node;
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    if (!this.head) {
      return null;
    }

    this.head = this.head.next;
  }

  removeLast () {
    if (!this.head) {
      return null; 
    }
    if (!this.head.next) {
      return  this.head = null;
    }
    let node = this.head
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
  }

  insertLast (data) {
    let currentLast = this.getLast()
    currentLast ? currentLast.next = new Node(data) : this.head = new Node(data)  
  }

}

module.exports = { Node, LinkedList };

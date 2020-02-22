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
    let node = this.head;
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
  }

  insertLast (data) {
    let currentLast = this.getLast();
    currentLast ? currentLast.next = new Node(data) : this.head = new Node(data);
  }

  getAt (index) {
    if (!this.head) {
      return null;
    }
    let node = this.head; 
    let counter = 0; 
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt (index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      return  this.head = this.head.next;
    }
    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next; 
  }

  insertAt (data, index) {
    let node = new Node(data)
    if (index === 0) {
      if (!this.head) {
        return this.head = node
      } else {
        node.next = this.head
        return this.head = node
      }
    }
    
    let previous = this.getAt(index - 1) || this.getLast();
    node.next = previous.next
    previous.next = node
  }

  forEach (fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };

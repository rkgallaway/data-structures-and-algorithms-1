'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  includes(val) {
    let current = this.head;
    // console.log(searchVal);
    // console.log(current.value);
    while (current.value !== val) {
      current = current.next;
    }
    console.log(`Value: ${val} is present`);
  }

  toString(value) {
    console.log(`{ ${this.head.value} } ->, Null`);
  }
}

let linkedList = new LinkedList();

linkedList.insert(99);
linkedList.includes(99);
linkedList.toString(linkedList);
console.log(linkedList);

module.exports = {
  Node,
  LinkedList,
};

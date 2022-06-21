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

  // insertBefore(value) {}

  insertAfter(searchValue, val) {
    let current = this.head;
    while (current) {
      if (current.value === val) {
        return (this.head = new Node(val, this.head));
      }
    }
  }

  append(value) {
    const node = new Node(value);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  includes(val) {
    let current = this.head;
    console.log(current.value);

    while (current) {
      if (current.value === val) {
        console.log(`Value: ${val} is present`);
      }
    }
  }

  toString() {
    console.log(`{ ${this.head.value} } ->, Null`);
  }
}

let linkedList = new LinkedList();

linkedList.insert(99);
linkedList.insert(12);
linkedList.insert(343);
linkedList.insert(666666555);
linkedList.insert(86);
linkedList.append(400);
linkedList.append(900);

// linkedList.includes(400);
linkedList.toString(linkedList);
// linkedList.insertAfter(86, 12);
console.log(linkedList);

module.exports = {
  Node,
  LinkedList,
};

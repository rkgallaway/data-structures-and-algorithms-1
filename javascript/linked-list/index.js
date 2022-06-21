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
    // this.length = 0;
  }

  insert(value) {
    const newNode = new Node(value);
    // this.head = newNode;
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    return;
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
    // console.log(current.value);

    if (current.value !== val) {
      console.log(`Value: ${val} NOT HERE`);
      return;
    } else {
      console.log(`Value: ${val} IS HERE`);
      return;
    }
  }

  nThFromEnd() {}

  toString() {
    console.log(`{ ${this.head.value} } ->, Null`);
  }
}

let linkedList = new LinkedList();

linkedList.insert(99);
linkedList.insert(12);
linkedList.insert(343);
linkedList.insert(666666555);
linkedList.insert(87);
// linkedList.append(400);
// linkedList.append(900);

linkedList.includes(666666555);
linkedList.toString(linkedList);
// linkedList.insertAfter(86, 12);
console.log(linkedList);

module.exports = {
  Node,
  LinkedList,
};

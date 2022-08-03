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

  traverse() {
    let current = this.head;
    let results = [];

    while (current) {
      results.push(current.value);
      current = current.next;
    }
    return results;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    return this;
  }

  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(val) {
    let current = this.head;
    let result = false;

    while (current) {
      if (current.value === val) {
        result = true;
      }
      current = current.next;
    }
    return result;
  }

  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }
}

let linkedList = new LinkedList();

linkedList.insert(99);
linkedList.insert(88);
linkedList.insert(55);
linkedList.insert(99);
linkedList.insert(99);
linkedList.insert(99);
linkedList.insert(99);
linkedList.insert(99);
linkedList.insert(77777);
linkedList.append(500);

console.log(linkedList.includes(88));
console.log(linkedList.toString(linkedList));
console.log(linkedList);

module.exports = {
  Node,
  LinkedList,
};

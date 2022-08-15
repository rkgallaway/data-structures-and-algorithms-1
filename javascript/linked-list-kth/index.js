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

  kThValueFromTheEnd(k) {
    let current = this.head;
    let newCurrent = this.head;
    let length = 0;
    let length2 = 0;
    while (current) {
      length++;
      current = current.next;
    }

    let kThNode = length - k;

    while (newCurrent) {
      length2++;
      if (length2 === kThNode) {
        console.log('LOOK HERE', newCurrent.value);
        return newCurrent.value;
      } else {
        newCurrent = newCurrent.next;
      }
    }
  }
}

let linkedList = new LinkedList();

linkedList.insert(99);
linkedList.insert(88);
linkedList.insert(55);
linkedList.insert(77777);
linkedList.append(500);
linkedList.kThValueFromTheEnd(2);

console.log(linkedList.toString(linkedList));

module.exports = {
  Node,
  LinkedList,
};

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
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  insertBefore(value, newValue) {
    let current = this.head;

    while (current.next) {
      if (current.next.value === value) {
        let newNode = new Node(newValue);
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      } else {
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        let newNode = new Node(newValue);
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      } else {
        current = current.next;
      }
    }
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
}

let linkedList = new LinkedList();

linkedList.append(500);
linkedList.append(222);
linkedList.append(88);
linkedList.append(333333);
linkedList.insertBefore(88, 7777777);
linkedList.insertAfter(88, 999999);

console.log(linkedList.toString());

module.exports = {
  Node,
  LinkedList,
};

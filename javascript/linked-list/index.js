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

console.log(linkedList.includes(88));
console.log(linkedList.toString(linkedList));
console.log(linkedList);

module.exports = {
  Node,
  LinkedList,
};

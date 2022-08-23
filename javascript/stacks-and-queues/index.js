'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.top) return null;
    let temp = this.top;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.size--;
    return temp.value;
  }

  peek() {
    console.log(this.top.value);
    return this.top.value;
  }

  isEmpty() {
    console.log(this.top === null);
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.front) return null;

    let temp = this.front;
    if (this.front === this.back) {
      this.back = null;
    }
    this.front = this.front.next;
    this.size--;
    return temp.value;
  }

  peek() {
    console.log(this.front.value);
    return this.front.value;
  }

  isEmpty() {
    console.log(this.front === null);
    return this.front === null;
  }
}

let stack = new Stack();

stack.push(666666666);
stack.push(35);
stack.push(7777745436);
stack.push(99999);
stack.pop();
stack.peek();
stack.isEmpty();

console.log(stack);

let queue = new Queue();

queue.enqueue(55);
queue.enqueue(66);
queue.enqueue(123123);
queue.enqueue(999999);
queue.enqueue(45433222222);
queue.enqueue(88666);
queue.enqueue(77777777);
queue.dequeue();
queue.peek();
queue.isEmpty();

console.log(queue);

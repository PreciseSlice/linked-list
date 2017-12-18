import Node from './Node';

export default class LinkedList {
  constructor () {
    this.head = null;
    this.length = 0;
  }

  unshift(data) {
    const currentHead = this.head;
    const newNode = new Node(data);
    
    newNode.next = currentHead;
    this.head = newNode;
    this.length++;
  }

  shift() {
    let oldHead = this.head;
   
    if (this.length) {
      this.head = this.head.next;
      this.length--;
    }
    return oldHead;
  }

  push(data) {
    const newNode = new Node(data);

    if(!this.length) {
      this.head = newNode;
    } else {
    let currentNode = this.head;
    
      while(currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

  this.length++;
  }

}

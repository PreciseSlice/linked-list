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
    this.length ++;
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

  pop(data) {

    if(!this.length) {
      return null;
    } else {
      let currentNode = this.head;
      let prevNode;

      if(this.length === 1){
        this.head = null;
      }

      // find last node
      while(currentNode.next !== null) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

    if(prevNode) {
      prevNode.next = null;
    }
    
    this.length --;

    return currentNode;
    }
  }

  find(data) {
    let foundNode = null;
    let currentNode = this.head;

    while (currentNode) {
      
      if (currentNode.data === data) {
        foundNode = currentNode;
        return foundNode;
      } else {
        currentNode = currentNode.next;
      } 
    }

    return foundNode;
  }

  delete (data) {
    
    if (this.head.data === data) {
      this.length --;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {

      if (currentNode.data === data) {
        previousNode.next = currentNode.next;
        this.length --;
        break;
      
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

    }
  }

  toArray() {
    let arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return arr;
  }

  distance(first, second) {
    let currentNode = this.head;
    let count = 0;
    
    while(currentNode) {
      
      if (currentNode.data === first) {
        count = 0;
      }
      
      if (currentNode.data === second) {
        return count;
      }
      
      count ++;
      currentNode = currentNode.next;

    }
  }

}

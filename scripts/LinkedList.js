import Node from './Node';

export default class LinkedList {
  constructor () {
    this.head = null;
    this.length = 0;
  }

  unshift(data) {
    const currentHead = this.head;
    const newNode =  new Node(data);
    
    newNode.next = currentHead;
    this.head = newNode;
    this.length++;
  }

}

// Node
interface NodeInterface {
  data: any;
  prev: NodeInterface | null;
  next: NodeInterface | null;
}

class NodeItem implements NodeInterface {
  data: any;
  prev: NodeInterface | null;
  next: NodeInterface | null;

  constructor(data: any, prev: NodeInterface | null, next: NodeInterface | null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

// Linked-Deque
interface LinkedDequeInterface {
  head: NodeItem | null;
  tail: NodeItem | null;
  pushRight(node: NodeItem): void;
  pushLeft(node: NodeItem): void;
  popRight(): NodeItem;
  popLeft(): NodeItem;
  getHead(): NodeItem;
  getTail(): NodeItem;
  display(): void;
}

class LinkedDeque implements LinkedDequeInterface {
  pointer: NodeItem | null;
  head: NodeItem | null;
  tail: NodeItem | null;

  constructor() {
    this.pointer = null;
    this.head = null;
    this.tail = null;
  }

  pushRight(data: any) {
    const node = new NodeItem(data, null, null);
    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node
      this.tail = node;
    }
  }

  pushLeft(data: any) {
    const node = new NodeItem(data, null, null);
    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  popRight() {
    if (!this.tail) {
      throw new Error('삭제할 요소가 없습니다.');
    }
    const result = this.tail;
    this.tail = this.tail?.prev;

    return result;
  }

  popLeft() { 
    if (!this.head) {
      throw new Error('삭제할 요소가 없습니다.');
    }
    const result = this.head;
    this.head = this.head?.next;

    return result;
  }

  getHead() {
    if (!this.head) {
      throw new Error('삭제할 요소가 없습니다.');
    }

    return this.head;
  }

  getTail() {
    if (!this.tail) {
      throw new Error('삭제할 요소가 없습니다.');
    }

    return this.tail
  }

  display() {
    if (!this.head || !this.tail) {
      console.log("--- No Item ---");
      return;
    }
    let tailPointer: null | NodeItem;

    tailPointer = this.tail;
    while (tailPointer) {
        console.log(tailPointer.data);
        tailPointer = tailPointer.prev;
    }
  }
}

const deque = new LinkedDeque();

deque.pushRight("닭장");
deque.pushLeft("암탉");

deque.pushRight("문간");
deque.pushLeft("거위");

deque.pushRight("외양간");
deque.pushLeft("송아지");

deque.display();
const CircularQueue = require("./circular-queue");

class Deque extends CircularQueue {
  SIZE: number;
  constructor(SIZE: number) {
    super(SIZE);
  }

  pushRight(item: any) {
    super.enqueue(item);
  }

  popLeft() {
    super.dequeue();
  }

  getLeft() {
    return super.peek();
  }

  pushLeft(item: any) {
    if (super.isFull()) {
      throw new Error("포화상태 입니다.");
    }
    this.queue[this.front] = item;
    this.front = this.front - 1 < 0 ? this.SIZE - 1 : this.front - 1;
  }

  popRight() {
    if (super.isEmpty()) {
      throw new Error("삭제할 요소가 없습니다.");
    }
    let result = this.queue[this.rear];
    this.rear = this.rear - 1 < 0 ? this.SIZE - 1 : this.rear - 1;

    return result;
  }

  getRight() {
    return this.queue[this.rear];
  }
}

const deque = new Deque(10);

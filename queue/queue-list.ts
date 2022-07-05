// 가장 간단하게 리스트로 구현
interface QueueInterface {
  queue: any[];
  enqueue(item: any): void;
  dequeue(): void | any;
  getSize(): number;
  isEmpty(): boolean;
  display(): void;
}

class Queue implements QueueInterface {
  queue: any[];

  constructor() {
    this.queue = [];
  }

  enqueue(item: any) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return this.queue.shift();
    }
  }

  getSize() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  display() {
    console.log(this.queue);
  }
}

const myQ = new Queue()

for (let i = 0; i < 10; i++) {
  myQ.enqueue(i)
}

myQ.display();

for (let i = 0; i < 5; i++) {
  myQ.dequeue()
}

myQ.display();




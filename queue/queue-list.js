// 가장 간단하게 리스트로 구현

class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(item) {
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
  myQ.enque(i)
}

myQ.display();

for (let i = 0; i < 5; i++) {
  myQ.deque()
}

myQ.display();




export default class Queue {
  constructor() {
    this.queue = [];
  }

  enque(node) {
    this.queue.push(node);
  }

  deque() {
    return this.queue.shift(0);
  }
}
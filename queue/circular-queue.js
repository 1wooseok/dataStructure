// 배열로 큐를 구현하게 되면
// dequeue 연산시 O(n)의 시간복잡도를 가짐
// ( list의 0 번째 index 값을 삭제할때 뒤에있는 n개의 값들이 앞으로 한칸씩 이동해야하기 때문. )

// 원형 큐는 포인터 역할을 하는 변수를 사용해 삽입, 삭제 연산 수행 

// module.exports = class CircularQueue {
export default class CircularQueue {
  constructor(SIZE) {
    this.SIZE = SIZE;
    this.queue = Array(this.SIZE).fill(null);
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  isFull() {
    return this.front === (this.rear + 1) % this.SIZE;
  }

  enqueue(item) {
    if (this.isFull()) {
      throw new Error("포화상태입니다.");
    }
    this.rear = (this.rear + 1) % this.SIZE;
    this.queue[this.rear] = item;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("삭제할 요소가 없습니다.");
    }
    this.front = (this.front + 1) % this.SIZE;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("삭제할 요소가 없습니다.");
    }
    return this.queue[(this.front + 1) % this.SIZE];
  }

  size() {
    return (this.rear - this.front + this.SIZE) % this.SIZE;
  }

  display() {
    console.log({ "LEFT": this.rear, "RIGHT": this.front });
    console.log(this.queue)
  }
}
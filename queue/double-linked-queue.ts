interface DataNodeInterface {
  data: any;
  prev: DataNode | null;
  next: DataNode | null;
}

class DataNode implements DataNodeInterface {
  data: any;
  prev: DataNode | null;
  next: DataNode | null;

  constructor(data: any) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

interface DoubleLinkedDequeInterface {
  left: DataNodeInterface | null;
  right: DataNodeInterface | null;
  size: number;
  popLeft(): any;
  popRight(): any;
  pushRight(newData: any): void;
  pushLeft(newData: any): void;
  getLeft(): any;
  getRight(): any;
  getSize(): number;
  display(): void;
}

class DoubleLinkedDeque implements DoubleLinkedDequeInterface {
  left: DataNodeInterface | null;
  right: DataNodeInterface | null;
  size: number;

  constructor() {
    this.left = null;
    this.right = null;
    this.size = 0;
  }

  popLeft() {
    if (!this.left) {
      throw new Error('요소가 존재하지 않습니다.');
    }
    const data = this.left.data;
    this.left = this.left.next;

    return data;
  };

  popRight() {
    if (!this.right) {
      throw new Error('요소가 존재하지 않습니다.');
    }
    const data = this.right.data;
    this.right = this.right.prev;
    
    return data;
  }

  pushLeft(newData: any) {
    const newNode = new DataNode(newData);
    if (!this.left || !this.right) {
      this.left = newNode;
      this.right = newNode;
    } else {
      newNode.next = this.left;
      this.left.prev = newNode;
      this.left = newNode;
    }
    this.size += 1;
  };

  pushRight(newData: any) {
    const newNode = new DataNode(newData);
    if (!this.right) {
      this.right = newNode;
      this.left = newNode;
    } else {
      newNode.prev = this.right;
      this.right.next = newNode;
      this.right = newNode;
    }
    this.size += 1;
  };

  getLeft() {
    if (!this.left) {
      throw new Error('요소가 존재하지 않습니다.');
    }
    return this.left.data;
  }

  getRight() {
    if (!this.right) {
      throw new Error('요소가 존재하지 않습니다.');
    }
    return this.right.data;
  }

  getSize() {
    return this.size;
  }

  display() {
    if (!this.right && !this.left) {
      console.log("--- Empty ---");
    }
    let leftPointer = this.left;
    while (leftPointer) {
      console.log(leftPointer.data);
      leftPointer = leftPointer.next;
    }
  };
}

const deq = new DoubleLinkedDeque();

deq.display();

// 
deq.pushLeft("2");
deq.pushRight("1");
deq.pushLeft("4");
deq.pushRight("3");

//
deq.popLeft();
deq.popLeft();
deq.display();

deq.popLeft();
deq.display();

deq.popLeft();
deq.popLeft();


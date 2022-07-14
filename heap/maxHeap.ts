interface MaxHeapInterface {
  heap: number[],
  getSize(): number,
  isEmpty(): boolean,
  getParent(idx: number): number,
  getLeft(idx: number): number,
  getRight(idx: number): number,
  insert(item: number): void,
  remove(): number,
  display(): void
}

export class MaxHeap implements MaxHeapInterface {
  heap: number[];

  constructor() {
    this.heap = [0];
  }

  getSize(): number {
    return this.heap.length - 1;
  }

  isEmpty(): boolean {
    return this.getSize() === 0
  }

  getParent(idx: number): number {
    idx = parseInt(String(idx / 2));
    return this.heap[idx];
  }

  getLeft(idx: number): number {
    idx *= 2
    return this.heap[idx];
  }

  getRight(idx: number): number {
    idx = idx * 2 + 1
    return this.heap[idx];
  }

  insert(item: number): void {
    this.heap.push(item); // 일단 맨뒤에 추가
    let idx = this.getSize(); // item의 초기 인덱스 ( 맨뒤 )
    while (idx != 1 && item > this.getParent(idx)) { // item이 부모보다 크다면
      this.heap[idx] = this.getParent(idx); // 부모를 아래로 내림
      idx = parseInt(String(idx / 2)) // 이제 아이템이 부모임
    }
    this.heap[idx] = item; // 위 반복에서 비교만하고 실제 값을 넣지 않았기 때문에, 마지막에 값을 추가
  }

  remove(): number {
    if (this.getSize() === 0) {
      throw new Error("Cannot remove from empty heap");
    }
    const max = this.heap[-1];
    const last = this.heap[this.getSize()] // 루트로 올려서 제자리를 찾아줄거임.

    let parent = 1; // root 인덱스
    let child = 2; // 기본: 왼쪽 자식 인덱스
    while (child < this.getSize()) { // 확인할 노드가 없을때까지
      const left = this.getLeft(parent);
      const right = this.getRight(parent);

      if (left < right) { // 더 큰 자식을 기준으로 자리를 찾아야 하기때문에
        child++; // 오른쪽 자식이 더 크다면, 기준을 오른쪽 자식으로 바꿈
      }

      if (last >= this.heap[child]) { // 루트로 올린 last가 하위 레벨 최대값보다 크다면
        break; // 자리를 바꿀 필요가 없기때문에 멈춤
      }

      this.heap[parent] = this.heap[child]; // 하위 레벨 최대값 위로 끌어올림.
      parent = child;
      child *= 2; // 자식 노드 index;
    }
    this.heap[parent] = last; // 위 반복문에서 마지막 요소를 루트로 생각했지만 실제로 값을 넣지는 않았기 때문에 여기서 추가
    this.heap.pop(); // 맨 위로 끌어 올린후, 자리를 다시 정했기 때문에 필요없으므로 삭제

    return max; // 삭제한 최대(최소)값 반환
  }

   display() {
    console.log(this.heap);
  }
}


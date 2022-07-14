## 힙

최대(최소)값을 빠르게 구하기 위한 자료구조로,

완전 이진 트리형태를 갖는다.

최대(최소)값만 빠르게 찾으면 되기때문에 느슨한 정렬 상태를 유지한다.

( \* 완전 이진트리 : 마지막 레벨을 제외한 모든 레벨이 채워져 있는 트리 )

<br>
<br>

## 배열로 구현

힙은 완전 이진트리이기 때문에 중간에 비어있는 노드가 없으므로,

노드에 번호를 붙여 index로 사용하면 배열로 구현할 수 있다.

( \* 햇갈리지 않게 index 0번은 사용하지 않고 1부터 번호를 붙여 사용 )

<br>
<br>

## ADT

```typescript
Heap(): // heap으로 사용할 배열 생성

getSize(): number // 항목 개수 반환

isEmpty(): boolean // 힙이 비어있는지 확인

getParent(idx: number): number // 부모 노드 반환

getLeft(idx: number): number // 왼쪽 자식 반환

getRight(idx: number): number // 오른쪽 자식 반환

insert(item: number): void // 맨 뒤에 추가후, 부모와 크기를 비교하며 제자리를 찾아주어야 함

remove(): number // 최대(최소) 값 삭제 후 반환. 제일 마지막 값을 루트로 생각하고 제자리를 찾아줌으로서 힙 구조를 유지 시켜야 함

// ( * heap 배열의 index 0은 없다고 가정하고 계산 )
```

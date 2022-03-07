# 해싱 테이블을 사용한 단어장

<img src="./해시단어장.png" />

<br>
<br>

## 해시 함수

해시함수로 가장 간단한 제산함수를 사용.

( \* 제산함수 : '탐색 key % Table SIZE' 를 해시 주소로 사용 )

```jsx
 hashFn(key) {
   return (
     String(key)
       .split("")
       .reduce((acc, curr) => acc + curr.charCodeAt(), 0) % this.size
   );
 }
```

<br>
<br>

## 오버플로

체이닝으로 오버플로 처리.

버킷을 연결 리스트로 구현해 하나의 버킷에 여러개의 자료를 담음.

( \*오버플로 : 충돌이 슬롯 수보다 더 많이 발생하는 상황 )

```jsx
insert(key, value) {
    const hash_key = this.hashFn(key);
    let node = this.table[hash_key];
    if (!node) {
      this.table[hash_key] = new Node(Entry(key, value), null);
      return this.renderList();
    }
    while(node) {
      if(String(key) === String(Object.keys(node.entry))) {
        return alert('이미 존재하는 단어');
      }
      node = node.next;
    }
    const new_node = new Node(Entry(key, value), this.table[hash_key].next);
    this.table[hash_key].next = new_node;
    return this.renderList();
  }
```

## 탐색 효율

리스트로 구현할 경우 탐색을 위해 모든 엔트리를 확인해야 하는 반면,

해시 함수를 거쳐 나온 주소의 연결리스트만 탐색하기때문에

훨씬 효율적.

```jsx
search(key) {
    const search_textNode = document.querySelector(".search_value");
    let node = this.table[this.hashFn(key)];
    while (node) {
      if (String(Object.keys(node.entry)) === String(key)) {
        return (search_textNode.textContent = `${key} - ${node.entry[key]}`);
      }
      node = node.next;
    }
    return (search_textNode.textContent = "입력한 단어가 존재하지 않습니다.");
  }
```
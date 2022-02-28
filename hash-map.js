const root = document.getElementById("root");

class Hash {
  constructor(M) {
    this.M = M; // 테이블 크기
    this.table = Array(M); // 테이블 배열로 관리
  }

  insert(key, value) {
    const hash_key = this.hashFn(key);
    if (!this.table[hash_key]) {
      this.table[hash_key] = new Node(Entry(key, value), null);
      return;
    }
    const new_entry = new Node(Entry(key, value), this.table[hash_key].next);
    this.table[hash_key].next = new_entry;
  }

  delete(data) {
    this.table.pop(hashFn(data));
  }

  search(key) {
    let iterater = this.table[this.hashFn(key)];
    if (!iterater) {
      return "존재하지 않는 단어";
    }
    while (true) {
      if (iterater.entry[key]) {
        return iterater.entry[key];
      }
      iterater = iterater.next;
    }
  }

  hashFn(key) {
    return (
      key.split("").reduce((acc, curr) => acc + curr.charCodeAt(), 0) % this.M
    );
  }

  render() {
    const arr = [];
    this.table.forEach(word => {
      word.entry.
    })

    root.innerHTML = `
        <ul>
          ${arr
            .map((word) => `<li>${word.entry['공부']} <button onClick=${this.delete}>삭제</button></li>`)
            .join(" ")}
        </ul>
        <input placeholder="영단어 입력" type="text"/>
        <button>검색</button>
    `;
  }
}

class Node {
  constructor(entry, next) {
    this.entry = entry;
    this.next = next;
  }
}

function Entry(key, value) {
  const obj = {};
  obj[key] = value;
  return obj;
}

const hs = new Hash(7);
hs.insert("공부", "study");
hs.insert("하나", "one");
hs.insert("둘", "two");
hs.insert("셋", "three");
hs.insert("닭", "chicken");
hs.render();

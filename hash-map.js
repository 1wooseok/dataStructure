import { Node, Entry } from "./node.js";

export default class Hash {
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

  delete(key) {
    // key = String(key);
    let iterater = this.table[this.hashFn(key)];
    console.log(key[0]);
    if (Object.keys(iterater.entry)[0] === key[0]) {
      this.table[this.hashFn(key)] = iterater.next;
      console.log(this.table);
    }
    while (true) {
      if (Object.keys(iterater.entry)[0] === key[0]) {
        iterater.next = iterater.next.next;
      }
      iterater = iterater.next;
    }
    return this.render();
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
      String(key)
        .split("")
        .reduce((acc, curr) => acc + curr.charCodeAt(), 0) % this.M
    );
  }

  render() {
    const arr = [];
    this.table.forEach((word) => {
      if (word) {
        arr.push(word.entry);
        let iterater = word.next;
        while (iterater) {
          arr.push(iterater.entry);
          iterater = iterater.next;
        }
      }
    });
    root.innerHTML = `
        <ul>
          ${arr
            .map(
              (word) =>
                `<li>
                  <span>
                    ${Object.keys(word)} - ${Object.values(word)} 
                  </span>
                  <button class="del" onClick=${this.delete(Object.keys(word))}>
                    삭제
                  </button>
                </li>`
            )
            .join(" ")}
        </ul>
        <input placeholder="영단어 입력" type="text"/>
        <button>검색</button>
    `;

    const del_btn = document.querySelector('.del');
    del_btn.addEventListener('click', this.delete(Object.keys(word)));
  }
}

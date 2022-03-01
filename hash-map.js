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
    const ul = document.querySelector("ul");
    let prev = null;
    let node = this.table[this.hashFn(key)];
    while (node) {
      if (String(key) === String(Object.keys(node.entry))) {
        if (!prev) {
          this.table[this.hashFn(key)] = node.next;
        } else {
          prev.next = node.next;
        }
        return (ul.innerHTML = `${arr
          .map(
            (word, idx) =>
              `<li id="${Object.keys(word)}">
                <span>
                  ${Object.keys(word)} - ${Object.values(word)} 
                </span>
                <button>
                  삭제
                </button>
              </li>`
          )
          .join(" ")}`);
      }
      prev = node;
      node = node.next;
    }
    this.render();
  }

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
        let node = word.next;
        while (node) {
          arr.push(node.entry);
          node = node.next;
        }
      }
    });

    root.innerHTML = `
      <div style="display: flex; justify-content: center;">
        <ul>
          ${arr
            .map(
              (word, idx) =>
                `<li id="${Object.keys(word)}">
                  <span>
                    ${Object.keys(word)} - ${Object.values(word)} 
                  </span>
                  <button>
                    삭제
                  </button>
                </li>`
            )
            .join(" ")}
        </ul>
        <form style="margin: 1em 0 0 3em">
          <input class="search_input" placeholder="영단어 입력" type="text"/>
          <button class="search_btn">검색</button>
          <p class="search_value"></p>
        </form>
      </div>
    `;

    const ul = document.querySelector("ul");
    ul.addEventListener("click", (e) => {
      if (e.target.nodeName === "BUTTON") {
        this.delete(e.target.parentNode.id);
      }
    });

    const search_input = document.querySelector(".search_input");
    const search_btn = document.querySelector(".search_btn");
    search_btn.addEventListener("click", (e) => {
      e.preventDefault();
      this.search(search_input.value);
    });
  }
}

function renderList(table, el) {
  const arr = [];
  table.forEach((word) => {
    if (word) {
      arr.push(word.entry);
      let node = word.next;
      while (node) {
        arr.push(node.entry);
        node = node.next;
      }
    }
  });

  el.innerHTML = `${arr
    .map(
      (word, idx) =>
        `<li id="${Object.keys(word)}">
          <span>
            ${Object.keys(word)} - ${Object.values(word)} 
          </span>
          <button>
            삭제
          </button>
        </li>`
    )
    .join(" ")}`;
}

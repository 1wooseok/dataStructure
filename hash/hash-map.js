import { Node, Entry } from "./node.js";
import { checkKor, checkEng } from "./regex.js";

export default class Hash {
  constructor(size) {
    this.size = size; 
    this.table = Array(size);
  }

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

  delete(key) {
    let prev = null;
    let node = this.table[this.hashFn(key)];
    while (node) {
      if (String(key) === String(Object.keys(node.entry))) {
        if (!prev) {
          this.table[this.hashFn(key)] = node.next;
        } else {
          prev.next = node.next;
        }
        return this.renderList();
      }
      prev = node;
      node = node.next;
    }
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
        .reduce((acc, curr) => acc + curr.charCodeAt(), 0) % this.size
    );
  }

  mount() {
    root.innerHTML = `
      <div style="display: flex; justify-content: center;">
        <ul></ul>
        <form style="margin: 1em 0 0 3em">
          <input class="search_input" placeholder="영단어 입력" type="text"/>
          <button class="search_btn">검색</button>
          <p class="search_value"></p>

          <input class="word" placeholder="한글"/>
          <input class="meaning" placeholder="영어" />
          <button class="add_btn">입력</button>
        </form>
      </div>
    `;
    const form = document.querySelector("form");
    form.addEventListener('click', e => {
      e.preventDefault();
      this.btnHandler(e);
    })
  }

  renderList() {
    let arr = [];
    this.table.forEach((word) => {
      while(word) {
        arr.push(word.entry);
        word = word.next;
      } 
    });

    const ul = document.querySelector("ul");

    ul.addEventListener("click", (e) => {
      if (e.target.nodeName === "BUTTON") {
        this.delete(e.target.parentNode.id);
      }
    });

    ul.innerHTML = `
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
    `;
  }

  btnHandler(e) {
    switch (e.target.className) {
      case 'search_btn':
        return this.search(document.querySelector(".search_input").value);
      case 'add_btn':
        const key = document.querySelector('.word').value;
        const value = document.querySelector('.meaning').value;
        checkKor(key) && checkEng(value) && this.insert(key, value);
      default:
        return;
    }
  }
}

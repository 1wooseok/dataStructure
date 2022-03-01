export class Node {
  constructor(entry, next) {
    this.entry = entry;
    this.next = next;
  }
}

export function Entry(key, value) {
  const obj = {};
  obj[key] = value;
  return obj;
}

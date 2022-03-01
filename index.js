import Hash from './hash-map.js';

const root = document.getElementById('root');

const hs = new Hash(7);
hs.insert("공부", "study");
hs.insert("하나", "one");
hs.insert("둘", "two");
hs.insert("셋", "three");
hs.insert("닭", "chicken");
hs.render();
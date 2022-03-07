import tNode from "./tNode.js";
import Queue from "./queue.js";

function levelOrder(root) {
  const q = new Queue();
  let result = '';
  q.enque(root);

  while (q.queue.length) {
    const node = q.deque();
    if(node) {
      result += ` ${node.data}`;
      node.left && q.enque(node.left);
      node.right && q.enque(node.right);
    }    
  }
  document.getElementById('root').textContent = result;
}

const seven = new tNode('D');
const six = new tNode('C');
const five = new tNode('B');
const four = new tNode('A');
const three = new tNode('/', six, seven);
const two = new tNode('*', four, five);
const one = new tNode('+', two, three);

levelOrder(one);

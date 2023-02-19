class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let a = new TreeNode(90);
let b = new TreeNode(69);
let c = new TreeNode(49);
let d = new TreeNode(89);
let e = new TreeNode(52);
a.left = b;
b.left = c;
b.right = d;
c.right = e;

/* 
      a
    /   \
    b
  /   \
  c    d
   \
    e
*/

function minDiffInBST(root: TreeNode | null): number {
  let min = Infinity;
  let prev = Infinity;

  function getMin(node: TreeNode | null) {
    if (node == null) {
      return;
    }
    console.log(node.val);
    getMin(node.left);
    min = Math.min(min, Math.abs(prev - node.val));
    console.log(Math.abs(prev - node.val), ": abs");
    console.log(min, prev);
    prev = node.val;
    getMin(node.right);
  }

  getMin(root);
  return min;
}

console.log(minDiffInBST(a));

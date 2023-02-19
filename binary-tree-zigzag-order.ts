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

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);

a.left = b;
a.right = c;
b.left = d;
c.right = e;
/* 
            a
          /   \
          b   c
        /      \
        d       e
*/

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  let res: number[][] = [];
  let alter: boolean = true;
  let stack: TreeNode[][] = [[root]];
  res.push([root.val]);

  while (stack.length > 0) {
    let newStack: TreeNode[] = [];
    let currLevel = stack.pop() as TreeNode[];
    let newRes: number[] = [];

    if (alter) {
      for (let node of currLevel) {
        if (node.right) {
          newStack.push(node.right);
          newRes.push(node.right.val);
        }
        if (node.left) {
          newStack.push(node.left);
          newRes.push(node.left.val);
        }
      }
    } else {
      for (let node of currLevel) {
        if (node.left) {
          newStack.push(node.left);
          newRes.push(node.left.val);
        }
        if (node.right) {
          newStack.push(node.right);
          newRes.push(node.right.val);
        }
      }
    }

    alter = !alter;
    if (newRes.length > 0) res.push(newRes.slice());
    if (newStack.length > 0) stack.push(newStack.reverse().slice());
  }
  return res;
}

console.log(zigzagLevelOrder(a))
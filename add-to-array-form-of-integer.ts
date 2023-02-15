function addToArrayForm(num: number[], k: number): number[] {
  const res: number[] = [];
  let k_arr = k
    .toString()
    .split("")
    .map((n) => parseInt(n));

  let index = -1;
  let carry = 0;

  while (
    Math.abs(index) <= num.length ||
    Math.abs(index) <= k_arr.length ||
    carry
  ) {
    let numi = num.at(index) === undefined ? 0 : num.at(index);
    let ki = k_arr.at(index) === undefined ? 0 : k_arr.at(index);
    let sum = numi! + ki! + carry;
    res.push(sum % 10);
    carry = Math.floor(sum / 10);
    index -= 1;
  }

  return res.reverse();
}

function addBetterWay(num: number[], k: number): number[] {
  const res: number[] = [];
  let index = num.length - 1;

  while (index >= 0 || k > 0) {
    if (index >= 0) k += num[index];

    res.push(k % 10);
    k = Math.floor(k / 10);
    index -= 1;
  }

  return res.reverse();
}

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addBetterWay([1, 2, 0, 0], 34));

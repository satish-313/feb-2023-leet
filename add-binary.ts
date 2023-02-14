function addBinary(a: string, b: string): string {
  let carry = 0;
  let result = new Array();
  let index = -1;

  while (Math.abs(index) <= a.length || Math.abs(index) <= b.length || carry) {
    let ai = a.at(index) === undefined ? 0 : parseInt(a.at(index)!);
    let bi = b.at(index) === undefined ? 0 : parseInt(b.at(index)!);
    let sum = ai + bi + carry;

    switch (sum) {
      case 0:
        result.push(0);
        carry = 0;
        break;
      case 1:
        result.push(1);
        carry = 0;
        break;
      case 2:
        result.push(0);
        carry = 1;
        break;
      case 3:
        result.push(1);
        carry = 1;
    }

    index -= 1;
  }

  return result.reverse().join("");
}

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("0", "0"));
console.log(addBinary("1111", "1111"));

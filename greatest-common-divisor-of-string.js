/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

function gcdOfString(str1, str2) {
  function gcd(a, b) {
    let result = Math.min(a, b);
    while (result > 0) {
      if (a % result == 0 && b % result == 0) {
        break;
      }
      result--;
    }
    return result;
  }
  return str1 + str2 === str2 + str1
    ? str1.slice(0, gcd(str1.length, str2.length))
    : "";
}

console.log(gcdOfString("ABCABC", "ABC"));
console.log(gcdOfString("ABABAB", "ABAB"));
console.log(gcdOfString("LEETS", "CODE"));

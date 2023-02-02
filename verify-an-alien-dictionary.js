/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

function isAlienSorted(words, order) {
  if (words.length === 1) return true;
  const keys = {};

  for (let i = 0; i < order.length; i++) {
    keys[order[i]] = i;
  }

  function islax(w1, w2) {
    for (let i = 0; i < w2.length; i++) {
      if (i < w1.length && w1[i] !== w2[i] && keys[w1[i]] < keys[w2[i]])
        return true;
      else if (i < w1.length && w1[i] !== w2[i] && keys[w1[i]] > keys[w2[i]])
        return false;
      else if (i < w1.length && w1[i] === w1[i]) continue;
    }

    return w1.length > w2.length ? false : true
  }

  for (let i = 0; i < words.length - 1; i++) {
    if(!islax(words[i], words[i + 1])) return false
  }

  return true;
}

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(
  isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
);
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));

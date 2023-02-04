function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const s1key = new Array(26).fill(0);
  const s2key = new Array(26).fill(0);
  let len = s1.length;

  for (let char of s1) {
    s1key[char.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < len; i++) {
    s2key[s2.charCodeAt(i) - 97]++;
  }

  function isPermutation(a1: number[], a2: number[]): boolean {
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) return false;
    }
    return true;
  }

  if (isPermutation(s1key, s2key)) return true;

  for (let i = len; i < s2.length; i++) {
    s2key[s2.charCodeAt(i) - 97]++;
    s2key[s2.charCodeAt(i - len) - 97]--;
    if (isPermutation(s1key, s2key)) return true;
  }

  return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("adc","dcda"))
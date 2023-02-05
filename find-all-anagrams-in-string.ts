function findAnagrams(s: string, p: string): number[] {
  const res: number[] = [];
  if (p.length > s.length) return res;

  const skey = new Array(26).fill(0);
  const pkey = new Array(26).fill(0);
  const plen = p.length;

  for (let i = 0; i < p.length; i++) {
    pkey[p.charCodeAt(i) - 97]++;
    skey[s.charCodeAt(i) - 97]++;
  }

  function isAnagram(a: number[], b: number[]): boolean {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  for (let i = plen; i <= s.length; i++) {
    if (isAnagram(pkey, skey)) res.push(i - plen);
    skey[s.charCodeAt(i) - 97]++;
    skey[s.charCodeAt(i - plen) - 97]--;
  }

  return res;
}

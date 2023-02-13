function countOdd(low: number, high: number): number {
  let res = 0;

  if (low % 2 === 0 && high % 2 === 0) res = Math.floor((high - low) / 2);
  else res = Math.floor((high - low) / 2) + 1;

  return res;
}

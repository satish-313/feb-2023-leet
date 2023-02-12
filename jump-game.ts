function canJump(nums: number[]): boolean {
  let n = nums.length;
  let maxJump = 0;
  let currJump = 0;

  if (n === 1) return true;
  if (nums[0] === 0) return false;

  for (let i = 0; i < n; i++) {
    currJump = Math.max(maxJump, i + nums[i]);

    if (nums[i] === 0 && i === maxJump) return false;
    if (currJump >= n - 1 || maxJump >= n - 1) return true;
    if (i > maxJump) return false;
    if (currJump > maxJump) maxJump = currJump;
  }
  return false;

  // let destination = nums.length-1;
    
  // for (let index=nums.length-1; index>= 0; index -= 1) {
  //     if ((index + nums[index]) >= destination) destination = index
  // }
  
  // return destination === 0
}

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));

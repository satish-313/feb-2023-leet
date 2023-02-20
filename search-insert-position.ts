function searchInsert(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  let mid: number = 0;

  if (nums[r] < target) return r + 1;
  if (nums[l] > target) return l;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) break;
    else if (nums[mid] < target && nums[mid + 1] > target) {
      mid += 1;
      break;
    } else if (nums[mid] > target) r = mid - 1;
    else if (nums[mid] < target) l = mid + 1;
  }

  return mid;
}
// let low = 0,
// high = nums.length - 1,
// mid: number;
// while (low <= high) {
// mid = Math.floor((high + low) / 2);
// if (nums[mid] === target) return mid;
// else if (target < nums[mid]) high = mid - 1;
// else if (target > nums[mid]) low = mid + 1;
// }
// return low;
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1, 3], 3));

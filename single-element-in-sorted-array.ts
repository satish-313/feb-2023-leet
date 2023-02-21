function singleNonDuplicate(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let l = 0;
  let r = nums.length - 1;
  let mid = 0;

  if (nums[r] !== nums[r - 1]) return nums[r];
  if (nums[l] !== nums[l + 1]) return nums[l];

  while (l <= r) {
    mid = Math.floor((l + r) / 2);

    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
      return nums[mid];

    if (
      (mid % 2 === 0 && nums[mid] !== nums[mid + 1]) ||
      (mid % 2 === 1 && nums[mid] === nums[mid + 1])
    )
      r = mid - 1;
    // else if (
    //   mid % 2 === 1 &&
    //   nums[mid] === nums[mid - 1] &&
    //   mid % 2 === 0 &&
    //   nums[mid] === nums[mid - 1]
    //   )
    //   l = mid + 1;
    else l = mid + 1;
  }

  return -1;
}

function singleNonDuplicate1(nums: number[]): number {
  let left = 0, right = nums.length - 1;
  let mid;

  while (left < right) {

      mid = Math.floor((right + left) / 2);
      if (mid % 2) mid -= 1;

      if (nums[mid] === nums[mid + 1]) {
          left = mid + 2;
      } else {
          right = mid;
      }
  }
  return nums[left];
};

console.log(singleNonDuplicate([1, 1, 3, 3, 4, 4, 5, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));

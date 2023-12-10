/*Given an array of integers, return the indices of the 2 numbers that add up to a given target*/
/*
Test Cases:
[1,3,7,9,2], 11
[1,2,3,5,6,7,9,9,10], 18
[1,3,7,9,2], 25
[], 25
[5], 25

Other questions: Can there be more than one pair which returns the target value - Interviewer may say no.
Can there be duplicate values in the array like [2,2]
What to return if there is no return value - return null
*/

function solution(nums, target) {
  // We will use a HashMap. Say the array nums is [1,3,7,9,2], target 11. We will have only 1 for loop. The first element is 1. We see
  // if 1 is already there in the hash map. No, so we find its complement with 11 which is 10 and we store 10 in the hash map.
  // Similarly 8:1, 4:2, 2:3, now 2 is already there in the Hashmap. Since we have stored the elements complement with 11, it means
  // that the sum of the current element and the index of the complement stored will become the target.

  if (nums.length == 0 || nums.length == 1) return null;
  let temp = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (temp.has(nums[i])) {
      return [temp.get(nums[i]), i];
    } else {
      let compliment = target - nums[i];
      temp.set(compliment, i);
    }
  }

  return null;
}

console.log(solution([1, 3, 7, 9, 2], 11));
console.log(solution([3, 2, 4], 6));
console.log(solution([1, 2, 3, 5, 6, 7, 9, 9, 10], 18));
console.log(solution([1, 3, 7, 9, 2], 25));
console.log(solution([], 25));
console.log(solution([25], 25));

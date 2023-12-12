/*
Given an array of integers representing an elevation map where the width of each bar is 1, retun how much rainwater can be trapped.

Step 1: We will have 2 pointers L and R and current ponter=L in extreme left and right.
Step 2: Initiate maxLeft and maxRight to 0.
Step 3: Continue the loop until L < R
    Step 4: If currentPointer(height) > maxLeft/maxRight depending on whether we moved the left or the right pointer, water in that position = maxLeft/maxRight - height.
    Step 5: If L<=R, L=L+1 else R=R-1 
*/

/*[0,1,0,2,1,0,3,1,0,1,2] - the water returned will be 8.
[] -> 0
[3] -> 0
[3,4,3] -> 0 
*/

function totalWater(arr) {
  let left = 0,
    right = arr.length - 1;
  let maxLeft = 0,
    maxRight = 0,
    waterSum = 0;

  while (left < right) {
    if (arr[left] < arr[right]) {
      if (arr[left] > maxLeft) {
        maxLeft = arr[left];
      } else {
        waterSum += maxLeft - arr[left];
      }
      left += 1;
    } else {
      if (arr[right] > maxRight) {
        maxRight = arr[right];
      } else {
        waterSum += maxRight - arr[right];
      }
      right -= 1;
    }
  }
  return waterSum;
}

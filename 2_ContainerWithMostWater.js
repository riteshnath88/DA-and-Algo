/*
You are given an array of positive integers where each integer represents the height of a vertical line on
a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount
of water. Return the area of water it will hold.
*/

function containerWithMostWater(arr) {
  let left = 0,
    right = arr.length - 1,
    tempArea = 0,
    maxArea = 0;
  while (left < right) {
    tempArea = Math.min(arr[left], arr[right]) * (right - left);
    if (tempArea > maxArea) {
      maxArea = tempArea;
    }

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

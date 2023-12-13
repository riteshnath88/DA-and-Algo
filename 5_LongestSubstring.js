/*
Given a string, find the length of the longest substring without repeating characters.
E.g.: abccabb

1. Have 2 pointers left and right.
2. Create a map which stores the value of character visited and its index position
3. If the value at pointer right is not present in the map curlength = right - left. If curlength > max length
replace maxlength with curlength
4. If the value at pointer right is present in the map and its index position is less than the left pointer, 
means it is not part of current substring. So curLen = right - left and replace maxLength it needed. Update the
index value of the character to current right pointer.
5. If the value at pointer right is present in the map and its index position is greater than the left pointer,
move the left pointer to key value + 1 and update the key value to current right pointer.
*/

function longestSubstring(S) {
  let left = 0,
    right = 0,
    curLen = 0,
    maxLen = 0;
  let map = new Map();
  while (right < S.length) {
    //console.log(left, right);
    if (!map.has(S[right])) {
      curLen = right - left + 1;
      if (curLen > maxLen) {
        maxLen = curLen;
      }
      map.set(S[right], right);
    } else if (map.has(S[right]) && map.get(S[right]) < left) {
      curLen = right - left + 1;
      if (curLen > maxLen) {
        maxLen = curLen;
      }
      map.set(S[right], right);
    } else {
      left = map.get(S[right]) + 1;
      map.set(S[right], right);
      curLen = right - left + 1;
      if (curLen > maxLen) {
        maxLen = curLen;
      }
    }
    //console.log(left, right, map, curLen, maxLen);
    right++;
  }
  return maxLen;
}

console.log(longestSubstring("abccabb"));
console.log(longestSubstring("cccccccc"));
console.log(longestSubstring("abcdba"));
console.log(longestSubstring("aabcde"));
console.log(longestSubstring("aabbccdde"));

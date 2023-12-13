/*Given a string, determine if it is almost a palindrome. A string is almost a palindrome if it becomes 
a palindrome by removing 1 letter. Consider only alphanumeric characters and ignore case sensitivity.
aceaca - True
abccdba - True
abcdefdba - False
"" - True
a - True
ab - True

We will remove only white spaces and retain special characters and case sensitivity.
*/

function palindrome(S) {
  let L = 0,
    R = S.length - 1;
  while (L <= R) {
    if (S[L] != S[R]) {
      return false;
    }
    L += 1;
    R -= 1;
  }
  return true;
}

function almostAPalindrome(S) {
  let updatedStr = S.replace(/\s/g, "");
  let L = 0,
    R = updatedStr.length - 1;

  while (L <= R) {
    if (updatedStr[L] != updatedStr[R]) {
      let leftPalTrue = palindrome(updatedStr.slice(L + 1, R + 1));
      let rightPalTrue = palindrome(updatedStr.slice(L, R));

      return leftPalTrue || rightPalTrue;
    }
    L += 1;
    R -= 1;
  }
  return true;
}

console.log(almostAPalindrome("aa"));
console.log(almostAPalindrome(""));
console.log(almostAPalindrome("aaa"));
console.log(almostAPalindrome("abccba"));
console.log(almostAPalindrome("ab   cba"));
console.log(almostAPalindrome("abd cba"));
console.log(almostAPalindrome("A man, a plan, a canal: Panama"));

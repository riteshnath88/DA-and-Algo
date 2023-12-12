/*Given 2 strings S and T, return if they are equal when both are typed out.
Any # that appears in the string counts as a backspace*/

function typedOutString(S, T) {
  let arr1 = [],
    arr2 = [],
    str1 = "",
    str2 = "";
  for (let i = 0; i < S.length; i++) {
    if (S[i] != "#") {
      arr1.push(S[i]);
    } else {
      arr1.pop();
    }
  }
  str1 = arr1.join("");

  for (let i = 0; i < T.length; i++) {
    if (T[i] != "#") {
      arr2.push(T[i]);
    } else {
      arr2.pop();
    }
  }
  str2 = arr2.join("");

  if (str1 == str2) return true;
  else return false;
}

console.log(typedOutString("ab#d", "ac#d"));
console.log(typedOutString("ab###", "ac##"));
console.log(typedOutString("ab###e", "ac##f"));
console.log(typedOutString("ab###f", "ac##f"));

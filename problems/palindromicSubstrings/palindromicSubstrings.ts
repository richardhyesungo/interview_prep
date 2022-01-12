const palindromeCounter = (s: string, left: number, right: number): number => {
  let count = 0;

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    // palindromes.push(s.substring(left, right + 1));
    count += 1;
    left -= 1;
    right += 1;
  }
  return count;
};

function countSubstrings(s: string): number {
  // palindrome tracker
  // let palindromes: string[] = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // while odd
    count += palindromeCounter(s, i, i);

    // while even
    count += palindromeCounter(s, i, i + 1);
  }

  // return palindromes.length;
  return count;
}

/*

inputs: string s
outputs: number of palindromic substrings in the string
constraints:
edge cases:

can have repeat palindromes

could do the same as the other palindrome ones
except this time count every character as a palindrome


keep track of palindrome

iterate through string


while odd palindrome



while even palindrome





*/

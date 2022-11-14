/* Stacks! */

// functions: push, pop, peek, length
// in JavaScript alread has all the functions we need in order to use it as a stack so you colud just use an array as a stack
const isPalindrome = function (word: string) {
  const letters: string[] = [] // this is our stack

  let rword = ""

  // put letters of word into stack
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i])
  }

  // pop off the stack in reverse order
  for (let i = 0; i < word.length; i++) {
    rword += letters.pop()
  }

  if (rword === word) {
    return word + " is a palindrome."
  } else {
    return word + " is not a palindrome."
  }
}
export { isPalindrome }
// Code to test the implementation.
// console.log(isPalindrome("racecar"))

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
// Code to test the implementation.
// console.log(isPalindrome("racecar"))

// create stack class and show how that works
// Creates a stack
const Stack = function <T>() {
  this.count = 0
  this.storage = {}

  // Adds a value onto the end of the stack
  this.push = function (value: T) {
    this.storage[this.count] = value
    this.count++
    return true
  }

  // Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined
    }

    this.count--
    var result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  this.size = function () {
    return this.count
  }

  // Returns the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1]
  }
}
// export functions
export { Stack, isPalindrome }

// Code to test the implementation.
// var myStack = new Stack()
// myStack.push(1)
// myStack.push(2)
// console.log(myStack.peek())
// console.log(myStack.pop())
// console.log(myStack.peek())
// myStack.push("freeCodeCamp")
// console.log(myStack.size())
// console.log(myStack.peek())
// console.log(myStack.pop())
// console.log(myStack.peek())

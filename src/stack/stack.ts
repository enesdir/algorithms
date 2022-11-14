/* Stacks! */

// Stack This interface
interface IStack<T> {
  count: number
  storage: object
  push: (value: T) => boolean
  size: () => number
  isEmpty: () => boolean
  exceptEmpty: () => any
  reverseString: (word: string) => string
  pop: () => any
  peek: () => T
}
// create stack class and show how that works
// Creates a stack
const Stack = function <T>(this: IStack<T>) {
  this.count = 0
  this.storage = {}

  /**
   * check if the stack is empty or not
   * @returns boolean
   */
  this.isEmpty = () => {
    return this.count === 0
  }

  /**
   * throw an except if pop() or peek() called for an empty stack.
   */
  this.exceptEmpty = () => {
    if (this.isEmpty()) {
      throw new Error("can not pop from empty stack")
    }
  }
  /**
   * method for adding an element to the stack.
   * @param {T} value value of the node the want to enter
   */
  this.push = function (value: T) {
    this.storage[this.count] = value
    this.count++
    return true
  }

  /**
   * method for removing element elements from the stack.
   * @returns the last element entered the stack.
   */
  this.pop = () => {
    try {
      this.exceptEmpty()
      this.count--
      var result = this.storage[this.count]
      delete this.storage[this.count]
      return result
    } catch (error) {
      console.log(error)
    }
  }
  /**
   * method show the stack size
   * @returns the stack size
   */
  this.size = () => {
    return this.count
  }

  /**
   * method show the element would be removed next but does not actually remove it.
   * @returns the last element entered the stack.
   */
  this.peek = () => {
    try {
      this.exceptEmpty()
      return this.storage[this.count - 1]
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * method show the word would be reverse.
   * @param {string} string value
   * @returns reversed input
   */
  this.reverseString = function (word) {
    for (let i = 0; i < word.length; i++) {
      this.push(word[i])
    }
    let rword = ""
    for (let i = 0; i < word.length; i++) {
      rword += Object.values(this.storage).reverse()[i]
    }
    return rword
  }
}

// export functions
export { Stack }

// Code to test the implementation.
// var myStack = new Stack<number | string>()
// console.log(myStack.push(1))
// console.log(myStack.push(2))
// console.log(myStack.pop())
// console.log(myStack.peek())
// console.log(myStack.size())
// myStack.push("freeCodeCamp")
// console.log(myStack.size())
// console.log(myStack.peek())
// console.log(myStack.pop())
// console.log(myStack.peek())
// var otherStack = new Stack<string>()
// console.log(otherStack.reverseString("reverseString"))
// console.log(otherStack.peek())
// console.log(otherStack.size())

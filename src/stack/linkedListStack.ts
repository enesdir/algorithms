// Stack This interface
interface IStack<T> {
  count: number
  storage: object
  top: object
  push: (value: T) => boolean
  size: () => number
  isEmpty: () => boolean
  exceptEmpty: () => any
  reverseString: (word: string) => string
  pop: () => any
  peek: () => T
}

const Stack = function <T>(this: IStack<T>) {
  this.storage = {}
  this.count = 0
  this.top = {}
  const Node = function (element: T) {
    this.data = element
    this.next = null
  }
  /**
   * method for adding an element to the stack.
   * @param {any} value value of the node the want to enter
   */
  this.push = function (value: T) {
    this.top = new Node(value)
    this.storage[this.count] = this.top
    this.count++
    return true
  }
  /**
   * method for removing element elements from the stack.
   * @returns the last element entered the stack.
   */
  this.pop = function () {
    try {
      this.exceptEmpty()
      let top = this.top
      delete this.storage[this.count - 1]
      this.count--
      this.top = this.storage[this.count - 1]
      return top
    } catch (error) {
      console.log(error)
    }
  }
  /**
   * method show the element would be removed next but does not actually remove it.
   * @returns the last element entered the stack.
   */
  this.peek = function () {
    try {
      this.exceptEmpty()
      return this.top
    } catch (error) {
      console.log(error)
    }
  }
  /**
   * check if the stack is empty or not
   * @returns boolean
   */
  this.isEmpty = function () {
    return this.count === 0
  }
  /**
   * method show the stack size
   * @returns the stack size
   */
  this.size = () => {
    return this.count
  }
  /**
   * throw an except if pop() or peek() called for an empty stack.
   */
  this.exceptEmpty = function () {
    if (this.isEmpty()) {
      throw new Error("can not pop from empty stack")
    }
  }
}

export { Stack }
// const tempList = new Stack<string>()
// console.log(tempList.push("Hello"))
// console.log(tempList.isEmpty())
// console.log(tempList.peek().data)

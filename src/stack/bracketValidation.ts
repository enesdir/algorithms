import { Stack } from "./linkedListStack"

interface IBracketValidation {
  stack: typeof Stack
  opening: string[]
  closing: string[]
  checkForValidation: (input: string) => boolean
  isOpening: (input: string) => boolean
  isClosing: (input: string) => boolean
  isPair: (x: string, y: string) => boolean
}

const BracketValidation = function (this: IBracketValidation) {
  this.stack = new Stack<string>()
  this.opening = ["{", "(", "[", "<"]
  this.closing = ["}", ")", "]", ">"]

  /**
   * this method checks if the paranthesis inside the string are balanced or not
   * @param {string} input string with paranthesis of type:any
   * @returns boolean true:balance paranthesis, false: non-balance paranthesis
   */
  this.checkForValidation = function (input: string) {
    for (const char of input) {
      if (this.isOpening(char)) {
        this.stack.push(char)
      } else if (this.isClosing(char)) {
        if (
          this.stack.isEmpty() ||
          !this.isPair(this.stack.peek().data, char)
        ) {
          return false
        } else {
          this.stack.pop()
        }
      }
    }
    return this.stack.isEmpty()
  }
  /**
   * checks if the character-sympol is an opening paranthessis
   * @param {string} char char of a string
   * @returns boolean true: opening paranthesis, false: non-opening paranthesis
   */
  this.isOpening = function (char: string) {
    return this.opening.indexOf(char) >= 0
  }
  /**
   * checks if the character-sympol is a closing paranthessis
   * @param {string} char char of a string
   * @returns boolean true: closing paranthesis, false: non-closing paranthesis
   */
  this.isClosing = function (char: string) {
    return this.closing.indexOf(char) >= 0
  }
  /**
   * checks if the top of the stack pairs with the closing tag found in the string
   * @param {string} opening paranthesis from the top of the stack
   * @param {string} closing paranthesis
   * @returns boolean true: opening, closing are pairs.
   */
  this.isPair = function (opening, closing) {
    return this.closing.indexOf(closing) === this.opening.indexOf(opening)
  }
}

export { BracketValidation }

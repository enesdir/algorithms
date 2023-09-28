//
class StackNode {
  data: string
  next: StackNode | null

  constructor(data: string) {
    this.data = data
    this.next = null
  }
}

class Stack {
  top: StackNode | null

  constructor() {
    this.top = null
  }

  isEmpty(): boolean {
    return this.top === null
  }

  push(data: string): void {
    const newNode = new StackNode(data)
    newNode.next = this.top
    this.top = newNode
  }

  pop(): string | null {
    if (this.isEmpty()) {
      console.log("Stack underflow!")
      return null
    }

    const data = this.top!.data
    this.top = this.top!.next
    return data
  }
}

function isOperator(ch: string): boolean {
  return ["+", "-", "*", "/"].includes(ch)
}

function precedence(ch: string): number {
  switch (ch) {
    case "+":
    case "-":
      return 1
    case "*":
    case "/":
      return 2
    default:
      return 0
  }
}

function infixToPostfix(infix: string): string {
  const stack = new Stack()
  let postfix = ""

  for (let i = 0; i < infix.length; i++) {
    const token = infix[i]

    if (/[a-zA-Z0-9]/.test(token)) {
      postfix += token
    } else if (token === "(") {
      stack.push(token)
    } else if (token === ")") {
      while (!stack.isEmpty() && stack.top!.data !== "(") {
        postfix += stack.pop()!
      }
      if (!stack.isEmpty() && stack.top!.data === "(") {
        stack.pop()
      } else {
        throw new Error("Mismatched parentheses!") // Throw an error here
      }
    } else if (isOperator(token)) {
      while (
        !stack.isEmpty() &&
        precedence(token) <= precedence(stack.top!.data)
      ) {
        postfix += stack.pop()!
      }
      stack.push(token)
    }
  }

  while (!stack.isEmpty()) {
    if (stack.top!.data === "(" || stack.top!.data === ")") {
      throw new Error("Mismatched parentheses!") // Throw an error here
    }
    postfix += stack.pop()!
  }

  return postfix
}

//
export { infixToPostfix }

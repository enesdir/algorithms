import { infixToPostfix } from "./infixtoPostfix" // Replace with the actual file name

// Test Infix to Postfix
describe("infixToPostfix", () => {
  it("should convert infix expression to postfix", () => {
    expect(infixToPostfix("3 + 4 * (2 - 1)")).toBe("3421-*+")
    expect(infixToPostfix("(A + B) * C")).toBe("AB+C*")
    // Add more test cases as needed
  })

  it("should handle mismatched parentheses", () => {
    expect(() => infixToPostfix("((A + B) * C")).toThrow(
      "Mismatched parentheses!"
    )
    expect(() => infixToPostfix(")A + B(")).toThrow("Mismatched parentheses!")
  })
})

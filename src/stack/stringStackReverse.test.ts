import { isPalindrome } from "./stringStackReverse"

describe("check if word is palindrome", () => {
  it("should sucessfully return `{word} is a palindrome` for palindrome word", () => {
    //act
    let expression = isPalindrome("racecar")
    expect(expression).toEqual("racecar is a palindrome.")
  })
  it("should sucessfully return `{word} is not a palindrome` for not palindrome word", () => {
    //act
    let expression = isPalindrome("codenuru")
    expect(expression).toEqual("codenuru is not a palindrome.")
  })
})

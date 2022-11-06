import { Stack, isPalindrome } from "./stack"

test("basic", () => {
  expect(isPalindrome("racecar")).toEqual("racecar is a palindrome.")
  expect(isPalindrome("codenuru")).toEqual("codenuru is not a palindrome.")
  var tempList = new Stack<number>()
  expect(tempList.push(1)).toBe(true)
  expect(tempList.push(2)).toBe(true)
  expect(tempList.peek()).toBe(2)
  expect(tempList.pop()).toBe(2)
  expect(tempList.peek()).toBe(1)
  expect(tempList.push(4)).toBe(true)
  expect(tempList.size()).toBe(2)
  expect(tempList.peek()).toBe(4)
  expect(tempList.pop()).toBe(4)
  expect(tempList.peek()).toStrictEqual(1)
})

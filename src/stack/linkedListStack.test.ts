import { Stack } from "./linkedListStack"

// test linked liststack
describe("stack using linked list", () => {
  var tempList = new Stack<string>()
  it("error", () => {
    expect(() => {
      tempList.exceptEmpty()
    }).toThrow("can not pop from empty stack")
  })
  it("look at the first available index and add the element there", () => {
    expect(tempList.push("Hello")).toBe(true)
    expect(tempList.push("World")).toBe(true)
  })
  it("should shows which element would be removed next, but does not actually remove it.", () => {
    // act
    let expression = tempList.peek()
    // assert
    expect(expression.data).toStrictEqual("World")
  })
  it("should check stack is non empty return false.", () => {
    // act
    let expression = tempList.isEmpty()
    // assert
    expect(expression).toBe(false)
  })
  it("should remove from the top of the stack.", () => {
    // act
    let expression = tempList.pop()
    //assert
    expect(expression.data).toStrictEqual("World")
  })
})

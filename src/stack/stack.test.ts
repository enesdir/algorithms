import { Stack } from "./stack"

// test stack
describe("stack", () => {
  var tempList = new Stack<number>()
  it("look at the first available index and add the element there", () => {
    expect(tempList.push(1)).toBe(true)
    expect(tempList.push(2)).toBe(true)
  })
  it("should shows which element would be removed next, but does not actually remove it.", () => {
    // act
    let expression = tempList.peek()
    // assert
    expect(expression).toStrictEqual(2)
  })
  it("should remove from the top of the stack.", () => {
    // act
    let expression = tempList.pop()
    //assert
    expect(expression).toStrictEqual(2)
  })
  it("should shows which element would be removed next, but does not actually remove it.", () => {
    // act
    let expression = tempList.peek()
    // assert
    expect(expression).toStrictEqual(1)
  })
  it("look at the first available index and add the element there", () => {
    expect(tempList.push(4)).toBe(true)
  })
  it("should properly show size of the stack", () => {
    // act
    let expression = tempList.size()
    // assert
    expect(expression).toBe(2)
  })

  it("should shows which element would be removed next, but does not actually remove it.", () => {
    // act
    let expression = tempList.peek()
    // assert
    expect(expression).toStrictEqual(4)
  })
  it("should remove from the top of the stack.", () => {
    // act
    let expression = tempList.pop()
    //assert
    expect(expression).toStrictEqual(4)
  })

  it("should shows which element would be removed next, but does not actually remove it.", () => {
    // act
    let expression = tempList.peek()
    // assert
    expect(expression).toStrictEqual(1)
  })
})

// test application
describe("reverse string using stack", () => {
  // arrange
  var stringList = new Stack<string>()
  it("should sucessfully return reversed string", () => {
    let expression = stringList.reverseString("reverseString")
    expect(expression).toEqual("gnirtSesrever")
  })
  it("should shows which element would be removed next, but does not actually remove it.", () => {
    // act
    let expression = stringList.peek()
    // assert
    expect(expression).toEqual("g")
  })
  it("should properly show size of the stack", () => {
    // act
    let expression = stringList.size()
    // assert
    expect(expression).toBe(13)
  })
})

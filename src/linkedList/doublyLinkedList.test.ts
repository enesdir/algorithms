import { DoublyLinkedList } from "./doublyLinkedList"

describe("Doubly Linked List", () => {
  //arrange
  var tempList = new DoublyLinkedList<number>()

  it("should properly create a new head even if head is exist", () => {
    // act
    expect(tempList.addStart(1)).toBe(true)
    expect(tempList.addStart(0)).toBe(true)
    // assert
    expect(tempList.head().data).toBe(0)
    expect(tempList.head().next.data).toBe(1)
  })
  it("should properly show head", () => {
    // act
    let expression = tempList.head()
    // assert
    expect(expression).toBeTruthy()
  })
  it("should check list is non empty return false.", () => {
    // act
    let expression = tempList.isEmpty()
    // assert
    expect(expression).toBe(false)
  })
  it("should properly insert into the tail of doubly linked list", () => {
    // act
    let expression = tempList.addAtTail(5)
    // assert
    expect(expression).toBe(true)
  })
  it("should properly remove at the end of doubly linked list", () => {
    // act
    let expression = tempList.removeAtEnd()
    // assert
    expect(expression).toBe(5)
  })
  it("should properly insert into the end of doubly linked list", () => {
    // act
    let expression = tempList.addAtEnd(9)
    // assert
    expect(expression).toBe(true)
  })
  it("should properly insert into the specified position of doubly linked list", () => {
    // act
    let expression = tempList.addAtPosition(3, 4)
    // assert
    expect(expression).toBe(true)
  })
  it("should properly insert into the tail of doubly linked list", () => {
    // act
    let expression = tempList.addAtTail(5)
    // assert
    expect(expression).toBe(true)
  })
  it("should properly remove at the beginning of doubly linked list", () => {
    // act
    let expression = tempList.removeAtStart()
    // assert
    expect(expression).toBe(true)
  })
  it("should properly show size of the doubly linked list", () => {
    // act
    let expression = tempList.size()
    // assert
    expect(expression).toBe(4)
  })
  it("should properly return a collection of all the values that exist in the doubly linked list", () => {
    // act
    let expression = tempList.print()
    // assert
    expect(expression).toStrictEqual([1, 9, 4, 5])
  })
})

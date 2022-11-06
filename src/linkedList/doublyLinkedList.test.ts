import { DoublyLinkedList } from "./doublyLinkedList"

test("basic", () => {
  var tempList = new DoublyLinkedList<number>()
  expect(tempList.addStart(1)).toBe(true)
  expect(tempList.addStart(0)).toBe(true)
  expect(tempList.addAtTail(5)).toBe(true)
  expect(tempList.removeAtEnd()).toBe(5)
  expect(tempList.addAtEnd(9)).toBe(true)
  expect(tempList.addAtPosition(3, 4)).toBe(true)
  expect(tempList.addAtTail(5)).toBe(true)
  expect(tempList.removeAtStart()).toBe(true)
  expect(tempList.size()).toBe(4)
  expect(tempList.print()).toStrictEqual([1, 9, 4, 5])
})

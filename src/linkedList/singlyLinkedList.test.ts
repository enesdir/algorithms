import { SinglyLinkedList } from "./singlyLinkedList"

test("basic", () => {
  var tempList = new SinglyLinkedList()
  tempList.add("Kitten")
  tempList.add("Puppy")
  tempList.add("Dog")
  tempList.add("Cat")
  tempList.add("Fish")
  expect(tempList.size()).toBe(5)
  expect(tempList.removeAt(3)).toBe("Cat")
  expect(tempList.elementAt(3)).toBe("Fish")
  expect(tempList.indexOf("Puppy")).toBe(1)
  expect(tempList.size()).toBe(4)
})

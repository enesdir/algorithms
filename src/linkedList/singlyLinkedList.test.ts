import { SinglyLinkedList } from "./singlyLinkedList"

describe("Singly Linked List", () => {
  var tempList = new SinglyLinkedList<string>()
  it("should successfully return list", () => {
    expect(tempList.head()).toBe(null)
  })
  it("should successfully return list length for added data", () => {
    expect(tempList.add("Kitten")).toBe(1)
    expect(tempList.add("Puppy")).toBe(2)
    expect(tempList.add("Dog")).toBe(3)
    expect(tempList.add("Cat")).toBe(4)
    expect(tempList.add("Fish")).toBe(5)
  })
  it("should successfully return list length for linked list", () => {
    expect(tempList.size()).toBe(5)
  })
  it("should check list is non empty return false.", () => {
    // act
    let expression = tempList.isEmpty()
    // assert
    expect(expression).toBe(false)
  })
  it("should successfully return remove item for deleted using by index number", () => {
    expect(tempList.removeAt(3)).toBe("Cat")
  })
  it("should successfully return index numbered item's data", () => {
    expect(tempList.elementAt(3)).toBe("Fish")
  })
  it("should successfully return index number for searched data on the linked list", () => {
    expect(tempList.indexOf("Puppy")).toBe(1)
  })
  it("should successfully return removed item", () => {
    expect(tempList.remove("Puppy")).toBe("Puppy")
  })
  it("should successfully return list length for linked list", () => {
    expect(tempList.size()).toBe(3)
  })
  it("should successfully return true for non empty list", () => {
    expect(tempList.isEmpty()).toBe(false)
  })
  it("should successfully return list length for added data specified with index number", () => {
    expect(tempList.addAt(2, "Bear")).toBe(4)
  })
})

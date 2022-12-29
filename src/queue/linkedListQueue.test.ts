import { LinkedListQueue } from "./linkedListQueue"

describe("Linked List Queue", () => {
  var myLLQueue = new LinkedListQueue<number>()
  it("should successfully add element", () => {
    expect(myLLQueue.enqueue(10)).toBe(true)
    expect(myLLQueue.enqueue(20)).toBe(true)
    expect(myLLQueue.enqueue(30)).toBe(true)
  })
  it("should successfully return removed item", () => {
    expect(myLLQueue.dequeue()).toBe(true)
  })
})

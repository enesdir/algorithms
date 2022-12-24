import { Queue } from "./arrayQueue"

// Test Queue
describe("Queue", () => {
  var tempList = new Queue<number>()
  it("can successfully enqueue into a queue", () => {
    expect(tempList.enqueue(1)).toBe(true)
    expect(tempList.enqueue(2)).toBe(true)
  })
  it("can successfully dequeue out of a queue the expected value", () => {
    expect(tempList.dequeue()).toStrictEqual(1)
  })
  it("should properly show size of the queue", () => {
    // act
    let expression = tempList.size()
    // assert
    expect(expression).toStrictEqual(1)
  })
})

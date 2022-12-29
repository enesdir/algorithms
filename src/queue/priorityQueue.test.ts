import { PriorityQueue } from "./priorityQueue"

describe("Priority Queue", () => {
  var myPQ = new PriorityQueue<string>()
  it("should successfully add element", () => {
    expect(myPQ.enqueue(["Turbocharger", 2])).toBe(true)
    expect(myPQ.enqueue(["Compressor", 3])).toBe(true)
    expect(myPQ.enqueue(["Gear Box", 1])).toBe(true)
    expect(myPQ.enqueue(["Battery", 2])).toBe(true)
  })
  it("should successfully return removed item", () => {
    expect(myPQ.dequeue()).toBe("Gear Box")
  })
  it("should successfully return front data on the queue", () => {
    expect(myPQ.front()).toStrictEqual(["Turbocharger", 2])
  })
  it("should successfully return list length for Queue", () => {
    expect(myPQ.size()).toBe(3)
  })
  it("should successfully return true for non empty queue", () => {
    expect(myPQ.isEmpty()).toBe(false)
  })
})

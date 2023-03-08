/**
 * First In First Out (FIFO)
 * with time complexity of O(1) for key operations
 */
interface IQueue<T> {
  enqueue: (value: T) => boolean
  dequeue: () => T | undefined
  size: () => number
  // isEmpty: () => boolean
  reverseString: (word: string) => string
}

const Queue = function <T>(this: IQueue<T>) {
  const data: { [index: number]: T } = Object.create(null)
  let nextEnqueueIndex = 0
  let lastDequeuedIndex = 0

  /** Enqueues the item in O(1) */
  this.enqueue = function (item: T): boolean {
    data[nextEnqueueIndex] = item
    nextEnqueueIndex++
    return true
  }

  /**
   * Dequeues the first inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  this.dequeue = function (): T | undefined {
    if (lastDequeuedIndex !== nextEnqueueIndex) {
      const dequeued = data[lastDequeuedIndex]
      delete data[lastDequeuedIndex]
      lastDequeuedIndex++
      return dequeued
    }
  }

  /**
   * Returns the number of elements in the queue
   */
  this.size = function (): number {
    return nextEnqueueIndex - lastDequeuedIndex
  }
}

// Export functions
export { Queue }

// Code to test the implementation.
// const myQueue = new Queue<number>()

// console.log(myQueue.enqueue(1))
// console.log(myQueue.enqueue(2))
// console.log(myQueue.size())
// console.log(myQueue.dequeue(1))
// console.log(myQueue.size())

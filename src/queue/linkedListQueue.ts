/* JavaScript program for linked-list implementation of queue */

// Node this interface
interface INode<T> {
  data: T
  next: INode<T> | null
}
interface ILinkedListQueue<T> {
  // size: () => number
  front: () => INode<T> | null
  rear: () => INode<T> | null
  enqueue: (x: T) => boolean
  dequeue: () => boolean
  // isEmpty: () => boolean
}
function LinkedListQueue<T>(this: ILinkedListQueue<T>) {
  let front: INode<T> | null = null
  let rear: INode<T> | null = null
  this.front = function () {
    return front
  }
  this.rear = function () {
    return rear
  }
  const Node = function (this: INode<T>, data: T) {
    this.data = data
    this.next = null
  }
  this.enqueue = function (element: T) {
    // Create a new LL node
    let temp = new Node(element)
    // If queue is empty, then new node is front and rear both
    if (rear == null) {
      front = rear = temp
      return true
    }
    // Add the new node at the end of queue and change rear
    rear.next = temp
    rear = temp
    return true
  }
  this.dequeue = function () {
    // If queue is empty, return NULL.
    if (front == null) return false // Store previous front and move front one node ahead
    let temp = front
    front = front.next // If front becomes NULL, then change rear also as NULL
    if (front == null) rear = null
    return true
  }
}

// Export functions
export { LinkedListQueue }

// Code to test the implementation.
// const myLLQueue = new LinkedListQueue<number>()
// console.log(myLLQueue.enqueue(10))
// console.log(myLLQueue.enqueue(20))
// console.log(myLLQueue.enqueue(30))
// console.log(myLLQueue.dequeue())
// console.log(myLLQueue.front())

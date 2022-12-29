/* Queues */
interface IPriorityQueue<T> {
  printCollection: () => void
  enqueue: (element: [T: T, x: number]) => void
  dequeue: () => void
  front: () => T
  size: () => number
  isEmpty: () => boolean
}
function PriorityQueue<T>(this: IPriorityQueue<T>) {
  var collection = []
  this.printCollection = function () {
    console.log(collection)
  }
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      var added = false
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          //checking priorities
          collection.splice(i, 0, element)
          added = true
          break
        }
      }
      if (!added) {
        collection.push(element)
      }
    }
    return true
  }
  this.dequeue = function () {
    var value = collection.shift()
    return value[0]
  }
  this.front = function () {
    return collection[0]
  }
  this.size = function () {
    return collection.length
  }
  this.isEmpty = function () {
    return collection.length === 0
  }
}
export { PriorityQueue }

// Code to test the implementation.
// var myPQ = new PriorityQueue()
// console.log(myPQ.enqueue(["Turbocharger", 2]))
// myPQ.enqueue(["Compressor", 3])
// myPQ.enqueue(["Gear Box", 1])
// myPQ.enqueue(["Battery", 2])
// myPQ.printCollection()
// console.log(myPQ.dequeue())
// console.log(myPQ.front())
// console.log(myPQ.size())
// console.log(myPQ.isEmpty())
// myPQ.printCollection()

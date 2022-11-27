/* LinkedList */

// Node this interface
interface INode<T> {
  data: T
  next: INode<T> | null
}
interface ISinglyLinkedList<T> {
  size: () => number
  head: () => INode<T> | null
  add: (x: T) => number
  remove: (x: T) => T
  isEmpty: () => boolean
  indexOf: (x: T) => number
  elementAt: (x: number) => T
  addAt: (y: number, x: T) => number | boolean
  removeAt: (x: number) => T
}

export function SinglyLinkedList<T>(this: ISinglyLinkedList<T>) {
  let length: number = 0
  let head: INode<T> | null = null

  const Node = function (this: INode<T>, data: T) {
    this.data = data
    this.next = null
  }

  this.size = function () {
    return length
  }

  this.head = function () {
    return head
  }

  this.add = function (data: T) {
    let node = new Node(data)
    if (head === null) {
      head = node
    } else {
      var currentNode = head

      while (currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = node
    }

    length++
    return length
  }

  this.remove = function (data: T) {
    let currentNode = head
    let previousNode
    if (currentNode.data === data) {
      head = currentNode.next
    } else {
      while (currentNode.data !== data) {
        previousNode = currentNode
        currentNode = currentNode.next
      }

      previousNode.next = currentNode.next
    }
    length--
    return currentNode.data
  }

  this.isEmpty = function () {
    return length === 0
  }

  this.indexOf = function (data: T) {
    let currentNode = head
    let index = -1

    while (currentNode) {
      index++
      if (currentNode.data === data) {
        return index
      }
      currentNode = currentNode.next
    }

    return -1
  }

  this.elementAt = function (index: number) {
    let currentNode = head
    let count = 0
    while (count < index) {
      count++
      currentNode = currentNode.next
    }
    return currentNode.data
  }

  this.addAt = function (index: number, data: T) {
    let node = new Node(data)

    let currentNode = head
    let previousNode
    let currentIndex = 0

    if (index > length) {
      return false
    }

    if (index === 0) {
      node.next = currentNode
      head = node
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      node.next = currentNode
      previousNode.next = node
    }
    length++
    return length
  }

  this.removeAt = function (index: number) {
    let currentNode = head
    let previousNode
    let currentIndex = 0
    if (index < 0 || index >= length) {
      return null
    }
    if (index === 0) {
      head = currentNode.next
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }
    length--
    return currentNode.data
  }
}

// var tempList = new SinglyLinkedList<string>()
// console.log(tempList.head())
// tempList.add("Kitten")
// console.log(tempList.head())
// tempList.add("Puppy")
// tempList.add("Dog")
// tempList.add("Cat")
// tempList.add("Fish")
// console.log(tempList.size())
// console.log(tempList.removeAt(3))
// console.log(tempList.elementAt(3))
// console.log(tempList.indexOf("Puppy"))
// console.log(tempList.remove("Puppy"))
// console.log(tempList.size())
// console.log(tempList.head())
// console.log(tempList.addAt(2, "Bear"))
// console.log(tempList.size())

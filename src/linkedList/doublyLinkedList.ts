export interface DoublyLinkedListNode<T> {
  data: T
  next: DoublyLinkedListNode<T> | null
  prev: DoublyLinkedListNode<T> | null
}

export function DoublyLinkedList<T>() {
  let length = 0
  let head: DoublyLinkedListNode<T> | null = null

  // https://github.com/Microsoft/TypeScript/wiki/'this'-in-TypeScript#specify-type-of-this-in-function-signature
  const Node = function (this: DoublyLinkedListNode<T>, element: T) {
    this.data = element
    this.next = null
    this.prev = null
  }

  function isEmpty(): boolean {
    return head === null
  }

  this.size = function () {
    return length
  }

  this.head = function () {
    return head
  }

  this.addStart = function (element: T) {
    var newNode = new Node(element)
    if (isEmpty()) {
      head = newNode
    } else {
      head.prev = newNode
      newNode.next = head
      head = newNode
    }
    length++
    return true
  }

  this.addAtTail = function (element: T): boolean {
    var newNode = new Node(element)

    if (isEmpty()) {
      head = newNode
    } else {
      let tempNode = head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = newNode
      newNode.prev = tempNode
    }
    length++
    return true
  }

  this.addAtPosition = function (index: number, element: T): boolean {
    var newNode = new Node(element)

    var currentNode = head
    var nextNode = head

    if (index < 0 || length < index) {
      return false
    } else if (index === 0) {
      return this.addStart(element)
    } else if (length === index) {
      return this.addAtEnd(element)
    } else {
      for (let i = 0; i <= index - 2; i++) {
        currentNode = currentNode.next
      }
      nextNode = currentNode.next
      newNode.next = currentNode.next
      newNode.prev = currentNode
      currentNode.next = newNode
      nextNode.prev = newNode
      length++
      return true
    }
  }

  this.addAtEnd = function (element: T) {
    let newNode = new Node(element)

    if (isEmpty()) {
      head = newNode
    } else {
      const getLast = (node) => {
        return node.next ? getLast(node.next) : node
      }
      const lastNode = getLast(head)
      newNode.prev = lastNode
      lastNode.next = newNode
    }
    length++
    return true
  }
  this.removeAtStart = function () {
    let tempNode = head
    if (isEmpty()) {
      return false
    }
    if (tempNode.next === null) {
      length = 0
      head = null
      return true
    }
    head = head.next
    head.prev = null
    length--
    return true
  }

  this.removeAtPosition = function (index: number) {
    if (index < 0 || index >= length) {
      return false
    }
    if (index === 0) {
      this.removeAtStart()
    }
    if (index === length) {
      this.removeAtEnd()
    }
    let tempNode = head
    let previousNode
    let nextNode
    let currentIndex = 0
    while (currentIndex < index) {
      currentIndex++
      tempNode = tempNode.next
    }
    previousNode = tempNode.prev
    nextNode = tempNode.next
    previousNode.next = tempNode.next
    nextNode.prev = tempNode.next
    length--
    return true
  }

  this.removeAtEnd = function () {
    let tempNode = head
    if (isEmpty()) {
      return false
    }
    if (tempNode.next == null) {
      length = 0
      head = null
      return true
    }
    while (tempNode.next !== null) {
      tempNode = tempNode.next
    }
    let secondLast = tempNode.prev
    secondLast.next = null
    length--
    return tempNode.data
  }
  this.print = function () {
    let temp: T[] = []
    while (!isEmpty()) {
      temp.push(head.data)
      head = head.next
    }
    return temp
  }
}
// var tempList = new DoublyLinkedList<number>()
// console.log(tempList.addStart(1))
// console.log(tempList.addStart(0))
// console.log(tempList.addAtTail(5))
// console.log(tempList.removeAtEnd())
// console.log(tempList.addAtEnd(9))
// console.log(tempList.addAtPosition(3, 4))
// console.log(tempList.addAtTail(5))
// console.log(tempList.removeAtStart())
// console.log(tempList.size())
// console.log(tempList.print())

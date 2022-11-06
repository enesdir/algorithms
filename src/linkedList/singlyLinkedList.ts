/* LinkedList */

export function SinglyLinkedList() {
  let length = 0
  let head = null

  const Node = function (element: string) {
    this.element = element
    this.next = null
  }

  this.size = function () {
    return length
  }

  this.head = function () {
    return head
  }

  this.add = function (element: string) {
    let node = new Node(element)
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
  }

  this.remove = function (element: string) {
    let currentNode = head
    let previousNode
    if (currentNode.element === element) {
      head = currentNode.next
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode
        currentNode = currentNode.next
      }

      previousNode.next = currentNode.next
    }

    length--
  }

  this.isEmpty = function () {
    return length === 0
  }

  this.indexOf = function (element: string) {
    let currentNode = head
    let index = -1

    while (currentNode) {
      index++
      if (currentNode.element === element) {
        return index
      }
      currentNode = currentNode.next
    }

    return -1
  }

  this.elementAt = function (index) {
    let currentNode = head
    let count = 0
    while (count < index) {
      count++
      currentNode = currentNode.next
    }
    return currentNode.element
  }

  this.addAt = function (index: number, element: string) {
    let node = new Node(element)

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
    return currentNode.element
  }
}

// var tempList = new SinglyLinkedList()
// tempList.add("Kitten")
// tempList.add("Puppy")
// tempList.add("Dog")
// tempList.add("Cat")
// tempList.add("Fish")
// console.log(tempList.size())
// console.log(tempList.removeAt(3))
// console.log(tempList.elementAt(3))
// console.log(tempList.indexOf("Puppy"))
// console.log(tempList.size())

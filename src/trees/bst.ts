/* Binary Search Tree - Implemenation in TypeScript*/

// Node this interface
interface INode<T> {
  data: T
  right: INode<T> | null
  left: INode<T> | null
}
interface IBST<T> {
  root: () => INode<T> | null
  add: (x: T) => any
  remove: (data: any) => any
  inOrder: () => T[] | null
  preOrder: () => T[] | null
  postOrder: () => T[] | null
  levelOrder: () => T[] | null
  find: (x: any) => any
  findMinHeight: () => number
  findMaxHeight: () => number
  findMin: () => T
  findMax: () => T
  isPresent: (x: T) => boolean
  isBalanced: () => boolean
}
function BST<T>(this: IBST<T>) {
  let root: INode<T> | null = null

  const Node = function (this: INode<T>, data: T) {
    this.data = data
    this.right = null
    this.left = null
  }
  this.root = function () {
    return root
  }
  this.add = function (data) {
    const node = root
    if (node === null) {
      root = new Node(data)
      return
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data)
            return
          } else if (node.left !== null) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data)
            return
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree(node)
    }
  }
  this.findMin = function () {
    let current = root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }
  /**
   * Returns the max height of a balanced binary tree given n items
   */
  this.findMax = function () {
    let current = root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }
  this.find = function (data: T) {
    let current = root
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) {
        return null
      }
    }
    return current
  }
  this.isPresent = function (data: T) {
    let current = root
    while (current) {
      if (data === current.data) {
        return true
      }
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }
  this.remove = function (data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null
        }
        // node has no left child
        if (node.left == null) {
          return node.right
        }
        // node has no right child
        if (node.right == null) {
          return node.left
        }
        // node has two children
        var tempNode = node.right
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this.root = removeNode(this.root, data)
  }
  this.isBalanced = function () {
    return this.findMinHeight() >= this.findMaxHeight() - 1
  }
  this.findMinHeight = function (node = root) {
    if (node == null) {
      return -1
    }
    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right)
    if (left < right) {
      return left + 1
    } else {
      return right + 1
    }
  }
  /**
   * Returns the max height of a balanced binary tree given n items
   */
  this.findMaxHeight = function (node = root) {
    if (node == null) {
      return -1
    }
    let left = this.findMaxHeight(node.left)
    let right = this.findMaxHeight(node.right)
    if (left > right) {
      return left + 1
    } else {
      return right + 1
    }
  }
  this.inOrder = function () {
    if (root == null) {
      return null
    } else {
      var result = new Array<T>()
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left)
        result.push(node.data)
        node.right && traverseInOrder(node.right)
      }
      traverseInOrder(root)
      return result
    }
  }
  this.preOrder = function () {
    if (root == null) {
      return null
    } else {
      var result = new Array<T>()
      function traversePreOrder(node) {
        result.push(node.data)
        node.left && traversePreOrder(node.left)
        node.right && traversePreOrder(node.right)
      }
      traversePreOrder(root)
      return result
    }
  }
  this.postOrder = function () {
    if (root == null) {
      return null
    } else {
      var result = new Array<T>()
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left)
        node.right && traversePostOrder(node.right)
        result.push(node.data)
      }
      traversePostOrder(root)
      return result
    }
  }

  this.levelOrder = function () {
    let result = []
    let Q = []
    if (root != null) {
      Q.push(root)
      while (Q.length > 0) {
        let node = Q.shift()
        result.push(node.data)
        if (node.left != null) {
          Q.push(node.left)
        }
        if (node.right != null) {
          Q.push(node.right)
        }
      }
      return result
    } else {
      return null
    }
  }
}
export { BST }

// Code to test the implementation.
// const bst = new BST<number>()
// console.log(bst.root())
// bst.add(8)
// bst.add(5)
// bst.add(16)
// bst.add(4)
// bst.add(7)
// bst.add(23)
// bst.add(6)
// bst.add(7)
// bst.add(21)
// console.log(bst.root().left)
// console.log(bst.findMinHeight())
// console.log(bst.findMaxHeight())
// console.log(bst.isPresent(21))
// console.log(bst.isBalanced())
// bst.add(11)
// console.log(bst.findMinHeight())
// console.log(bst.findMaxHeight())
// console.log(bst.isBalanced())
// console.log("inOrder: " + bst.inOrder())
// console.log("preOrder: " + bst.preOrder())
// console.log("postOrder: " + bst.postOrder())
// console.log("levelOrder: " + bst.levelOrder())

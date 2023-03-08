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
  find: (x: T) => INode<T> | null
  findMinHeight: () => number
  findMaxHeight: () => number
  findMin: () => T
  findMax: () => T
  isPresent: (x: T) => boolean
  isBalanced: () => boolean
}
function BST<T>(this: IBST<T>) {
  // Root of binary tree
  let root: INode<T> | null = null
  // Structure of each node of the tree
  const Node = function (this: INode<T>, data: T) {
    this.data = data
    this.right = null
    this.left = null
  }
  /**
   * @returns root of binary tree
   */
  this.root = function () {
    return root
  }
  this.add = function (data: T) {
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
  /**
   * Given a non-empty binary search tree, return the node with minimum key value found in that tree.
   * Returns the min item of a tree
   */
  this.findMin = function () {
    let current = root
    // loop down to find the leftmost leaf
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }
  /**
   * Returns the max item of a tree
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
  this.remove = function (data: T) {
    const removeNode = function (node, data) {
      // base condition when tree is empty
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
        // if the key to be deleted is smaller than the root's key, then it lies in left subtree
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
        // if key to be deleted is greater than the root's key, then it lies in right subtree
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    root = removeNode(root, data)
  }
  /**
   * function to check if tree is height-balanced or not
   * @returns boolean
   */
  this.isBalanced = function () {
    return this.findMinHeight() >= this.findMaxHeight() - 1
  }
  /**
   * Returns the min height of a tree
   */
  this.findMinHeight = function (node = root) {
    // base condition when tree is empty
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
   * Returns the max height of a tree
   */
  this.findMaxHeight = function (node = root) {
    // base condition when tree is empty
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
  /**
   * A utility function to do inorder traversal of BST
   */
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
  /* A utility function to print preorder traversal of BST */
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
  /* A utility function to print postorder traversal of BST */
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
  /* A utility function to print levelorder traversal of BST */
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
// console.log(bst.find(1))
// console.log(bst.findMinHeight())
// console.log(bst.findMaxHeight())
// console.log(bst.isBalanced())
// console.log(bst.root().right)
// console.log(bst.remove(21))
// console.log(bst.root().left.data)
// console.log("inOrder: " + bst.inOrder())
// console.log("preOrder: " + bst.preOrder())
// console.log("postOrder: " + bst.postOrder())
// console.log("levelOrder: " + bst.levelOrder())

import { BST } from "./bst"

describe("Binary Tree and Binary Search Tree", () => {
  const bst = new BST<number>()
  it("should successfully instantiate an empty tree", () => {
    expect(bst.root()).toStrictEqual(null)
  })
  it("should successfully instantiate a tree with a single root node", () => {
    bst.add(8)
    expect(bst.root().data).toEqual(8)
    expect(bst.root().left).toBeFalsy()
    expect(bst.root().right).toBeFalsy()
  })
  it("should successfully add a left child and right child to a single root node", () => {
    bst.add(5)
    bst.add(16)
    expect(bst.root().left.data).toEqual(5)
    expect(bst.root().right.data).toEqual(16)
  })
  it("should return the minimum height in given binary tree", () => {
    bst.add(4)
    bst.add(7)
    bst.add(23)
    bst.add(6)
    bst.add(7)
    bst.add(21)
    expect(bst.findMinHeight()).toStrictEqual(1)
  })
  it("should return the maximum height in given binary tree", () => {
    expect(bst.findMaxHeight()).toStrictEqual(3)
  })
  it("should sucessfully return true for balanced tree", () => {
    expect(bst.isBalanced()).toBeFalsy()
  })
  it("should sucessfully return true for balanced tree", () => {
    bst.add(11)
    expect(bst.isBalanced()).toEqual(true)
  })
  it("should successfully return a collection from an inorder traversal", () => {
    expect(bst.inOrder()).toStrictEqual([4, 5, 6, 7, 8, 11, 16, 21, 23])
  })
  it("should successfully return a collection from a preorder traversal", () => {
    expect(bst.preOrder()).toStrictEqual([8, 5, 4, 7, 6, 16, 11, 23, 21])
  })
  it("should successfully return a collection from a postorder traversal", () => {
    expect(bst.postOrder()).toStrictEqual([4, 6, 7, 5, 11, 21, 23, 16, 8])
  })
  it("should successfully return a collection from a levelorder traversal", () => {
    expect(bst.levelOrder()).toStrictEqual([8, 5, 16, 4, 7, 11, 23, 6, 21])
  })
  it("should return the minimum in given binary tree", () => {
    expect(bst.find(1)).toEqual(null)
  })
  it("should return the minimum in given binary tree", () => {
    expect(bst.findMin()).toEqual(4)
  })
  it("should return the maximum in given binary tree", () => {
    expect(bst.findMax()).toEqual(23)
  })
  it("should sucessfully return true for given number is on the tree", () => {
    expect(bst.isPresent(5)).toEqual(true)
  })
})

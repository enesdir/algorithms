import { BFS } from "./bfs"

describe("Graphs: Breadth-first search ", () => {
  // arrange
  var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
  ]

  it("BFS", () => {
    // act
    let expression = BFS(exBFSGraph, 1)
    // assert
    expect(expression).toStrictEqual({ 0: 2, 1: 0, 2: 1, 3: 3, 4: Infinity })
  })
})

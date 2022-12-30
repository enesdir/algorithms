import { SelectionSort } from "./selectionSort"

// test SelectionSort algorithm
describe("Algorithms: SelectionSort", () => {
  it("should be succesfully sorted the array", () => {
    // act
    let expression = SelectionSort([2, 3, 4, 1, 7, 3])
    //assert
    expect(expression).toStrictEqual([1, 2, 3, 3, 4, 7])
  })
})

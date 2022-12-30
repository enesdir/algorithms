// TypeScript program for implementation of selection sort
function SelectionSort(elements: number[]): number[] {
  // One by one move boundary of unsorted subarray
  for (let i = 0; i < elements.length; i++) {
    // Find the minimum element in unsorted array
    let minIndex = i
    for (let j = i + 1; j < elements.length; j++) {
      if (elements[j] < elements[minIndex]) {
        minIndex = j
      }
    }
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      let temp = elements[i]
      elements[i] = elements[minIndex]
      elements[minIndex] = temp
    }
  }
  return elements
}

export { SelectionSort }

// Code to test the implementation.
// console.log(SelectionSort([2, 3, 4, 1, 7, 3]))

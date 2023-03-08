# Sorting Algorithms

## Introduction Sorting Algorithms

Sorting is the process of arranging the elements of an array so that they can be placed either in ascending or descending order.

## Table of Complexity Comparison

<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Best Case</th>
      <th scope="col">Average Case</th>
      <th scope="col">Worst Case</th>
      <th scope="col">Memory</th>
      <th scope="col">Stable</th>
      <th scope="col">Method Used</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Quick Sort</th>
      <td>n log n</td>
      <td>n log n</td>
      <td>n<sup>2</sup></td>
      <td>log n</td>
      <td>No</td>
      <td>Partitioning</td>
    </tr>
    <tr>
      <th scope="row">Merge Sort</th>
      <td>n log n</td>
      <td>n log n</td>
      <td>n log n</td>
      <td>n</td>
      <td>Yes</td>
      <td>Merging</td>
    </tr>
    <tr>
      <th scope="row">Heap Sort</th>
      <td>n log n</td>
      <td>n log n</td>
      <td>n log n</td>
      <td>1</td>
      <td>No</td>
      <td>Selection</td>
    </tr>
    <tr>
      <th scope="row">
        Insertion Sort
      </th>
      <td>n</td>
      <td>
        n<sup>2</sup>
      </td>
      <td>
        n<sup>2</sup>
      </td>
      <td>1</td>
      <td>Yes</td>
      <td>Insertion</td>
    </tr>
    <tr>
      <th scope="row">Tim Sort</th>
      <td>n</td>
      <td>n log n</td>
      <td>n log n</td>
      <td>n</td>
      <td>Yes</td>
      <td>Insertion &amp; Merging</td>
    </tr>
    <tr>
      <th scope="row">
        Selection Sort
      </th>
      <td>
        n<sup>2</sup>
      </td>
      <td>
        n<sup>2</sup>
      </td>
      <td>
        n<sup>2</sup>
      </td>
      <td>1</td>
      <td>No</td>
      <td>Selection</td>
    </tr>
    <tr>
      <th scope="row">Shell Sort</th>
      <td>
        n log n
      </td>
      <td>
        n<sup>4/3</sup>
      </td>
      <td>
        n<sup>3/2</sup>
      </td>
      <td>1</td>
      <td>No</td>
      <td>Insertion</td>
    </tr>
    <tr>
      <th scope="row">
        Bubble Sort
      </th>
      <td>n</td>
      <td>
        n<sup>2</sup>
      </td>
      <td>
        n<sup>2</sup>
      </td>
      <td>1</td>
      <td>Yes</td>
      <td>Exchanging</td>
    </tr>
    <tr>
      <th scope="row">Tree Sort</th>
      <td>
        n log n
      </td>
      <td>
        n log n
      </td>
      <td>
        n log n
      </td>
      <td>n</td>
      <td>Yes</td>
      <td>Insertion</td>
    </tr>
    <tr>
      <th scope="row">
        Cycle Sort
      </th>
      <td>
        n<sup>2</sup>
      </td>
      <td>
        n<sup>2</sup>
      </td>
      <td>
        n<sup>2</sup>
      </td>
      <td>1</td>
      <td>No</td>
      <td>Selection</td>
    </tr>
    <tr>
      <th scope="row">
        Strand Sort
      </th>
      <td>n</td>
      <td>
        n<sup>2</sup>
      </td>
      <td>
        n<sup>2</sup>
      </td>
      <td>n</td>
      <td>Yes</td>
      <td>Selection</td>
    </tr>
    <tr>
      <th scope="row">
        Cocktail Shaker Sort
      </th>
      <td>n</td>
      <td>
        n<sup>2</sup>
      </td>
      <td>
        n<sup>2</sup>
      </td>
      <td>1</td>
      <td>Yes</td>
      <td>Exchanging</td>
    </tr>
    <tr>
      <th scope="row">Comb Sort</th>
      <td>
        n log n
      </td>
      <td>
        n<sup>2</sup>
      </td>
      <td>
        n<sup>2</sup>
      </td>
      <td>1</td>
      <td>No</td>
      <td>Exchanging</td>
    </tr>
    <tr>
      <th scope="row">
        Gnome Sort
      </th>
      <td>n</td>
      <td>
        n<sup>2</sup>
      </td>
      <td>
        n<sup>2</sup>
      </td>
      <td>1</td>
      <td>Yes</td>
      <td>Exchanging</td>
    </tr>
    <tr>
      <th scope="row">
        Odd–even Sort
      </th>
      <td>n</td>
      <td>
        n<sup>2</sup>
      </td>
      <td>
        n<sup>2</sup>
      </td>
      <td>1</td>
      <td>Yes</td>
      <td>Exchanging</td>
    </tr>
  </tbody>
</table>

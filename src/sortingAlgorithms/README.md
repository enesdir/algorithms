# Sorting Algorithms

## Introduction Sorting Algorithms

Sorting is the process of arranging the elements of an array so that they can be placed either in ascending or descending order.

## Table of Complexity Comparison

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Best Case</th>
      <th>Average Case</th>
      <th>Worst Case</th>
      <th>Memory</th>
      <th>Stable</th>
      <th>Method Used</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Quick Sort</td>
      <td>n log n</td>
      <td>n log n</td>
      <td>n<sup>2</sup></td>
      <td>log n</td>
      <td>No</td>
      <td>Partitioning</td>
    </tr>
    <tr>
      <td>Merge Sort</td>
      <td>n log n</td>
      <td>n log n</td>
      <td>n log n</td>
      <td>n</td>
      <td>Yes</td>
      <td>Merging</td>
    </tr>
    <tr>
      <td>Heap Sort</td>
      <td>n log n</td>
      <td>n log n</td>
      <td>n log n</td>
      <td>1</td>
      <td>No</td>
      <td>Selection</td>
    </tr>
    <tr>
      <td>
        Insertion Sort</a>
      </td>
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
      <td>Tim Sort</td>
      <td>n</td>
      <td>n log n</td>
      <td>n log n</td>
      <td>n</td>
      <td>Yes</td>
      <td>Insertion &amp; Merging</td>
    </tr>
    <tr>
      <td>
        Selection Sort
      </td>
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
      <td>Shell Sort</td>
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
      <td>
        Bubble Sort
      </td>
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
      <td>Tree Sort</td>
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
      <td>
        Cycle Sort
      </td>
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
      <td>
        Strand Sort
      </td>
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
      <td>
        Cocktail Shaker Sort
      </td>
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
      <td>Comb Sort</td>
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
      <td>
        Gnome Sort
      </td>
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
      <td>
        Odd–even Sort
      </td>
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

/**
 * Binary Heap
 * Can be represented with the built-in array data structure
 * For any index n:
 *  its left child index in the array can be calculated as: 2n + 1
 *  its right child index in the array can be calculated as:  2n + 2
 *
 * For any child index n:
 *  its parent index can be calculated as: Math.floor((n-1) / 2)
 *
 *
 * Inserting into heap array:
 *  1. Append to end of array
 *      heapArray.push(newValue)
 *
 *  2. "Bubble up" -> compare with parent, if > or <, swap until correct spot
 *      a. get index of new element
 *      b. recursively find parent, compare, swap
 *        b.1 - find parent -> Math.floor((index - 1) / 2)
 *        b.2 - compare values
 *          b.2.1 - (max heap) -> if (new child > parent) swap indices
 *          b.2.2 - (min heap) -> if (new child < parent) swap indices
 *
 */

class MaxBinaryHeap {
  values: Array<number>;

  constructor() {
    this.values = [];
  }

  insert(value: number) {
    this.values.push(value); // O(1)
    this.bubbleUp(); // O(log n)
  }
  bubbleUp() {
    // initialize new element index and value
    let currentIdx: number = this.values.length - 1;
    let element: number = this.values[currentIdx];

    while (currentIdx > 0) {
      // initialize parent index and parent value
      let parentIdx: number = Math.floor((currentIdx - 1) / 2);
      let parent: number = this.values[parentIdx];

      // break loop if new element shouldn't be swapped
      // to change to min heap: if (element >= parent) break;
      if (element <= parent) break;

      // swap new value and parent values
      this.values[parentIdx] = element;
      this.values[currentIdx] = parent;
      currentIdx = parentIdx;
    }
  }
}

const heapTest = new MaxBinaryHeap();

console.log(heapTest.values);

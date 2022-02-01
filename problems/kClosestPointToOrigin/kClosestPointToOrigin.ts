const calculateDistance = (x: number, y: number) => {
  return x ** 2 + y ** 2;
};

console.log(calculateDistance(1, 3));
console.log(calculateDistance(-2, 2));
console.log(calculateDistance(-1, 2));
console.log(calculateDistance(0, 1));

class HeapNode {
  distance: number;
  xCoord: number;
  constructor(distance: number, xCoord: number) {
    this.distance = distance;
    this.xCoord = xCoord;
  }
}

class MinHeap {
  values: Array<any>;
  constructor() {
    this.values = [];
  }

  enqueue([x, y]: [x: number, y: number]) {
    const point = new HeapNode(calculateDistance(x, y), x);
    this.values.push(point);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;

    // while loop until node is in correct position
    while (idx > 0) {
      let current = this.values[idx];
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      let distanceDiff = current.distance - parent.distance; // 7,3
      let xCoordDiff = current.xCoord - parent.xCoord;

      // if greater, keep in place
      // or if same distance and >= xCoord, keep in place
      if (distanceDiff > 0 || (distanceDiff === 0 && xCoordDiff >= 0)) break;

      // swap current and parent
      this.values[parentIdx] = current;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const length = this.values.length;

    if (length > 1) {
      const minNode = this.values[0];
      const endNode = this.values.pop();
      this.values[0] = endNode;

      this.sinkDown();

      return minNode;
    } else if (length === 1) {
      return this.values.pop();
    } else {
      return;
    }
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.distance < element.distance) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.distance < element.distance) ||
          (swap !== null && rightChild.distance < leftChild.distance)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
    //         let parentIdx = 0
    //         let leftChildIdx = (2 * parentIdx) + 1
    //         let rightChildIdx = (2 * parentIdx) + 2
    //         while (this.values.length > 1) {
    //             let parent = this.values[parentIdx]
    //             let leftChild = this.values[leftChildIdx] ? this.values[leftChildIdx] : Infinity
    //             let rightChild = this.values[rightChildIdx] ? this.values[rightChildIdx] : Infinity
    //             let smallestChild;
    //             if (leftChild.distance === rightChild.distance) {
    //                 if (leftChild.xCoord <= rightChildIdx.xCoord) {
    //                     smallestChild = leftChild;
    //                 } else {
    //                     smallestChild = rightChild
    //                 }
    //             } else {
    //                 smallestChild = leftChild.distance < rightChild.distance ? [leftChild, leftChildIdx] : [rightChild, rightChildIdx]
    //             }

    //             let distanceDiff = smallestChild[0].distance - parent.distance // 2, 5
    //             let xCoordDiff = smallestChild[0].xCoord - parent.xCoord

    //             // if child distance is lower, swap, will be less than 0 if so
    //             // or if same distance and xCoord is lower, swap
    //             if (distanceDiff > 0 || (distanceDiff === 0 && xCoordDiff >= 0)) break;

    //             this.values[parentIdx] = smallestChild[0]
    //             this.values[smallestChild[1]] = parent
    //             parentIdx = smallestChild[1]
    //         }
  }
}

let testHeap = new MinHeap();

testHeap.enqueue([1, 2]); // 5 should appear before 2, 1
testHeap.enqueue([5, 5]); // 50
testHeap.enqueue([-2, 2]); // 8
testHeap.enqueue([1, 0]); // 1
testHeap.enqueue([-1, 0]); // 1
testHeap.enqueue([2, 1]); // 5

console.log("added values", testHeap.values);

console.log(testHeap.dequeue());
console.log(testHeap.dequeue());
console.log(testHeap.dequeue());

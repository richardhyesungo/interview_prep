const selectionSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min !== i) {
      swap(array, i, min);
    }
  }
  return array;
};

// @ts-ignore
const swap = (items, i, min) => {
  let temp = items[i];
  items[i] = items[min];
  items[min] = temp;
};

const result = selectionSort([5, 2, 3, 6, 1, 7, 3]);
console.log("selectionSort :", result);

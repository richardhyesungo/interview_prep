function majorityElement(nums: number[]): number {
  // let majority: { element: number; freq: number } = { element: 0, freq: 0 };
  // let tracker: { [key: string]: number } = {};

  // for (const num of nums) {
  //   // add to tracker
  //   if (tracker[num]) {
  //     tracker[num] += 1;
  //   } else {
  //     tracker[num] = 1;
  //   }
  //   if (tracker[num] > majority.freq) {
  //     majority = { element: num, freq: tracker[num] };
  //   }
  // }
  // return majority.element;

  // Boyer-Moore algorithm
  let majority = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      majority = num;
    }

    if (num === majority) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return majority;
}

/*

doing this in O(n) and O(n) is straightforward, hold in object
add to object, check if key value is greater than current max
if greater than current max, set current max equal to key


*/

// Boyer-Moore voting algorithm
/*

  this is reliant on the condition that one number occurs
  more than half the time, so there will always be at least
  one time where the number occurs twice in a row in the case of an
  even length
  in an odd length of elements, the last number will be the number
  if it was completely alternating.
  Else if it was random, the count of the majority would just simply be at
  least 1 by the end

  [1, 2, 1]

*/

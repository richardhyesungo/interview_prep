function smallerNumbersThanCurrent(nums: number[]): number[] {
  const tempArray = nums.slice().sort((a, b) => a - b); // bottleneck
  let count = 0;
  let currentValue = -1; // based on constraints value is between 0 and 100
  let tracker: any = {};
  let solutionArray: number[] = [];

  // count = 0
  // currentValue = 0 - value to be compared against
  // tracker = {0: 3}
  // [0, 0, 0, 1, 1, 3, 4, 7]
  for (const num of tempArray) {
    // 0
    if (num > currentValue) {
      tracker[num] = count;
      currentValue = num;
    }
    count += 1;
  }

  for (const num of nums) {
    solutionArray.push(tracker[num]);
  }

  return solutionArray;
}

/*
for every element in the input array, find out how many other elements
that the current element is greater than / how many elements are smaller

what about sorting?
What about using a hash table or map?

Basic examples:
    input  = [0, 1, 2, 3, 4, 5, 6]
        process:
            6 numbers less than 6
            5 numbers less than 5
            ...
            0 less than 0
    output = [0, 1, 2, 3, 4, 5, 6]


    input  = [4, 2, 5, 3, 9]
        process:
            naive would be a nested for loop
            for each element compare against each other element's value

            more performant algorithm?
            could sort first? Is this even necessary?
            could add into hash map [value, # of occurrences]
            after sorting, could use indices to list start and end
            think i could do O(n log n) with the sorting and indices
            [2, 3, 4, 5, 9]
            sort, then loop and add to map
            loop through hash map b/c keeps insertion order
                {
                  2: 0, // [value, # occurrences, [start, end]]
                  3: 1, // could just do start and end, or do small to large
                  4: 2,
                  5: 3,
                  9: 4,
                }
            count = 0
            for loop, 2, 3, 4, 5, 9
                temp = map[2] = 0
                map[2] = count = 0
                count += temp

            solutionArray = []
            for loop, 4, 2, 5, 3, 9
                solutionArray.push(map[4])
            what about just O(n)?



    output = []

time would be at least be O(n)
space in what i'm thinking would be O(n)

*/

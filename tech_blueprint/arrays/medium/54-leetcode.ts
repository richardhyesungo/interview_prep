function spiralCopy(inputMatrix: any) {
  // your code goes here
  // matrix = n x m where n = left to right, m is top to bottom
  let left = 0;
  let right = inputMatrix[0].length - 1;
  let top = 0;
  let bottom = inputMatrix.length - 1;
  let solutionArray = [];

  // while loop, what's the condition?
  // while (topRow <= btmRow AND leftCol <= rightCol)
  // while left <= n, top <= m
  // for loop from left to right // right to left
  // push current element to array
  // top++
  for (let i = left; i < right; i++) {
    // i = 0
    let element = inputMatrix[top][i]; // x, y
    solutionArray.push(element);
  }
  top++;

  // for loop from top to bottom // top to bottom

  // right--
  for (let i = top; i < bottom; i++) {
    // i = 0
    let element = inputMatrix[right][i];
    solutionArray.push(element);
  }
  top++;

  // for loop from right to left // right to left
  // bottom--
  //for loop from bottom to top // bottom to top
  // left++
}

// let test = [ [1,    2,   3,  4,    5],
//    [6,    7,   8,  9,   10],
//    [11,  12,  13,  14,  15],
//    [16,  17,  18,  19,  20] ];

// spiralCopy(test);

/*
inputs: 2d array of intergers
output: 1d array of integers, spiraled
constraints: length >= 1
edge cases: length of 1

nested for loop

figure out a way to spiral around

[0, 0] = 1
[0, 1] = 6

let test = [ [1,    2,   3,  4,    5], get to the end of the array go down
   [6,    7,   8,  9,   10],
   [11,  12,  13,  14,  15],
   [16,  17,  18,  19,  20] ]

last elements ->
[4, 0]
[4, 1]
[4, 2]
[4, 3]

iterate top to bottom
matrix = n x m where n = left to right, m is top to bottom
left = 0
right = top row length - 1
top = 0
bottom = length of row - 1

for loop from left to right // right to left
  // push current element to array
  // top++
for loop from top to bottom // top to bottom
 // right--
for loop from right to left // right to left
 // bottom--
for loop from bottom to top // bottom to top
 // left++




once we do a pass, increment counter

traverse(inputArray, x)
loop through up and down? []

two functions?
traverse right
left, down, up
input parameters -> the elements to traverse
how to give that function?



time: n x m
space: n x m

*/

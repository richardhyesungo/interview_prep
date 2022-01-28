/*
one
two
three
four
five
six
seven
eight
nine

unique letters for each character
zero - z
two - w
four - u
six - x
eight - g

overlapping numbers
find letters in each overlapping number that other
overlapping numbers don't have

one - o; common numbers: zero, two, four
three - h; common numbers: eight
five - f; common numbers: four
seven - s; common numbers: six
nine - i; common numbers: five, six, eight

subtract overlapping numbers by the occurrences unique numbers
to find the occurrences of the common numbers

*/

const solutionFunction = (stringInput: string) => {
  // find index of a specific character
  const findIdx = (char: string) => {
    return char.charCodeAt(0) - "a".charCodeAt(0);
  };

  // initialize array with 26 zeroes to track numbers
  let charTrackerArray = new Array(26).fill(0);

  // find frequency of each character
  for (let i = 0; i < stringInput.length; i++) {
    let char = stringInput[i];
    let charidx = findIdx(char);
    charTrackerArray[charidx] += 1;
  }

  // find frequencies of unique numbers
  let zeroes = charTrackerArray[findIdx("z")];
  let twos = charTrackerArray[findIdx("w")];
  let fours = charTrackerArray[findIdx("u")];
  let sixes = charTrackerArray[findIdx("x")];
  let eights = charTrackerArray[findIdx("g")];

  // find overlapping numbers
  let ones = charTrackerArray[findIdx("o")] - (zeroes + twos + fours);
  let threes = charTrackerArray[findIdx("h")] - eights;
  let fives = charTrackerArray[findIdx("f")] - fours;
  let sevens = charTrackerArray[findIdx("s")] - sixes;
  let nines = charTrackerArray[findIdx("i")] - (fives + sixes + eights);

  const numbers = [
    zeroes,
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    sevens,
    eights,
    nines,
  ];

  let solution = "";
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      for (let j = 0; j < numbers[i]; j++) {
        console.log();
        solution += i;
      }
    }
  }
  return solution;
};

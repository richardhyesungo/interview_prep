function numTeams(rating: number[]): number {
  let solution = 0;
  for (let i = 1; i < rating.length - 1; i++) {
    let mid = rating[i];
    let descLeft = 0;
    let descRight = 0;
    let ascLeft = 0;
    let ascRight = 0;

    // iterate left
    for (let j = i - 1; j >= 0; j--) {
      let left = rating[j];
      if (left > mid) descLeft++;
      if (left < mid) ascLeft++;
    }
    // iterate right
    for (let j = i + 1; j < rating.length; j++) {
      let right = rating[j];
      if (mid > right) descRight++;
      if (mid < right) ascRight++;
    }

    solution += descLeft * descRight + ascLeft * ascRight;
  }

  return solution;
}

/*

iterate left to right using a "middle element"
traverse left and right from the middle element
increment if 9 > 5 > 1 or 1 < 5 < 9


*/

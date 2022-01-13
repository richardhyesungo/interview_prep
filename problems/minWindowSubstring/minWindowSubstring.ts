function minWindow(s: string, t: string): string {
  // initialize minLength = t.length + 1 and minIndices = [-1, -1]
  let minLength: number = t.length + 1;
  let minIndices: number[] = [-1, -1];

  // initialize empty object for s
  let sObject: { [key: string]: number } = {};

  // place all chars of t into an object
  let tObject: { [key: string]: number } = {};
  for (const char of t) {
    tObject[char] = tObject[char] + 1 || 1;
  }
  console.log("tObject", tObject);

  // initialize two vars:
  //   1. have = 0 -> increment for each target letter
  //   2. need = length of target object
  let have: number = 0;
  const need: number = Object.keys(tObject).length;

  let curLeft: number = 0;
  for (let curRight: number = 0; curRight < s.length; curRight++) {
    let curChar = s[curRight];
    sObject[curChar] = sObject[curChar] + 1 || 1;
    if (tObject[curChar] && sObject[curChar] === tObject[curChar]) {
      have += 1;
    }

    // increment curLeft by 1 until have !== need
    while (have === need) {
      console.log(`have ${have} + need ${need}`);
      // if obtained needs, check against cur min
      if (curRight - curLeft + 1 < minLength) {
        minLength = curRight - curLeft + 1;
        minIndices[0] = curLeft;
        minIndices[1] = curRight;
      }
      sObject[s[curLeft]] -= 1;
      console.log(
        "🚀 ~ file: minWindowSubstring.ts ~ line 40 ~ minWindow ~ sObject",
        sObject
      );
      if (tObject[s[curLeft]] && sObject[s[curLeft]] < tObject[s[curLeft]]) {
        console.log(
          "🚀 ~ file: minWindowSubstring.ts ~ line 42 ~ minWindow ~ tObject",
          tObject
        );
        have -= 1;
      }
      curLeft += 1;
      console.log(
        "🚀 ~ file: minWindowSubstring.ts ~ line 46 ~ minWindow ~ curLeft",
        curLeft
      );
    }
  }

  // check if no matching substring found, return "" if so
  // else return s.substring(minIndices[0], minIndices[1])
  if (minLength === t.length + 1) {
    return "";
  } else {
    return s.substring(minIndices[0], minIndices[1] + 1);
  }
}

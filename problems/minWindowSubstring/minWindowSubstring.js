"use strict";
function minWindow(s, t) {
    // initialize minLength = t.length + 1 and minIndices = [-1, -1]
    let minLength = t.length + 1;
    let minIndices = [-1, -1];
    // initialize empty object for s
    let sObject = {};
    // place all chars of t into an object
    let tObject = {};
    for (const char of t) {
        tObject[char] = tObject[char] + 1 || 1;
    }
    console.log("tObject", tObject);
    // initialize two vars:
    //   1. have = 0 -> increment for each target letter
    //   2. need = length of target object
    let have = 0;
    const need = Object.keys(tObject).length;
    let curLeft = 0;
    for (let curRight = 0; curRight < s.length; curRight++) {
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
            console.log("🚀 ~ file: minWindowSubstring.ts ~ line 40 ~ minWindow ~ sObject", sObject);
            if (tObject[s[curLeft]] && sObject[s[curLeft]] < tObject[s[curLeft]]) {
                console.log("🚀 ~ file: minWindowSubstring.ts ~ line 42 ~ minWindow ~ tObject", tObject);
                have -= 1;
            }
            curLeft += 1;
            console.log("🚀 ~ file: minWindowSubstring.ts ~ line 46 ~ minWindow ~ curLeft", curLeft);
        }
    }
    // check if no matching substring found, return "" if so
    // else return s.substring(minIndices[0], minIndices[1])
    if (minLength === t.length + 1) {
        return "";
    }
    else {
        return s.substring(minIndices[0], minIndices[1] + 1);
    }
}

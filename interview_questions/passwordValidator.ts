// varun asked me this

// https://docs.google.com/document/d/1xrsW3_7gU7Iki8QfYaHgaBCWl8oZ1jJTllmB5EjEK6A/edit

/*
// In this exercise your team has been tasked to ensure that users enter valid passwords that are both relatively secure and easy to remember.
// Part 1 - validating the passwords
// A developer on your team has developed a password suggestion generator.
// Your job is to ensure the quality of the generator’s output. To be acceptable, a password must satisfy these three rules:
// 1. It must contain at least one vowel.
// 2. It cannot contain three consecutive vowels or consonants.
// 3. It cannot contain two consecutive occurrences of the same letter, except for 'ee' or 'oo',
// which has a natural occurrence in the English language.
// Note 1: for the purpose of this exercise, vowels are: a, e, i, o, u.
// Note 2: for the purpose of this exercise, we would ask that you not use a regex solution.
// Part 2 - reading a list of passwords
// You will be provided with a file containing a list of possible passwords - one on each line. As part of this exercise you should have received a file called 'passwords.txt'. The requirements are:
// 1. Presume that in the file each line will always be at least one and at most twenty characters long and consists only of lowercase letters.
// 2. Test each password through your validation mechanism and output the result to the console. 3. The final line contains the word ‘end’, signalling the end of the file and is not a password to


//a,e,i,o,u must contain at least one of these
//aei is not valid, ytp is not valid
//yy, zz

*/

/*
Inputs: password
Outputs: valid or not
Constraints: one vowel, can’t be 3x vowels or consonants, except e or o
Edge cases:

Vowels: a, e, i , o ,u
Consonants: anything else
Aaa -> not allowed
no weird edge Vv -> not allowed





// 1. It must contain at least one vowel.
// 2. It cannot contain three consecutive vowels or consonants.
// 3. It cannot contain two consecutive occurrences of the same letter, except for 'ee' or 'oo',
// which has a natural occurrence in the English language.
// Note 1: for the purpose of this exercise, vowels are: a, e, i, o, u.

No mix of 3 consecutive vowels or consonants
“aei” => invalid
“a” => invalid
“abc” =>valid

Helper functions
Check if at least one vowel?
Check if three consecutive vowels or consonants
Check if two consecutive occurrences of same letter except for ee or oo

If any of these helper functions return false
Then return false

Pseudocode
Is it valid?
Check if at least one vowel?
Check if three consecutive vowels or consonants
Check if two consecutive occurrences of same letter except for ee or oo

Return boolean

*/

// Code --------------------------------------------------------------------------------

/**
 *
 *
 *
 *
 *
 */

/*
// Function #1
// Check if at least one vowel?
const isVowelPresent = (password: string) => {
	let hasVowel = false;
	const vowels = new Set([a, e, o, i, u]) // be faster if we used an object
// Iterate over
For (const char of password) {
	If (vowels.has(char)){
	Return true
}
}
	// return boolean
	Return hasVowel
}


Combined Function
Const hasConsecVowels = (password: string) => {
	Const vowels = new Set([a, e, o, i, u])
	Let prevCharType: boolean =  // consonant
	Let counter = 0;

	// password


	For (const char of password) {
		If (vowels.has(char) === prevCharType) {
			Counter++
			If (counter === 3) return false
} else {
	Counter = 1
}
}

	Return true
}


Function #2
// Check if three consecutive vowels
Const hasConsecVowels = (password: string) => {
	Const vowels = new Set([a, e, o, i, u])
	Let counter = 0;

	For (const char of password) {
		If (vowels.has(char)) {
			Counter++
			If (counter === 3) return false
} else {
	Counter = 0
}
}
	Return true
}

Function #3
// Check if three consonants
Const hasConsecCons = (password: string) => {
	Const vowels = new Set([a, e, o, i, u])
	Let counter = 0;

	For (const char of password) {
		If (!vowels.has(char)) {
			Counter++
			If (counter === 3) return false
} else {
	Counter = 0
}
}
	Return true
}

Function #4
// Check if two consecutive occurrences of same letter except for ee or oo
// “abeei” => true
// “aa” => false
// “password” => false
Const twoConsecOcc = (password: string) => {
	Let prevChar = “”

	For (const char of password) {
		If (char === prevChar && (char !== ‘e’ || char !== ‘o’)) return false
		prevChar = char
}

	Return true;
}

// password
Const checkIfValidPassword = () => {

	If (!isVowelPresent()) return false
	If (!twoConsecOcc()) return false
	If (!hasConsecCons()) return false
If (!hasConsecVowels()) return false

Return true
}

*/

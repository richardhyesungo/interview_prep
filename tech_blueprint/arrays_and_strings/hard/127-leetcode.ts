function shortestWordEditPath(source: any, target: any, words: any) {
  /**
	@param source: string
	@param target: string
	@param words: string[]
	@return: integer
	*/

  // your code goes here
  let foundTarget = false;
  let queueOfWords = [source]; // bit

  for (const queueWord of queueOfWords) {
    // bit
    let letterTracker = {};
    // add letters of

    for (const word of words) {
      // but, put
      // if two letters match, add to queue
      // for // loop through bit
    }
  }

  return foundTarget;
}

/*

we have our source word
get a list of words that source word could change into
then iterate through that list
queue -> as I add into the queue, pop them out of the input list
get a list of words that each of those words could change into
breadth first

comparing two words to see if transformation is possible
the check will be if for current letter present in current search word
if so , add into queue, pop search word out of input words list.
we have a object of words that we've visited?

inputs: source and a target, a list of words
outputs:
constraints:
edge cases:

source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

bit -> dog

dog -> pog -> pot -> put -> but -> bit

we iterate over the array of words
we check to see if two of the letters matches our current word
and then if so we can change it to that word
represent as a tree?

bit

but

dog

we have our source word
get a list of words that source word could change into
then iterate through that list
queue -> as I add into the queue, pop them out of the input list
get a list of words that each of those words could change into
breadth first

comparing two words to see if transformation is possible
the check will be if for current letter present in current search word
if so , add into queue, pop search word out of input words list.
we have a object of words that we've visited?





notes


pseudocode



*/

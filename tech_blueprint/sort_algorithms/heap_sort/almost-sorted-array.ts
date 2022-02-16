/**
 * found on pramp practice interview
 * https://leetcode.com/discuss/interview-question/1177758/facebook-onsite-sort-array
 *
 *
 */

function sortKMessedArray(arr: number[], k: number) {
  // your code goes here
}

/*

If we use min heap, we can get an asymptotically better time complexity. We can solve this problem in O(N⋅log(K)).
The idea is to construct a min-heap of size k+1 and insert first k+1 elements into the heap.
Then we remove min from the heap and insert next element from the array into the heap and continue the process
until both array and heap are exhausted. Each pop operation from the heap should insert the corresponding top
element in its correct position in the array.

function sortKMessedArray(arr, k):
    n = arr.length

    # create an empty min-heap
    h = new MinHeap()

    # build the min-heap from the first k+1 elements of arr
    h.buildHeap(arr[0,...,k])

    for i from k+1 to n-1:
        # extract the top element from the min-heap and
        # assign it to the next available array index
        arr[i-(k+1)] = h.extractMin()

        # push the next array element into the min-heap
        h.insert(arr[i])

    # extract all remaining elements from the min-heap
    # and assign them to the next available array index
    for i from 0 to k:
        arr[n-k-1 + i] = h.extractMin()

    return arr

*/

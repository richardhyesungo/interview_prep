/*
0

1, 5

3, 4

*/

function getCheapestCost(rootNode: any) {
  // your code goes here
  let minCost = Infinity;

  // recursive function
  // what what would be the input parameters?

  // children 0, 1, 3
  const traversePath = (node: any, currentCost: number) => {
    // currCost 0 ->
    currentCost += node.cost;

    // if there's no children nodes, then compare against the minCost
    if (node.children.length === 0) {
      // compare costs
      minCost = Math.min(minCost, currentCost);
    } else {
      for (let i = 0; i < node.children.length; i++) {
        let childNode = node.children[i];
        traversePath(childNode, currentCost);
      }
    }
  };
  traversePath(rootNode, 0);

  return minCost;
}

/* 0 currentCost = 0, minCost= 7       */
/*
function getCheapestCost(rootNode):
    n = rootNode.numberOfChildren()

    if (n == 0):
        return rootNode.cost
    else:
        # initialize minCost to the largest integer in the system
        minCost = MAX_INT
        for i from 0 to n-1:
            tempCost = getCheapestCost(rootNode.child[i])
            if (tempCost < minCost):
                minCost = tempCost

    return minCost + rootNode.cost


*/
/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/

// class Node {

// }

// Constructor to create a new Node
function Node_112(this: any, cost: number) {
  this.cost = cost;
  this.children = [];
}

/*
inputs:
outputs:
constraints:
edge cases:

if empty, return 0

tree
every node represents car distirbutor
ships to children nodes
leaf nodes are car dealerships that sell cars direct to consumers
node hold an integer

calculate the minimal sales path cost in the tree

traverse the tree and every path
O(n)
depth first search
minimumCost = infinity



example:





*/

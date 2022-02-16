function numIslands(grid: string[][]): number {
  let islandCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      const currentLocation = grid[row][column];

      if (currentLocation === "1") {
        islandCount += 1;
        markVisited(grid, rows, cols, row, column);
      }
    }
  }

  return islandCount;
}

// mark cell as visited
const markVisited = (
  grid: any,
  rows: any,
  cols: any,
  row: any,
  column: any
) => {
  let queue = [];
  queue.push([row, column]);

  while (queue.length) {
    let cell: any = queue.pop();
    let currentRow = cell[0];
    let currentColumn = cell[1];

    if (grid[currentRow][currentColumn] === "1") {
      grid[currentRow][currentColumn] = -1;
      pushIfValid(queue, rows, cols, currentRow - 1, currentColumn);
      pushIfValid(queue, rows, cols, currentRow + 1, currentColumn);
      pushIfValid(queue, rows, cols, currentRow, currentColumn - 1);
      pushIfValid(queue, rows, cols, currentRow, currentColumn + 1);
    }
  }
};

function pushIfValid(q: any, rows: any, cols: any, x: any, y: any) {
  if (x >= 0 && x < rows && y >= 0 && y < cols) {
    q.push([x, y]);
  }
}

const minimumFuelCost = (roads: number[][], seats: number): number => {
  if (roads.length === 0) return 0;
  let ans = 0

  function createAdjList(roads: number[][]): number[][] {
    const adjList = new Array(roads.length + 1).fill(0).map(() => new Array());
    for (let road of roads) {
      const [a, b] = road;
      adjList[a].push(b);
      adjList[b].push(a);
    }

    return adjList
  }

  const adjList = createAdjList(roads);

  const dfs = (curNode:number,preNode:number) => {
    let p = 1;

    for (let child of adjList[curNode]) {
      if (child !== preNode) {
        p += dfs(child,curNode)
      }
    }

    if (curNode) ans += Math.ceil(p/seats)

    return p
  }

  dfs(0,-1)
  return ans
};

console.log(
  minimumFuelCost(
    [
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    5
  )
);
console.log(
  minimumFuelCost(
    [
      [3, 1],
      [3, 2],
      [1, 0],
      [0, 4],
      [0, 5],
      [4, 6],
    ],
    2
  )
);

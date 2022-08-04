'use strict';

// code provided in class exercise
function depthFirst(root, cb) {
  const stack = [root];
  const visited = new Set();
  visited.add(root);
  let current = null;

  while (stack.length) {
    current = stack.pop();

    if (cb) cb(current.value);

    const neighbors = this.getNeighbors(current);
    for (let edge of neighbors) {
      if (!visited.has(edge.vertex)) {
        visited.add(edge.vertex);
        stack.push(edge.vertex);
      }
    }
  }

  return visited;
}

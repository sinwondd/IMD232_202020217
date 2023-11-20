const tiles = [];
const rowNum = 50,
  colNum = 50;
function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  const w = width / colNum;
  const h = w;
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      const newTile = new Cell(x, y, w, h);
      tiles.push(newTile);
    }
  }

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const neighborsIdx = [
        getIdx(row - 1, col - 1),
        getIdx(row - 1, col),
        getIdx(row - 1, col + 1),
        getIdx(row, col + 1),
        getIdx(row + 1, col + 1),
        getIdx(row + 1, col),
        getIdx(row + 1, col - 1),
        getIdx(row, col - 1),
      ];
      // ... (existing neighbor index adjustments)
      const neighbors = neighborsIdx.map((eachIdx) => {
        return eachIdx >= 0 ? tiles[eachIdx] : null;
      });
      const idx = getIdx(row, col);
      tiles[idx].setNeighbors(neighbors);
    }
  }

  randomSeed(1);
  tiles.forEach((each) => {
    const randomState = random(['rock', 'paper', 'scissors']);
    each.state = randomState;
  });

  frameRate(15);
}

function draw() {
  background(255);

  tiles.forEach((each) => {
    each.calcNextState();
  });

  tiles.forEach((each) => {
    each.update();
  });

  tiles.forEach((each) => {
    each.display();
  });
}

function getIdx(row, col) {
  return row * colNum + col;
}

function mouseClicked() {
  for (let idx = 0; idx < tiles.length; idx++)
    if (tiles[idx].toggleState(mouseX, mouseY)) break;
}

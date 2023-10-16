const bodies = [];
const G = 1;
const bodyNum = 30;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  init();
  background(blue);
}

function draw() {
  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0 + 1; j < bodies.length; j++) {
      if (i !== j) {
      }
    }
  }
  bodies.forEach((each) => {});
  background(255);
  bodies.forEach((each) => {});
}

function mousePressed() {
  init();
}

function init() {}

let posX;
let posY;
let posXAdd = 3;
let posYAdd = 3;

function setup() {
  setCanvasContainer('MySketch', 3, 2, true);
  background(255);
  posX = width / 2;
  posY = height / 2;
  ellipse(posX, posY, 50);
}

function draw() {
  background(255);
  posX += 5;
  posY += 3;
  ellipse(posX, posY, 50);
}

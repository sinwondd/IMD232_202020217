let posX;
let posY;
let posXAdd = 3;
let posYAdd = 5;

function setup() {
  setCanvasContainer('MySketch', 3, 2, true);
  background('255');
  posX = width / 2;
  posY = height / 2;
  ellipse(posX, posY, 50);
}

function draw() {
  background('white');
  posX += 5;
  posY += 3;
  ellipse(posX, posY, 50);
}
if (x < 0 || x > width) {
  velocityX *= -1;
}
//   if (y < 0) {
//     velocityY *= -1;
//   } else if (y > height) {
//     velocityY *= -1;
//   }
if (y < 0 || y > height) {
  velocityY *= -1;
}

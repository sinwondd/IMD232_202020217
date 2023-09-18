let pos;
let vel;
let radius = 25;

function setup() {
  setCanvasContainer('MySketch', 3, 2, true);
  background(255);
  pos = createVector();
  vel = createVector();
  ellipse(posX, posY, 50);
}

function draw() {
  background(255);

  //  이렇게도 쓸수있음
  //   pos.add(vel);
  //   if (pos.x < 0) {
  //     vel.x *= -1;
  //   } else if (pos.x > width) {
  //     vel.x *= -1;
  //   }

  if (pos.x - radius < 0 || pos.x + radius > width) {
    vel.x *= -1;
  }
  if (pos.y - radius < 0 || pos.y + radius > height) {
    vel.y *= -1;
  }

  ellipse(pos.x, pos.y, 2 * radius);
}

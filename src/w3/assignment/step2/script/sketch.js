let pos;
let vel;
let acc;
let mousePos;
let accPos;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
}

function draw() {
  mousePos = createVector(mouseX, mouseY);
  acc = p5.Vector.sub(mousePos, pos).normalize().mult(0.1);

  background('cornsilk');
  myMoney();
  myMouse();
  myBall();
  display();
}

function myMoney() {
  noStroke();
  fill('crimson');
  ellipse(pos.x, pos.y, 50);
}

function myMouse() {
  vel.add(acc);
  vel.limit(15);
  pos.add(vel);
}

function myBall() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function display() {
  vel.limit(3);

  strokeWeight(2);
  stroke('black');
  line(pos.x, pos.y, mouseX, mouseY);

  strokeWeight(2);
  stroke('blue');
  line(pos.x, pos.y, pos.x + vel.x * 20, pos.y + vel.y * 20);

  strokeWeight(2);
  stroke('yellow');
  line(pos.x, pos.y, pos.x + acc.x * 100, pos.y + acc.y * 100);
}

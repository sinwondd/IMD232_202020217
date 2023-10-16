let pos;
let vel;
let acc;
let mousePos;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('blue');
  pos = createVector(random(width), random(height));
  vel = createVector(random(-3, 3), random(-3, 3));
  //   console.log('pos', pos);
  //   console.log('vel', vel);
  //   console.log('acc', acc);
  //   console.log('velMag', vel.mag());
  //   console.log('accMag', acc.mag());
}

function draw() {
  mousePos = createVector(mouseX, mouseY);
  acc = p5.Vector.random2D();
  acc.mult(1);
  background('blue');
  myMoney();
  myMouse();
  myBall();
  display();
}

function myMoney() {
  noStroke();
  fill('white');
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
  stroke('red');
  line(pos.x, pos.y, pos.x + acc.x * 100, pos.y + acc.y * 100);

  strokeWeight(2);
  stroke('yellow');
  line(pos.x, pos.y, pos.x + vel.x * 20, pos.y + vel.y * 20);

  strokeWeight(2);
  stroke('black');
  line(pos.x, pos.y, mousePos.x, mousePos.y);
}

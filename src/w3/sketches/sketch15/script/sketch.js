// let pos;
// let vel;
// let acc;
// let radius = 50;

// let posA;
// let velA;
// let accA;
// let radiusA = 50;

class Ball {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector(0, 0.1);
    this.radius = 25;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(20);
    this.pos.add(this.vel);
  }

  infiniteEdge() {
    if (this.pos.x < 0) {
      this.pos.x += width;
    } else if (this.pos.x >= width) {
      this.pos.x -= width;
    }
    if (this.pos.y < 0) {
      this.pos.y += height;
    } else if (this.pos.y >= height) {
      this.pos.y -= height;
    }
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}

let aBall;
let bBall;
let cBall;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  // pos = createVector(width / 3, height / 2);
  // vel = p5.Vector.random2D();
  // vel.mult(5);
  // acc = createVector(0, 0.01);

  // posA = createVector((2 * width) / 3, height / 2);
  // velA = p5.Vector.random2D();
  // velA.mult(5);
  // accA = createVector(0, 0.05);

  aBall = new Ball();
  bBall = new Ball();
  cBall = new Ball();
}

function draw() {
  background('white');
  aBall.update();
  aBall.infiniteEdge();
  aBall.display();
  bBall.update();
  bBall.infiniteEdge();
  bBall.display();
  cBall.update();
  cBall.infiniteEdge();
  cBall.display();
}

function update() {
  // vel.add(acc);
  // vel.limit(20);
  // pos.add(vel);
  // velA.add(accA);
  // velA.limit(20);
  // posA.add(velA);
}

function infiniteEdge() {}

function display() {
  // ellipse(pos.x, pos.y, 2 * radius);
  // ellipse(posA.x, posA.y, 2 * radiusA);
}

let ball;
let ball2;
let gravity;
let wind;
let att;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  ball = new Mover(width / 2, 0, 50);
  ball2 = new Mover((2 * width) / 3, 0, 10);
  gravity = createVector(0, 0.1);
  wind = creatVector(-1, 0);
  att = new Attractor();
}

function draw() {
  // let gA = p5.Vector.mult(gravity, ball.mass);
  // ball.applyForce(g);
  // let gB = p5.Vector.mult(gravity, ball2.mass);
  // ball2.applyForce(g);
  // if (mouseIsPressed) {
  //   ball.applyForce(wind);
  //   ball2.applyForce(wind);
  // }
  let force1 = att.attract(ball);
  ball.applyForce();
  let force2 = att.attract(ball2);
  ball.update();
  ball2.update();
  // ball.edgeBounce();
  // ball2.edgeBounce();
  // background(255);
  fill('red');
  ball.display();
  ball2.display();
  att.display();
}

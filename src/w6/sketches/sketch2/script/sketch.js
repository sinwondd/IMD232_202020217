let emitting;
let particle;
let g;

function setup() {
  setCanvasContainer('canvasGoesHere', 2, 1, true);

  colorMode(HSL, 360, 100, 100);
  particle = new Ball(width / 2, 0, 1, 0, 100, 50);

  emitter = new Emitter(width / 2, 0);

  g = createVector(0, 0.1);

  background(255);
}

function draw() {
  background('white');
  const scaledG = p5.Vector.mult(g, particle.mass);
  particle.applyForce(scaledG);
  particle.update();
  particle.display();

  emitter.creatBall();
  emitter.applyGravity(g);
  emitter.display();
  emitter.update();
}

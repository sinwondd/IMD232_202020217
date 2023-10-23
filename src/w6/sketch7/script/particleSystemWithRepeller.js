let emitter;
let repeller;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  emitter = new Emitter(width / 2, 50);
  repeller = new Repeller(width / 2, height / 2);
}

function draw() {
  background(255);

  emitter.addParticle();

  let gravity = createVector(0, 0.1);
  emitter.applyGravity(gravity);
  emitter.applyRepeller(repeller);

  emitter.run();

  repeller.display();
}

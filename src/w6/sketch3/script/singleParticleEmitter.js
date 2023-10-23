let emitter;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  emitter = new Emitter(width / 2, 50);
}

function draw() {
  background(255);
  emitter.addParticle();
  emitter.run();
}

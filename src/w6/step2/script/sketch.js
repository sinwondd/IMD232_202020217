let particles = [];
let gravity;
let emitter;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  rectMode(CENTER);
  colorMode(HSL, 360, 100, 100, 100);
  gravity = createVector(0, 0.1);
  background(0, 100, 100);
  emitter = new Emitter(width / 2, height / 2);
}

function draw() {
  background(0, 100, 100);
  for (let i = particles.length - 1; i >= 0; i--) {
    let particle = particles[i];
    particle.applyForce(gravity);
    particle.update();
    particle.display();
    if (particle.isDead()) {
      particles.splice(i, 1);
    }
  }

  emitter.update();
  emitter.display();
}

function mouseClicked() {
  emitter.emit(mouseX, mouseY);
}

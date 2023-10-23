let particles = [];
let emitter;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  rectMode(CENTER);
  colorMode(HSL, 360, 100, 100, 100);
  emitter = new Emitter(width / 2, height / 2);
  gravity = createVector(0, 0.25);
}

function draw() {
  background(0);
  emitter.update();
  emitter.display();
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
  console.log('현재 파티클의 갯수: ' + particles.length);
}

function mouseClicked() {
  emitter.setPosition(mouseX, mouseY);
  emitter.emitParticles(100);
  for (let i = 0; i < 360; i += 5) {
    emitter.emitParticles(10, i);
  }
}

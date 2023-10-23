let particles = [];
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  rectMode(CENTER);
  colorMode(HSL, 360, 100, 100, 100);
  gravity = createVector(0, 0.01);
  background(0, 100, 100);
}

function draw() {
  background(0, 100, 100);
  particles.push(new Particle(width / 2, 0, 8, color(random(360), 100, 50)));
  for (let idx = particles.length - 1; idx >= 0; idx--) {
    let scaledGravity = p5.Vector.mult(gravity, particles[idx].mass);
    particles[idx].applyForce(scaledGravity);
    particles[idx].update();
    particles[idx].display();
  }
  console.log('Number of particles: ' + particles.length);
}

function mouseClicked() {
  emitter.setPosition(mouseX, mouseY);
  emitter.emitParticles(100);
  for (let i = 0; i < 360; i += 5) {
    let angle = random(360);
    emitter.emitParticles(10, angle);
  }
}

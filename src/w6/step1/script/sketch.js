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
  particles.push(
    new Particle(random(width), -10, 8, color(random(360), 100, 50))
  );

  for (let idx = particles.length - 1; idx >= 0; idx--) {
    let scaledGravity = p5.Vector.mult(gravity, particles[idx].mass);
    particles[idx].applyForce(scaledGravity);
    particles[idx].update();
    particles[idx].display();
  }

  for (let a = particles.length - 1; a >= 0; a--) {
    if (particles[a].isDead()) {
      particles.splice(a, 1);
    }
  }

  console.log('Number of particles: ' + particles.length);
}

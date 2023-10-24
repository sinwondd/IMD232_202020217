let particles = [];
let gravity;
let emitter;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  rectMode(CENTER);
  colorMode(HSL, 360, 100, 100, 100);
  emitter = new Emitter(createVector(width / 2, height / 2));
  gravity = createVector(0, 0.01);
  background(0, 100, 100);
}

function draw() {
  if (particles.length > 0) {
    for (let i = particles.length - 1; i >= 0; i--) {
      let particle = particles[i];
      particle.applyForce(gravity);
      particle.update();
      particle.display();
      if (particle.isDead()) {
        particles.splice(i, 1);
      }
    }
  }

  emitter.update();
  emitter.display();
}

function mouseClicked() {
  for (let i = 0; i < 100; i++) {
    let p = new Particle(mouseX, mouseY, color(random(360), 100, 50));
    p.radius = 10;
    p.lifespan = 60;
    let angle = (TWO_PI / 100) * i;
    let speed = random(5, 10);
    p.velocity = createVector(cos(angle) * speed, sin(angle) * speed);
    p.mass = 10;
    particles.push(p);
  }
}

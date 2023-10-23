let particle;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  particle = new Particle(width / 2, 10);
}

function draw() {
  background(255);
  particle.update();
  particle.display();

  let gravity = createVector(0, 0.1);
  particle.applyForce(gravity);

  if (particle.isDead()) {
    particle = new Particle(width / 2, 20);
    console.log('Particle dead!');
  }
}

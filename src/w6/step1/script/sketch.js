let particles = [];
let particleSpeed = 1.5;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  rectMode(CENTER);
  colorMode(HSL, 360, 100, 100, 100);
}

function draw() {
  background(255);
  noStroke(0);

  if (frameCount % 10 === 0) {
    let x = random(width);
    let y = -10;
    let particleColor = color(random(0), random(100), random(255)); // Random color
    let particle = new Particle(x, y, particleSpeed, particleColor);
    particles.push(particle);
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    let particle = particles[i];
    particle.update();
    particle.display();

    if (particle.OffScreen()) {
      particles.splice(i, 1);
    }
  }

  console.log('Number of particles: ' + particles.length);
}

class Emitter {
  constructor() {
    this.pos = createVector(0, 0);
  }

  emit(x, y) {
    for (let i = 0; i < 100; i++) {
      let p = new Particle(x, y, color(random(360), 100, 50));
      p.radius = 10;
      p.lifespan = 60;
      let angle = (TWO_PI / 100) * i;
      let speed = random(5, 10);
      p.velocity = createVector(cos(angle) * speed, sin(angle) * speed);
      p.mass = 10;
      particles.push(p);
    }
  }

  update() {
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].applyForce(gravity);
      particles[i].update();
      if (particles[i].isDead()) {
        particles.splice(i, 1);
      }
    }
  }
  display() {
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].display();
    }
  }
}

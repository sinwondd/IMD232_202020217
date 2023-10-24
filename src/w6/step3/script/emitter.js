class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y);
  }

  emit() {
    this.particles.push(
      new Particle(width / 2, 8, color(random(360), 100, 50))
    );
  }

  applyForce(force) {
    this.particles.forEach((particle) => {
      eachParticle.applyForce(force);
    });
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      particles[i].applyForce(gravity);
      particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    this.particles.forEach((eachParticle) => {
      eachParticle.display();
    });
  }
}

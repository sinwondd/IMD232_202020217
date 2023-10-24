class Emitter {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.particles = [];
  }

  emit(x, y) {
    this.particles.push(particles.push(new Particle(this.pos.x, this.pos.y)));
  }
  applyForce(force) {
    this.particles.forEach((eachParticle) => {
      eachParticle.applyForce(force);
    });
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
    this.particles.forEach((eachParticle) => {
      eachParticle.display();
    });
  }
}

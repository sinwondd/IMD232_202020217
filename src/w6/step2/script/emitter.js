class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y);
  }

  addParticle() {
    this.particles.push(
      new Particle(this.pos.x, this.pos.y, random(1, 16), random(180, 300))
    );
  }

  applyForce(force) {
    this.particles.forEach((eachParticle) => {
      eachParticle.applyForce(force);
    });
  }

  update() {
    for (let a = particles.length - 1; a >= 0; a--) {
      this.particles[i].update();
      this.particles[i].display();
      if (particles[a].isDead()) {
        particles.splice(a, 1);
      }
    }
  }

  display() {
    this.particles.forEach((eachParticle) => {
      eachParticle.display();
    });
  }
}

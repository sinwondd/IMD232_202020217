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
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      this.particles[i].display();
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

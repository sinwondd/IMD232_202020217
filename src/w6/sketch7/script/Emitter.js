class Emitter {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin.x, this.origin.y));
  }

  applyGravity(gravity) {
    this.particles.forEach((eachParticle) => {
      const force = p5.Vector.mult(gravity, eachParticle.mass);
      eachParticle.applyForce(force);
    });
  }

  applyForce(force) {
    this.particles.forEach((eachParticle) => {
      eachParticle.applyForce(force);
    });
  }

  applyRepeller(repeller) {
    this.particles.forEach((eachParticle) => {
      const force = repeller.repel(eachParticle);
      eachParticle.applyForce(force);
    });
  }

  run() {
    this.particles = this.particles.filter((particle) => !particle.isDead());
    this.particles.forEach((eachParticle) => {
      eachParticle.run();
    });
  }
}

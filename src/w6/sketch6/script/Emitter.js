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

  run() {
    // for (let i = this.particles.length - 1; i >= 0; i--) {
    //   this.particles[i].run();
    //   if (this.particles[i].isDead()) {
    //     this.particles.splice(i, 1);
    //   }
    // }

    this.particles = this.particles.filter((particle) => !particle.isDead());
    this.particles.forEach((eachParticle) => {
      eachParticle.run();
    });
  }
}

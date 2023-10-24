class Emitter {
  constructor(pos) {
    this.pos = pos;
    this.particles = [];
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].display();
    }
  }
}

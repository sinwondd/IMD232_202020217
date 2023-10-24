class Emitter {
  constructor() {
    this.particles = [];
  }

  emit(x, y) {
    for (let i = 0; i < 100; i++) {
      let p = new Particle(x, y, color(random(360), 100, 50));
      this.particles.push(p);
    }
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
    for (let particle of this.particles) {
      particle.display();
    }
  }
}

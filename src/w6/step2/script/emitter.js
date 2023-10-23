class Emitter {
  constructor() {
    this.position = createVector(0, 0);
  }

  setPosition(x, y) {
    this.position.set(x, y);
  }

  emitParticles(count, angle = undefined) {
    for (let i = 0; i < count; i++) {
      let p = new Particle(this.position.x, this.position.y);
      if (angle !== undefined) {
        p.velocity.rotate(radians(angle));
      }
      particles.push(p);
    }
  }

  update() {
    // Emitter 업데이트 로직
  }

  display() {
    // Emitter 디스플레이 로직
  }
}

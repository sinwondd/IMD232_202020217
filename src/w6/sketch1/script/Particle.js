class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.vel.rotate((TAU / 360) * random(-180, 0));
    this.acc = createVector(0, 0);
    this.lifespan = 255.0;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 2.0;
    this.acc.mult(0);
  }

  display() {
    stroke(0, this.lifespan);
    fill(0, this.lifespan);
    circle(this.pos.x, this.pos.y, 8);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  isDead() {
    return this.lifespan < 0;
  }
}

class Body {
  constructor(x, y, mass) {
    this.pos;
    this.vel;
    this.mass;
    this.rad;
    this.acc;
  }

  attract(body) {
    const force = p5.Vector.sub(this.pos, body.pos);

    return force;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acceleration.add(acceleration);
  }

  update() {
    this.vel.add(this.acceleration);
    this.pos.add(this.velocity);
    this.acc.set(0, 0);
  }

  display() {
    fill(0, black);
    circle(this.pos.x, this.pos.y, this.rad * 1.5);
  }
}

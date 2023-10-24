class Particle {
  constructor(x, y, color) {
    this.pos = createVector(x, y);
    this.velocity = p5.Vector.random2D().mult(random(19, 20));
    this.acc = createVector(0, 0);
    this.mass = 10;
    this.rad = 5;
    this.color = color;
    this.lifeSpan = 60;
  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  update() {
    this.velocity.add(this.acc);
    this.pos.add(this.velocity);
    this.acc.mult(0);
    this.lifeSpan--;
    this.color.setAlpha(map(this.lifeSpan, 0, 60, 0, 100));
  }
  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpan <= 0 || this.pos.y > height;
  }
}

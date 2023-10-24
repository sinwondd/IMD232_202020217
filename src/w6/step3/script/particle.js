class Particle {
  constructor(x, y, color) {
    this.pos = createVector(x, y);
    this.velocity = createVector(random(19, 20), 0);
    this.acc = createVector(0, 0.01);
    this.mass = 10;
    this.rad = 8;
    this.color = color;
    this.angle = 0;
    this.angleVel = radians(random(-5, 5));
    this.angleAcc = radians(random(-0.05, 0.05));
    this.lifeSpan = 60;
  }

  applyForce(force) {
    let calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.velocity.add(this.acc);
    this.pos.add(this.velocity);
    this.acc.mult(0);
    this.angleVel += this.angleAcc;
    this.angle += this.angleVel;
    this.lifeSpan -= 1;
    // Gradually reduce the alpha (transparency) as the particle ages
    this.color.setAlpha(map(this.lifeSpan, 0, 60, 0, 100));
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    fill(this.color);
    noStroke();
    ellipse(0, 0, this.rad * 2);
    pop();
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}

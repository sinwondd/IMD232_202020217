class Particle {
  constructor(x, y, color) {
    this.pos = createVector(x, y);
    this.velocity = p5.Vector.random2D().mult(random(19, 20));
    this.acc = createVector(0, 0);
    this.mass = 10;
    this.rad = 5;
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
    this.color.setAlpha(map(this.lifeSpan, 0, 60, 0, 100));
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    fill(this.color, this.lifeSpan);
    noStroke(0, this.lifeSpan);
    ellipse(0, 0, this.rad * 2);

    pop();
  }

  isDead() {
    return this.lifeSpan <= 0 || this.pos.y > height;
  }
}

class Particle {
  constructor(x, y, rad, color) {
    this.pos = createVector(x, y);
    this.velocity = createVector(random(19, 20), 0);
    this.acc = createVector(0, 0.1);
    this.mass = 1;
    this.rad = 10;
    this.color = color;
    this.angle = 0;
    this.angleVel = radians(random(-5, 5));
    this.angleAcc = radians(random(-0.05, 0.05));
    this.lifespan = 60;
  }

  applyForce(force) {
    let calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angleVel += this.angleAcc;
    this.angle += this.angleVel;
    this.lifespan -= 1;
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    fill(this.color);
    noStroke();
    ellipse(0, 0, this.rad);

    pop();
  }
  isDead() {
    return this.lifespan <= 0;
  }
}

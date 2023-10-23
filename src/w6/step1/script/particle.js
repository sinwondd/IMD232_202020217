class Particle {
  constructor(x, y, speed, color) {
    this.x = x;
    this.y = y;
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.vel.rotate((TAU / 360) * random(-150, -30));
    this.speed = speed;
    this.size = 15;
    this.color = color;

    this.rotationSpeed = random(-10, 100);
  }

  applyForce(force) {
    this.velocity.add(force);
  }

  update() {
    this.y += this.speed;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.rotate(this.rotationSpeed);
  }

  display() {
    fill(this.color);
    push();
    translate(this.x, this.y);
    rotate(this.vel.heading());
    rect(0, 0, this.size, this.size);
    pop();
  }

  OffScreen() {
    return this.y > height;
  }
}

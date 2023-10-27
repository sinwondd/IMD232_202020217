class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = this.mass ** (1 / 2) * 5;
    this.isHover = false;
    this.isDragging = false;
    this.draggingOffset = createVector();
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    if (!this.isDragging) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }
    this.acc.mult(0);
  }

  edgeBounce() {
    const bounce = -0.7;
    if (this.pos.x < 0 + this.rad) {
      this.pos.x = 0 + this.rad;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.rad) {
      this.pos.x = width - 1 - this.rad;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.rad) {
      this.pos.y = height - 1 - this.rad;
      this.vel.y *= bounce;
    }
  }

  display() {
    noStroke();
    if (this.isDragging) {
      fill('blue');
    } else if (this.isHover) {
      fill('red');
    } else {
      fill(0);
    }
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true;
      this.vel.mult(0);
      this.draggingOffset.set(mX - this.pos.x, mY - this.pos.y);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      this.pos.set(mX - this.draggingOffset.x, mY - this.draggingOffset.y);
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}

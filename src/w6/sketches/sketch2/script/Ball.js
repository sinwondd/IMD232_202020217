class Ball {
  constructor(posX, posY, velAngle, velMag, mass, h, s, v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector(1, 0);
    this.vel = rotate(velAngle);
    this.vel = mult(velMag);
    this.mass = mass;
    this.rad = this.mass * 5;
    this.color = color(h, s, v);
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    // const calcedAcc = force.div(this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    // this.vel.limit(5);
    this.pos.add(this.vel);
    // this.acc.set(0, 0);
    // this.acc.setMag(0);
    this.acc.mult(0);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }

  isDead() {
    return (
      this.pos.x < -this.rad ||
      this.pos.x > width + this.rad ||
      // this.pos.y < -this.rad || 이 부분은 화면 위로 넘어가면 삭제되게 하는 구문 여기를 뺴면 화면 위로 갔다가 다시 쏟아지게 할 수 있는것. 대신 양옆으로 넘어간 건 없어짐
      this.pos.y > height + this.rad
    );
  }
}

class Emitter {
  constructor(emittingPosX, emittingPosY) {
    this.emittingPos = createVector(emittingPosX, emittingPosY);
    this.balls = [];
  }

  createBall() {
    // 여기가 각도조정
    this.balls.push(
      new Ball(
        this.emittingPos.x,
        this.emittingPos.y,
        (TAU / 360) * -90 + random((TAU / 360) * -30, (TAU / 360) * 360),
        random(1, 5),
        random(360),
        100,
        50
      )
      // 90도의 각도에서 -30과 30이내의 범위에서 랜덤하게 쏟아나가도록 설정한것
    );
  }

  applyGravity(gravity) {
    this.balls.forEach((each) => {
      const scaledG = p5.Vector.mult(gravity, each.mass);
      each.applyForce(scaledG);
    });
  }

  applyForce(force) {
    this.balls.forEach((each) => {
      each.applyForce(force);
    });
  }

  update() {
    // this.balls.forEach((each) => {
    //   each.update();
    // });
    for (let index = this.balls.length - 1; index >= 0; index--) {
      this.balls[index.isDead];
    }
  }

  display() {
    this.balls.forEach((each) => {
      each.display();
    });
  }
}

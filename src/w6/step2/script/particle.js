class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    let angle = random(TWO_PI);
    let speed = random(5, 10);
    this.velocity = p5.Vector.fromAngle(angle).mult(speed);
    this.acceleration = createVector(0, 0.1);
    this.radius = 10;
    this.lifespan = 60;
    this.color = color(random(360), 100, 100, (this.lifespan * 100) / 60);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;

    this.color = color(
      hue(this.color),
      saturation(this.color),
      lightness(this.color),
      (this.lifespan * 100) / 60
    );
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.radius * 2);
  }

  isDead() {
    return this.lifespan <= 0 || this.position.y > height;
  }
}

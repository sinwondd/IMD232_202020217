function setup() {
  setCanvasContainer('canvasYO', 600, 300, true);
  // console.log(width);
  // console.log(height);
}

function draw() {
  background('#FAEBD7');

  fill('#D2B48C');
  rect(0, 0, width, 20);

  fill('#A0522D');
  rect(0, height * 0.8, width * 100, height * 0.9);

  stroke('#DEB887');
  strokeWeight(15);
  fill('#87CEFA');
  circle(width / 2, height / 2, width / 5);
  line(width * 0.4, height / 2, width * 0.6, height / 2);
  line(width * 0.5, height * 0.7, width * 0.5, height * 0.3);

  noStroke();
  fill('#FFF9EC');
  circle(width / 2, height * 0.2, width * 0.076);
  stroke(150);
  strokeWeight(3);
  line(width / 2, height / 5, width / 2, 1);

  noStroke();
  fill('#FFFF00');
  circle(width / 2, height * 0.2, width * 0.06);
  fill('255');
  circle(width / 2, height * 0.16, width * 0.02);

  fill('#CD853F');
  rect(width / 3, height * 0.7, width / 60, height * 0.2, 5);
  rect(width / 2.5, height * 0.7, width / 60, height * 0.2, 5);
  rect(width / 3.2, height * 0.68, width / 9, height * 0.05, 20);
  rect(width / 2.5, height * 0.5, width / 45, height * 0.2, 20);
  fill('#A0522D');
  rect(width / 3.2, height * 0.71, width / 9, height * 0.02, 10);

  fill('#DEB887');
  rect(width / 12, height * 0.6, width / 60, height * 0.3, 5);
  rect(width / 2.8, height * 0.6, width / 60, height * 0.3, 5);
  fill('#DEB887');
  rect(width / 14, height / 1.7, width / 3.2, height / 30, 5);
  fill('#CD853F');
  rect(width / 14, height / 1.62, width / 3.2, height / 60, 5);
  fill('#1E90FF');
  rect(width / 5.45, height / 1.76, width / 30, height / 50);
  circle(width / 5, height * 0.51, width / 15);

  fill('#8B4513');
  rect(width / 1.6, height * 0.7, width / 40, height * 0.2, 10);
  rect(width / 1.04, height * 0.7, width / 40, height * 0.2, 10);
  fill('#BDB76B');
  rect(width / 1.635, height / 1.5, width / 2.6, height / 6, 20);
  rect(width / 1.6, height / 1.8, width / 2.8, height / 6, 20);

  fill('#F0E68C');
  rect(width / 1.635, height / 1.5, width / 2.6, height / 15, 20);

  fill('#FF69B4');
  translate(width / 5, height * 0.42, width / 15);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 10, 10, 50);
    rotate(PI / 5);
  }
}

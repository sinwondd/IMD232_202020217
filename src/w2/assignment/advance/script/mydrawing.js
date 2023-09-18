function setup() {
  setCanvasContainer('canvasYO', 600, 300, true);
  console.log(width);
  console.log(height);
}

function draw() {
  background('#FAF0E6');

  fill('#FFE4C4');
  rect(0, 0, width, 20);

  fill('#D2B48C');
  rect(0, height - 100, width, 100);

  stroke('#DEB887');
  strokeWeight(8);
  fill('#87CEFA');
  circle(width / 2, height / 2, width / 5);
  line(width / 2, height / 5, width / 2);
  line(width / 2, height / 1.44, 60);

  noStroke();
  fill('#FFF8DC');
  circle(width / 2, height * 0.2, width * 0.1);
  stroke(150);
  strokeWeight(3);
  line(width / 2, height / 5, width / 2, 1);

  noStroke();
  fill('#FFFF00');
  circle(width / 2, height * 0.2, width * 0.09);
  fill('white');
  circle(width / 2, height * 0.16, width * 0.04);

  fill('#DEB887');
  rect(360, 300, 10, -50);
  rect(360, 250, 15, -60);
  rect(320, 300, 10, -50);
  rect(320, 300, 10, -50);
  rect(310, 260, 60, -20);

  fill('#CD853F');
  rect(310, 260, 60, -8);
  fill('#DEB887');
  rect(120, 300, 15, -90);
  fill('#DEB887');
  rect(285, 300, 15, -90);
  fill('#DEB887');
  rect(100, 200, 220, 10);
  fill('#CD853F');
  rect(110, 210, 200, 10);
  fill('#FFFFFF');
  rect(215, 200, 20, -15);
  circle(225, 175, 45, -20);

  fill('#800000');
  rect(460, 300, 20, -50, 15);
  rect(660, 300, 20, -50, 15);
  fill('#808000');
  rect(460, 180, 230, 85, 20);
  fill('#6B8E23');
  rect(460, 185, 230, 85, 20);
  fill('#556B2F');
  rect(450, 230, 250, 55, 20);
  fill('#228B22');
  rect(450, 230, 250, 15, 20);
}

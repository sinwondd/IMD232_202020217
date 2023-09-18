function setup() {
  setCanvasContainer('canvasYO', 500, 300, true);
}

function draw() {
  background('#FAF0E6');

  noStroke();

  fill('#D2B48C');
  rect(0, 0, width, 20);

  fill('#FFE4C4');
  rect(0, height - 90, width, 100);

  stroke('#DEB887');
  strokeWeight(8);
  fill('#87CEFA');
  circle(120, 120, 120, 500);
  line(60, 125, 180, 125);
  line(140, 170, 140, 65);

  noStroke();
  fill('#FFF8DC');
  circle(290, 100, 80);

  stroke(150);
  strokeWeight(3);
  line(290, 100, 290, 0);

  noStroke();
  fill('#FFFF00');
  circle(290, 100, 50);
  fill('white');
  circle(290, 90, 20);

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
  fill('#808000');
  rect(460, 180, 200, 85, 20);
  fill('#6B8E23');
  rect(460, 185, 200, 55, 20);
  fill('#556B2F');
  rect(450, 230, 250, 55, 20);
  fill('#228B22');
  rect(450, 230, 200, 15, 20);

  fill('#DB7093');
  strokeWeight(8);
  point(200, 200, 100, 20);
}

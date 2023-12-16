let Vid;
let magnification = 2;
let circleDiameter = 100;

function setup() {
  createCanvas(800, 600);
  noStroke();

  Vid = createCapture(VIDEO);
  Vid.size(width, height);
  Vid.hide();

  console.log(Vid);
}

function draw() {
  background(255);

  // 마우스 위치에 따라 동그란 영역을 표시
  let mouseX_circle = mouseX;
  let mouseY_circle = mouseY;

  ellipse(mouseX_circle, mouseY_circle, circleDiameter, circleDiameter);

  let videoX = map(
    mouseX_circle - circleDiameter / 2,
    0,
    width,
    0,
    Vid.width - circleDiameter
  );
  let videoY = map(
    mouseY_circle - circleDiameter / 2,
    0,
    height,
    0,
    Vid.height - circleDiameter
  );

  push();
  translate(mouseX_circle, mouseY_circle);
  scale(magnification);
  image(
    Vid.get(videoX, videoY, circleDiameter, circleDiameter),
    -circleDiameter / 2,
    -circleDiameter / 2,
    circleDiameter,
    circleDiameter
  );
  pop();
}

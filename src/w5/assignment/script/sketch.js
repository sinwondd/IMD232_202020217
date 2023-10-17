const cNum = 8;
const rNum = 8;
const marginRatio = 2;

let angleBegin = 0;
let angleBeginVel = 1; // 매 프레임마다 증가할 각도

function setup() {
  createCanvas(windowWidth, windowHeight);
  const minDimension = min(width, height);
  const gridSize = minDimension / (cNum + marginRatio);
  gridC = gridSize;
  gridR = gridSize * marginRatio;

  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);

  let angle = angleBegin; // 각 행의 첫 번째 그래픽의 각도

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      const x = c * gridC + gridC / 2;
      const y = r * gridR + gridR / 2;

      push();
      translate(x, y);
      rotate(radians(angle)); // 각도를 라디안으로 변환하여 회전
      const colorIndex = (r + c) % 4; // 4가지 색상으로 구분 (0부터 3까지 순환)
      drawGraphic(colorIndex);
      drawLine(); // 동그라미 안에 선 그리기
      pop();

      angle += 15; // 15도씩 증가
    }
  }

  angleBegin += angleBeginVel; // 시작 각도 증가
}

function drawGraphic(colorIndex) {
  const colors = [
    color(30, 80, 70),
    color(150, 80, 70),
    color(240, 80, 70),
    color(0, 80, 70),
  ];
  fill(colors[colorIndex]);
  stroke(0);
  strokeWeight(2);
  ellipse(0, 0, gridC, gridR);
}

function drawLine() {
  const lineLength = min(gridC, gridR) / 2;
  line(0, 0, lineLength, 0);
}

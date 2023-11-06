let traffic;
let infiniteOffset = 80;
// 화면 경계를 넘어갈 때 개체를 반대편으로 이동시키는 데 사용

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  colorMode(HSL, 360, 100, 100, 100);
  //   컬러 모드
  background('white');
  //   화면의 배경색을 흰색
  traffic = new Traffic();
  //   "Traffic" 클래스의 인스턴스를 생성하고 "traffic" 변수에 할당
  for (let n = 0; n < 10; n++) {
    // 반복문을 사용하여 초기에 10개의 "Vehicle" 객체를 임의의 위치에 생성하고 "Traffic" 객체에 추가
    traffic.addVehicle(random(width), random(height));
  }
}

function draw() {
  background('white');
  traffic.run();
  //   "Traffic" 객체의 "run" 메서드를 호출하여 개체 그룹의 모든 "Vehicle" 객체를 업데이트하고 표시
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
  //   마우스를 드래그할 때 호출되는 함수로, 마우스의 현재 위치에 새 "Vehicle" 객체를 추가하여 마우스 위치에 개체를 생성
}

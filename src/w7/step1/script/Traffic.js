class Traffic {
  constructor() {
    this.vehicles = [];
    // "Traffic" 객체를 생성합니다. "vehicles"은 "Vehicle" 객체의 인스턴스를 저장하는 용도로 활용.
  }

  run() {
    // "Traffic" 객체 내의 모든 "Vehicle" 객체에 대해 실행되며, 각 "Vehicle" 객체의 동작을 처리됨.
    this.vehicles.forEach((eachVehicle) => {
      const separate = eachVehicle.separate(this.vehicles);
      //   현재 "Vehicle" 객체를 다른 모든 "Vehicle" 객체와 분리시키는 힘을 계산하고 "separate" 변수에 저장
      separate.mult(1);
      eachVehicle.applyForce(separate);
      //   "separate" 힘을 현재 "Vehicle" 객체에 적용
      const align = eachVehicle.align(this.vehicles);
      //   현재 "Vehicle" 객체를 다른 모든 "Vehicle" 객체와 정렬시키는 힘을 계산하고 "align" 변수에 저장
      align.mult(0.5);
      eachVehicle.applyForce(align);
      //   "align" 힘을 현재 "Vehicle" 객체에 적용
      const cohesion = eachVehicle.cohesion(this.vehicles);
      //   "Vehicle" 객체를 다른 모든 "Vehicle" 객체와 함께 모이게 하는 힘을 계산하고 "cohesion" 변수에 저장시킴
      cohesion.mult(0.5);
      eachVehicle.applyForce(cohesion);
      //   : "cohesion" 힘을 현재 "Vehicle" 객체에 적용
      eachVehicle.update();
      //   \현재 "Vehicle" 객체의 위치 및 속도를 업데이트
      eachVehicle.borderInfinite();
      //   현재 "Vehicle" 객체가 화면 경계를 넘어갈 때 반대편으로 이동
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    const mass = 1;
    // "Vehicle" 객체의 질량을 설정
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
      //   "vehicles" 배열에 새로운 "Vehicle" 객체를 추가. 이 객체는 주어진 위치 (x, y)와 설정된 매개변수를 사용하여 생성
    );
  }
}

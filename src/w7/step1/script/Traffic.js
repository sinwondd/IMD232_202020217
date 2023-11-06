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
      const align = eachVehicle.align(this.vehicles);
      //   현재 "Vehicle" 객체를 다른 모든 "Vehicle" 객체와 정렬시키는 힘을 계산하고 "align" 변수에 저장
      align.mult(0.5);
      eachVehicle.applyForce(align);
      const cohesion = eachVehicle.cohesion(this.vehicles);
      cohesion.mult(0.5);
      eachVehicle.applyForce(cohesion);
      eachVehicle.update();
      eachVehicle.borderInfinite();
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    const mass = 1;
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    );
  }
}

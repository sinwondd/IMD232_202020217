class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y);
    // createVector 함수를 사용하여 2D 위치 벡터를 초기화하고, 현재 위치로 설정.
    this.vel = p5.Vector.random2D();
    // "vel"이라는 속도 벡터를 무작위 방향으로 초기화.
    this.acc = createVector();
    // "acc"라는 가속도 벡터를 초기화.
    this.mass = mass;
    // 변수를 설정
    this.rad = rad;
    // 변수를 설정
    this.speedMx = speedMx;
    // 변수를 설정
    this.forceMx = forceMx;
    // 변수를 설정
    this.neighborhooodRad = 50;
    // s반경을 나타내는 "neighborhoodRad" 변수를 설정
    this.color = color;
  }

  cohesion(others) {
    // 인접 이웃 개체와의 응집 동작을 처리
    let cnt = 0;
    const steer = createVector(0, 0);

    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          // 현재 객체와 다른 개체 사이의 제곱 거리를 계산.
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          // 거리가 다른 개체와 반경 내에 있는 경우에만 실행.
          steer.add(each.pos);
          //   "steer" 벡터에 현재 이웃의 위치를 더하기.
          cnt++;
          //  개체의 수를 증가시킴.
        }
      }
    });
    if (cnt > 0) {
      // 개체가 한 개 이상인 경우에만 실행.
      steer.div(cnt);
      steer.sub(this.pos);
      //   "steer" 벡터에서 현재 위치를 빼기.
      steer.setMag(this.speedMx);
      //   "steer" 벡터의 크기를 최대 속도로 설정.
      steer.sub(this.vel);
      steer.limit(this.forceMx);
      //   "steer" 벡터를 최대 힘으로 제함을 줌.
    }
    return steer;
  }

  align(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.vel);

          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  separate(others) {
    // 이웃 개체와의 분리 동작을 만듬
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const dist = this.pos.dist(each.pos);
        if (dist > 0 && this.rad + each.rad > dist) {
          const distNormal = dist / (this.rad + each.rad);
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          towardMeVec.setMag(1 / distNormal);
          steer.add(towardMeVec);
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  applyForce(force) {
    // 외부에서 힘을 객체에 적용
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    // 전달된 힘을 객체의 질량으로 나누어 가속도로 변환
    this.acc.add(forceDivedByMass);
    // 가속도를 현재 가속도에 추가
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    // 속도를 최대 속도로 제한
    this.pos.add(this.vel);
    // 위치를 현재 위치에 현재 속도를 더해 업데이트
    this.acc.mult(0);
    // 가속도를 초기화
  }

  borderInfinite() {
    // 화면 경계에서 객체를 무한대로 이동시키는 효과를 구현
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
      //   객체가 화면 왼쪽 경계를 벗어난 경우를 확인하여 오른쪽 경계로 이동시킴
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
      //   객체가 화면 오른쪽 경계를 벗어난 경우를 확인하여 왼쪽으로 이동
    }
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
      //   객체가 화면 위쪽 경계를 벗어난 경우를 확인하여 아래로 이동
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
      //   객체가 화면 아래쪽 경계를 벗어난 경우 위로 이동
    }
  }

  display() {
    push();
    // 저장
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    // 현재 속도의 각도에 따라 회전 변환
    noStroke();
    fill(this.color);
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    // 다각형 모양 그리기를 종료
    pop();
    // 복원
  }
}

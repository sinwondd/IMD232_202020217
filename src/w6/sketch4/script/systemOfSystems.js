let emitters = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}

function draw() {
  background(255);
  //   emitters.forEach((eachEmitter) => {
  //     eachEmitter.addParticle();
  //     eachEmitter.run();
  //   });
  for (let anEmitter of emitters) {
    anEmitter.addParticle();
    anEmitter.run();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}

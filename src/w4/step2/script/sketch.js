let mover;
let gravity;
let mVec;
let pMVec;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  mover = new Mover(width / 2, height / 2, 100);
  gravity = createVector(0, 0.5);

  mVec = createVector();
  pMVec = createVector();

  background(255);
}

function draw() {
  const force = p5.Vector.mult(gravity, mover.mass);

  mover.applyForce(force);
  mover.update();
  mover.edgeBounce();

  background(255);

  mover.display();
}

function mouseMoved() {
  mover.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  mover.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  mover.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  mover.mouseReleased();
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);
  const throwingForce = p5.Vector.sub(mVec, pMVec);
  throwingForce.mult(15);
  mover.applyForce(throwingForce);
}

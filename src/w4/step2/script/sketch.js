let mover;
let gravity;
let mVec;
let pMVec;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  mover = new Mover(width / 2, height / 2, 20);
  gravity = createVector(0, 0.1);
  mVec = createVector();
  pMVec = createVector();
}

function draw() {
  background(255);

  if (mover.isDragging) {
    let mouseVec = createVector(mouseX, mouseY);
    let dragForce = p5.Vector.sub(mouseVec, pMVec).mult(0.1);
    mover.applyForce(dragForce);
  }

  let gravityForce = p5.Vector.mult(gravity, mover.mass);
  mover.applyForce(gravityForce);

  mover.update();
  mover.edgeBounce();

  // Display the Mover
  mover.display();
}

// ... Existing code ...

function mouseDragged() {
  pMVec.set(pmouseX, pmouseY);

  // If dragging, update the position of the mover
  if (mover.isDragging) {
    mover.mouseDragged(mouseX, mouseY);
  }
}

function mouseReleased() {
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  // If dragging, release the mover
  if (mover.isDragging) {
    // Calculate the throwing force based on mouse movement speed
    let throwForce = p5.Vector.sub(mVec, pMVec).mult(0.1);
    mover.applyThrowForce(throwForce);
    mover.mouseReleased();
  }
}

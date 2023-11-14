const {
  Engine,
  Render,
  Runner,
  Constraint,
  MouseConstraint,
  Body,
  Mouse,
  Vertices,
  Svg,
  Composite,
  Composites,
  Common,
  Bodies,
} = Matter;

// Import poly-decomp library
const decomp = require('poly-decomp');

Common.setDecomp(decomp);

const engine = Engine.create(),
  world = engine.world;

const runner = Runner.create();

const oWidth = 800;
const oHeight = 600;

let mouse;
let mouseConstraint;

// Group for collision filtering
let group;

// Function to set up the canvas
function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);
  background('white');

  // Create the first chain with circles
  let ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  // Create the second chain with circles
  let ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  // Create the third chain with a concave shape (rectangle)
  let ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x - 20, y, 50, 20, {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  // Create mouse and mouse constraint
  mouse = Mouse.create(document.querySelector('.p5Canvas'));
  mouse.pixelRatio = pixelDensity();
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: { stiffness: 1 },
  });
  Composite.add(world, mouseConstraint);

  background('white');
  Runner.run(runner, engine);
}

// Function to draw the animation
function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;
  background('white');
  Engine.update(engine);

  // Draw the first chain (ropeA)
  drawChain(ropeA);

  // Draw the second chain (ropeB)
  drawChain(ropeB);

  // Draw the third chain (ropeC)
  drawChain(ropeC);
}

// Function to draw a chain
function drawChain(chain) {
  beginShape();
  for (let i = 0; i < chain.bodies.length; i++) {
    const body = chain.bodies[i];
    const vertices = body.parts[0].vertices; // Use the vertices of the first part

    for (let j = 0; j < vertices.length; j++) {
      vertex(vertices[j].x, vertices[j].y);
    }
  }
  endShape(CLOSE);
}

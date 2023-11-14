const {
  Engine,
  Render,
  Runner,
  Body,
  Constraint,
  MouseConstraint,
  Mouse,
  Vertices,
  Svg,
  Composite,
  Composites,
  Common,
  Bodies,
} = matter;

Common.setDecomp(decomp),

const engine = Engine.create(),
  world = engine.world;

const runner = Runner.create();

const oWidth = 800;
const oHeight = 600;

let mouse;
let mouseConstraint;

const walls = [];
let stack;

function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);
  background('white');


  walls.push(Bodies.rectangle(400, 0, 800, 50, { isStatic: true }));
  walls.push(Bodies.rectangle(400, 600, 800, 50, { isStatic: true }));
  walls.push(Bodies.rectangle(800, 300, 50, 600, { isStatic: true }));
  walls.push(Bodies.rectangle(0, 300, 50, 600, { isStatic: true }));
  Composite.add(world, walls);






  mouse = Mouse.create(document.querySelector('.p5Canvas'));
  m.pixelRatio = pixelDensity();
  mouseConstraint = MouseConstraint.create(matterEngine, {
    mouse: m,
    constraint: { stiffness: 1 },
  });
  Composite.add(matterEngine.world, matterConstraint);

  Runner.run(eddRunner, eddEngine);
}



function draw() {
  background('white');
  // add bodies
let group = Body.nextGroup(true);

let ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
  return Bodies.rectangle(x, y, 50, 20, {
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

Composite.add(world, [
  ropeA,
  ropeB,
  ropeC,
  Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
]);

}

// create runner
let runner = Runner.create();
Runner.run(runner, engine);


// add mouse control
let mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// fit the render viewport to the scene
Render.lookAt(render, {
  min: { x: 0, y: 0 },
  max: { x: 700, y: 600 },
});


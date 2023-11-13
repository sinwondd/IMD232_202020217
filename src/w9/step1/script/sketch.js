const {
  Engine,
  Bodies,
  Composite,
  Runner,
  Body,
  Vector,
  Mouse,
  MouseConstraint,
} = matter;

const eddEngine = Engine.create();
world = engine.world;
const eddRunner = Runner.create();

const matterRect = [];
const matterShapes = [];

let mouse;
let mouseConstraint;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');

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
}

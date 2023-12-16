let Vid;
let Shader;

function filter() {
  Shader = loadShader('shader.vert, 'shader.frag')
}
function setup() {
  setCanvasContainer(800, 600, WEBGL);

  noStroke();

noLoop();

  Vid = createCapture(VIDEO);
  Vid.size(width, height);
  Vid.hide();

  console.log(Vid);
}

function draw() {
  background(255);
shader(Shader);

  Vid.position(0, 0);

  image(Vid, 0, 0, width, height);
}

function setup() {
  const thisCanvas = createCanvas(windowWidth, windowHeight);
  thisCanvas.parent('wishtreep5Div');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let x = 0;
let y = 0;
let dx = 0;
let dy = 0;
let easing = 0.05;
let targetX = 0;
let targetY = 0;

function draw() {
  clear(0);
  targetX = mouseX;
  dx = targetX - x;
  x += dx * easing;
  targetY = mouseY;
  dy = targetY - y;
  y += dy * easing;
  
  fill(0);
  textSize(100);
  ellipse(x, y, 50, 50);
}
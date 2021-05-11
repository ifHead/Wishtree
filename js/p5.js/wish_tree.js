let customHeight = 600;

function setup() {
  const thisCanvas = createCanvas(windowWidth, customHeight);
  thisCanvas.parent('wishtreep5Div');
}

function windowResized(){
  resizeCanvas(windowWidth, customHeight);
}

function draw() {
  clear();
  fill(0);
  ellipse(width/2, customHeight/2, 50, 50);
}
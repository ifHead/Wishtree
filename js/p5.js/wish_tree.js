let x = 0; // x coordiante for lines
let y = 0; // y coordinate for lines

let stepRight = 0; // x coordinate takes a step to the right.
let direction = 1; // reverses the direction of y growth.
let rotateMatrix = 0; // value for rotate()
let translateX, translateY = 0; // value for translate()
let loopCount = 1; // determines traslation and rotation
let growth; // it determines growth range.
let p = 0.5;

let displaySize = 500;
let drawloopcount = 0;

function setup() {
  createCanvas(windowWidth, displaySize);
  background(0);
  growth = random(20, 50);
}

function windowResized(){
  resizeCanvas(windowWidth, displaySize);
}

function draw() {
  noStroke();
  if(drawloopcount%2 == 0) {
    fill(0, 2);
    rect(0, 0, width, height);
  } else if (drawloopcount%3 == 0) {
    fill(0, random(5,40));
    rect(0, 0, width, height);
  }
  stroke(255);
  strokeWeight(2);

  translate(translateX,translateY);
  
  if (random() > p) {
    rotate(radians(rotateMatrix));
  	line(x, y, x+growth, y+(direction*growth)); // draw backslash
  } else {
    rotate(radians(rotateMatrix));
  	line(x+growth, y, x, y+(direction*growth)); // draw slash
  }
  
  if (y > height || y < 0) {
    stepRight += growth;
    direction = direction * -1;
  }

  if (x >= 0) {
    y += direction*growth;
    x = stepRight;
  }
  
  if (x > width){
    x = 0;
    y = 0;
    stepRight = 0;
    direction = 1;
    growth = random(30,100);
    
    loopCount = 1;
    

    translateX = 0;
    translateY = 0;
    rotateMatrix = 0;
  }
  
  drawloopcount ++;
}
let test_sketch = function(p){
  p.setup = function(){
		p.noCursor();
    p.cnv = p.createCanvas(window.innerWidth, window.innerHeight);
    p.cnv.position(200, 200);
  }
  p.draw = function(){
    p.noFill();
    p.stroke(255,0,0);
    p.strokeWeight(10);
    p.rect(0,0,width,height);
  }
}

let superP5_1 = new p5(ink_sketch);
let test_sketch = function(p){
  p.setup = function(){
    p.canva = createCanvas(300, 300);
		p.canva.position(100,100);
  }
  p.draw = function(){
		p.background(0);
  }
}

let superP5_1 = new p5(test_sketch);
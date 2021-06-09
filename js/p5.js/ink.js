let test_sketch = function(p){
  p.setup = function(){
    p.cnv1 = p.createCanvas(500, 500);
    p.cnv1.position(200, 200);
  }
  p.draw = function(){
    p.noFill();
    p.stroke(255,0,0);
    p.strokeWeight(10);
    p.rect(100,100,300,300);
  }
}

let ink_sketch = function(p){ // 잉크 스케치
  const cosX = new Float32Array([
      0.500,  0.492,  0.470,  0.433,  0.383,  
      0.321,  0.250,  0.171,  0.087,  0.000,  
      -0.087,  -0.171,  -0.250,  -0.321,  -0.383,  
      -0.433,  -0.470,  -0.492,  -0.500,  -0.492, 
      -0.470,  -0.433,  -0.383,  -0.321,  -0.250, 
      -0.171,  -0.087,  -0.000,  0.087,  0.171,  
      0.250,  0.321,  0.383,  0.433,  0.470,  
      0.492
  ]);

  const sinY = new Float32Array([
      0.000,  0.087,  0.171,  0.250,  0.321,  
      0.383,  0.433,  0.470,  0.492,  0.500,  
      0.492,  0.470,  0.433,  0.383,  0.321,  
      0.250,  0.171,  0.087,  0.000,  -0.087,  
      -0.171,  -0.250,  -0.321,  -0.383,  -0.433,  
      -0.470,  -0.492,  -0.500,  -0.492,  -0.470,  
      -0.433,  -0.383,  -0.321,  -0.250,  -0.171,  
      -0.087
  ]);

  p.ink = new Array(300);
  p.init = 0;

  // p.get_currentWishText = function(){
  //     console.log(currentWishText);
  // }

  p.setup = function() {
    p.cnv = p.createCanvas(500, 500);
    p.cnv.position(0, 0);
    p.frameRate(30);
    for(let i = 0; i < 300; i++){
      p.ink[i] = new Ink(200,200);
    }
  }
  p.draw = function() {
    for(let i = 0; i < 50; i++){
      p.ink[i].drop();  
    }
    p.noFill();
    p.rect(0,0,500,500);
  }


  class Ink{
    constructor(_x, _y){
      this.ten_track = new Int8Array(10);
      this.x = _x;
      this.y = _y;
      this.alpha = 10;
      this.ink_amount = 5;
      this.choice = p.floor(p.random(0,37));
      for(let i = 0; i < 10; i++){
          this.ten_track[i] = this.choice + i;
          if(this.ten_track[i] > 35) { this.ten_track[i] += -36; }
      }
      
      this.seq_crossroad = {
        first : p.random(10, 20),
        second : p.random(35, 45),
        third : p.random(60, 70)
      }
    }
    drop(){
      this.proceed = this.ten_track[p.floor(p.random(0,10))];
      let r = p.random(-0.3,0.3);
      let r2 = p.random(-0.3,0.3);
      this.x += cosX[this.proceed] + r;
      this.y += sinY[this.proceed] + r2;
      this.alpha = p.lerp(this.alpha, 0, 0.03);
      this.ink_amount = p.lerp(this.ink_amount, 0, 0.03);
      p.strokeWeight(this.ink_amount);
      p.stroke(0, this.alpha);
      p.point(this.x,this.y);
    }
  }
}

let superP5_2 = new p5(test_sketch);
let superP5_1 = new p5(ink_sketch);